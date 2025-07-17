'use client';

import { useState, useMemo } from 'react';
import { jobs, type Job } from './data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { analyzeJobSuitability, type JobSuitabilityOutput } from '@/ai/flows/suggest-job-suitability';
import { useProfile } from '@/contexts/ProfileContext';
import { Loader2, MapPin, Search, Sparkles } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { useHistory } from '@/contexts/HistoryContext';

function SuitabilityAnalysis({ job }: { job: Job }) {
  const { profile } = useProfile();
  const [analysis, setAnalysis] = useState<JobSuitabilityOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { addToHistory } = useHistory();

  const handleAnalyze = async () => {
    setIsLoading(true);
    setAnalysis(null);
    try {
      const result = await analyzeJobSuitability({
        userProfile: `Skills: ${profile.skills}. Summary: ${profile.summary}`,
        jobDescription: job.description,
      });
      setAnalysis(result);
      addToHistory({
        tool: 'Job Analysis',
        input: { jobTitle: job.title, company: job.company },
        output: result,
      });
    } catch (error) {
      console.error('Failed to analyze job suitability:', error);
      toast({
        variant: 'destructive',
        title: 'Analysis Failed',
        description: 'Could not analyze job suitability. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-headline font-semibold">AI Suitability Check</h3>
          <p className="text-sm text-muted-foreground">See how well you match this role.</p>
        </div>
        <Button onClick={handleAnalyze} disabled={isLoading}>
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
          Analyze
        </Button>
      </div>
      {analysis && (
        <div className="mt-4 space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-primary">Suitability Score</span>
              <span className="text-sm font-medium text-primary">{Math.round(analysis.suitabilityScore * 100)}%</span>
            </div>
            <Progress value={analysis.suitabilityScore * 100} />
          </div>
          <div>
            <h4 className="font-semibold">Justification</h4>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{analysis.justification}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const searchMatch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.company.toLowerCase().includes(searchTerm.toLowerCase());
      const locationMatch = locationFilter === 'all' || job.location === locationFilter;
      const typeMatch = typeFilter === 'all' || job.type === typeFilter;
      return searchMatch && locationMatch && typeMatch;
    });
  }, [searchTerm, locationFilter, typeFilter]);
  
  const locations = useMemo(() => ['all', ...Array.from(new Set(jobs.map(j => j.location)))], []);
  const types = useMemo(() => ['all', ...Array.from(new Set(jobs.map(j => j.type)))], []);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">Job Board</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Discover opportunities perfectly aligned with your career goals.
        </p>
      </header>

      <Card>
        <CardContent className="p-4 flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search by title or company..." className="pl-10" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map(loc => <SelectItem key={loc} value={loc}>{loc === 'all' ? 'All Locations' : loc}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
               {types.map(type => <SelectItem key={type} value={type}>{type === 'all' ? 'All Types' : type}</SelectItem>)}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map(job => (
          <Dialog key={job.id}>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline">{job.title}</CardTitle>
                <CardDescription>{job.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-muted-foreground text-sm gap-2">
                  <MapPin className="h-4 w-4"/> {job.location}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center mt-auto">
                <Badge variant={job.type === 'Full-time' ? 'default' : 'secondary'}>{job.type}</Badge>
                <DialogTrigger asChild>
                  <Button variant="outline">View Details</Button>
                </DialogTrigger>
              </CardFooter>
            </Card>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="font-headline text-2xl">{job.title}</DialogTitle>
                <DialogDescription>
                  {job.company} - <span className="text-muted-foreground">{job.location}</span>
                </DialogDescription>
              </DialogHeader>
              <div className="prose prose-sm dark:prose-invert max-w-none max-h-[400px] overflow-y-auto pr-4">
                <p className="whitespace-pre-wrap">{job.description}</p>
              </div>
              <SuitabilityAnalysis job={job} />
            </DialogContent>
          </Dialog>
        ))}
      </div>
       {filteredJobs.length === 0 && (
         <div className="text-center py-16">
            <p className="text-lg font-semibold text-muted-foreground">No jobs match your criteria.</p>
            <p className="text-sm text-muted-foreground">Try adjusting your search or filters.</p>
         </div>
       )}
    </div>
  );
}
