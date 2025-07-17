'use client';
import { useState } from 'react';
import { useProfile } from '@/contexts/ProfileContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { generateCareerAdvice, type CareerAdviceOutput } from '@/ai/flows/generate-career-advice';
import { Loader2, Lightbulb, BookOpen, Briefcase, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

export default function CoachPage() {
  const { profile, isProfileLoading } = useProfile();
  const [result, setResult] = useState<CareerAdviceOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const getAdvice = async () => {
    setIsLoading(true);
    setResult(null);
    try {
      const adviceResult = await generateCareerAdvice({
        skills: profile.skills,
        interests: 'Software Development, AI, Problem Solving', // Example interests
        experience: profile.experience.map(e => `${e.title} at ${e.company}: ${e.description}`).join('\n'),
      });
      setResult(adviceResult);
    } catch (error) {
      console.error("Failed to generate career advice:", error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not generate career advice. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderResult = () => {
    if (isLoading) {
      return (
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3 mt-8">
          <Card><CardHeader><Skeleton className="h-6 w-1/2" /></CardHeader><CardContent><Skeleton className="h-20 w-full" /></CardContent></Card>
          <Card><CardHeader><Skeleton className="h-6 w-1/2" /></CardHeader><CardContent><Skeleton className="h-20 w-full" /></CardContent></Card>
          <Card><CardHeader><Skeleton className="h-6 w-1/2" /></CardHeader><CardContent><Skeleton className="h-20 w-full" /></CardContent></Card>
        </div>
      );
    }

    if (!result) return null;

    return (
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3 mt-8 animate-in fade-in-50">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4 space-y-0">
            <Lightbulb className="size-8 text-accent" />
            <CardTitle className="font-headline">Career Advice</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground whitespace-pre-wrap">{result.advice}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4 space-y-0">
            <BookOpen className="size-8 text-accent" />
            <CardTitle className="font-headline">Learning Resources</CardTitle>
          </CardHeader>
          <CardContent>
             <p className="text-muted-foreground whitespace-pre-wrap">{result.learningResources}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4 space-y-0">
            <Briefcase className="size-8 text-accent" />
            <CardTitle className="font-headline">Job Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground whitespace-pre-wrap">{result.jobOpportunities}</p>
          </CardContent>
        </Card>
      </div>
    );
  };
  
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">AI Career Coach</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Get personalized career advice based on your profile. Our AI will analyze your skills and experience to provide actionable insights.
        </p>
      </header>

      <Card className="max-w-4xl mx-auto text-center">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Ready to find your path?</CardTitle>
          <CardDescription>
            Click the button below to generate your personalized career report.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button size="lg" onClick={getAdvice} disabled={isLoading || isProfileLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate My Career Advice
              </>
            )}
          </Button>
        </CardContent>
      </Card>
      
      {renderResult()}
    </div>
  );
}
