'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useHistory, type HistoryItem } from '@/contexts/HistoryContext';
import { Bot, Briefcase, ClipboardCheck, University, Trash2, GraduationCap, Link as LinkIcon, CheckCircle, BookOpen, Lightbulb } from 'lucide-react';

const toolIcons: Record<HistoryItem['tool'], React.ReactNode> = {
  'Coach': <Bot className="h-5 w-5" />,
  'Skills': <ClipboardCheck className="h-5 w-5" />,
  'UniFinder': <University className="h-5 w-5" />,
  'Job Analysis': <Briefcase className="h-5 w-5" />,
};

const CoachResult = ({ item }: { item: HistoryItem }) => (
  <div className="space-y-4 text-sm">
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="font-headline text-base flex items-center gap-2">
          <Lightbulb className="size-5 text-accent" />
          Career Suggestion: {item.output.careerSuggestion}
        </CardTitle>
      </CardHeader>
    </Card>
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
            <CardTitle className="font-headline text-base flex items-center gap-2">
                <BookOpen className="size-5 text-accent" />
                Academics
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-xs">
            <div>
                <h4 className="font-semibold">Relevant Subjects</h4>
                <p className="text-muted-foreground">{item.output.relevantSubjects}</p>
            </div>
            <div>
                <h4 className="font-semibold">Suggested Programs</h4>
                <p className="text-muted-foreground">{item.output.suggestedPrograms}</p>
            </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
            <CardTitle className="font-headline text-base flex items-center gap-2">
                <University className="size-5 text-accent" />
                Kenyan Universities
            </CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground text-xs">{item.output.kenyanUniversities}</p>
        </CardContent>
      </Card>
    </div>
     <Card>
        <CardHeader>
            <CardTitle className="font-headline text-base flex items-center gap-2">
                <CheckCircle className="size-5 text-accent" />
                Next Steps
            </CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground whitespace-pre-wrap text-xs">{item.output.nextSteps}</p>
        </CardContent>
    </Card>
  </div>
);

const SkillsResult = ({ item }: { item: HistoryItem }) => (
  <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap text-muted-foreground">
    <p>{item.output.plan}</p>
  </div>
);

const UniFinderResult = ({ item }: { item: HistoryItem }) => (
  <div className="space-y-2">
    {item.output.universities.map((uni: any, index: number) => (
       <Card key={index} className="text-sm">
         <CardHeader className="pb-2">
           <CardTitle className="font-headline text-base">{uni.name}</CardTitle>
           <CardDescription>{uni.location}</CardDescription>
         </CardHeader>
         <CardContent className="space-y-1 text-xs">
           <div className="flex items-center gap-2">
             <GraduationCap className="h-4 w-4 text-muted-foreground" />
             <p><strong>Courses:</strong> {uni.courses.join(', ')}</p>
           </div>
            <div className="flex items-center gap-2">
             <LinkIcon className="h-4 w-4 text-muted-foreground" />
             <a href={uni.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                 {uni.website}
             </a>
           </div>
         </CardContent>
       </Card>
    ))}
  </div>
);

const JobAnalysisResult = ({ item }: { item: HistoryItem }) => (
  <div className="space-y-2 text-sm">
    <p><strong>Job:</strong> {item.input.jobTitle}</p>
    <p><strong>Company:</strong> {item.input.company}</p>
    <p><strong>Suitability:</strong> {Math.round(item.output.suitabilityScore * 100)}%</p>
    <div>
      <h4 className="font-semibold">Justification:</h4>
      <p className="text-muted-foreground whitespace-pre-wrap text-xs">{item.output.justification}</p>
    </div>
  </div>
);

const ResultDisplay = ({ item }: { item: HistoryItem }) => {
  switch (item.tool) {
    case 'Coach': return <CoachResult item={item} />;
    case 'Skills': return <SkillsResult item={item} />;
    case 'UniFinder': return <UniFinderResult item={item} />;
    case 'Job Analysis': return <JobAnalysisResult item={item} />;
    default: return <p>Cannot display this result.</p>;
  }
};


export default function HistoryPage() {
  const { history, clearHistory, isLoading } = useHistory();

  if (isLoading) {
    return (
      <div className="space-y-8">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">History</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Review your past interactions and generated results.
          </p>
        </header>
        <p>Loading history...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-start">
        <div>
            <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">History</h1>
            <p className="mt-2 text-lg text-muted-foreground">
            Review your past interactions and generated results.
            </p>
        </div>
        {history.length > 0 && (
            <Button variant="destructive" onClick={clearHistory}>
                <Trash2 className="mr-2"/>
                Clear History
            </Button>
        )}
      </header>

      <Card>
        <CardContent className="p-4 md:p-6">
          {history.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
                <p className="text-lg font-medium">No history yet.</p>
                <p className="text-sm">Your generated results from the AI tools will appear here.</p>
            </div>
          ) : (
            <Accordion type="single" collapsible className="w-full">
              {history.map((item) => (
                <AccordionItem value={item.id} key={item.id}>
                  <AccordionTrigger>
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-md text-primary">
                            {toolIcons[item.tool]}
                        </div>
                        <div>
                            <h3 className="font-semibold text-left">{item.tool}</h3>
                            <p className="text-xs text-muted-foreground text-left">
                                {new Date(item.timestamp).toLocaleString()}
                            </p>
                        </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 bg-secondary/50 rounded-b-md">
                    <ResultDisplay item={item} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </CardContent>
      </Card>
    </div>
  );
}