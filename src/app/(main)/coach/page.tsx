'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useProfile } from '@/contexts/ProfileContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { generateCareerAdvice, type CareerAdviceOutput } from '@/ai/flows/generate-career-advice';
import { Loader2, Lightbulb, BookOpen, Sparkles, University, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Skeleton } from '@/components/ui/skeleton';

const formSchema = z.object({
  skills: z.string().min(3, 'Please list at least one skill.'),
  interests: z.string().min(3, 'Please list at least one interest.'),
  experience: z.string().min(10, 'Please describe your experience or subjects.'),
});

type FormValues = z.infer<typeof formSchema>;


export default function CoachPage() {
  const { profile, isProfileLoading } = useProfile();
  const [result, setResult] = useState<CareerAdviceOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: profile.skills,
      interests: 'Software Development, AI, Problem Solving',
      experience: profile.experience.map(e => `${e.title} at ${e.company}`).join(', ') || profile.summary,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const adviceResult = await generateCareerAdvice(data);
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
    if (isLoading && !result) {
      return (
        <div className="grid gap-6 mt-8">
          <Card><CardHeader><Skeleton className="h-6 w-1/2" /></CardHeader><CardContent><Skeleton className="h-20 w-full" /></CardContent></Card>
          <Card><CardHeader><Skeleton className="h-6 w-1/2" /></CardHeader><CardContent><Skeleton className="h-20 w-full" /></CardContent></Card>
          <Card><CardHeader><Skeleton className="h-6 w-1/2" /></CardHeader><CardContent><Skeleton className="h-20 w-full" /></CardContent></Card>
        </div>
      );
    }

    if (!result) return null;

    return (
      <div className="mt-8 space-y-6 animate-in fade-in-50">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-4">
              <Lightbulb className="size-8 text-accent" />
              Career Suggestion: {result.careerSuggestion}
            </CardTitle>
          </CardHeader>
        </Card>
        
        <div className="grid gap-6 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2">
                        <BookOpen className="size-6 text-accent" />
                        Academics
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="font-semibold">Relevant Subjects</h4>
                        <p className="text-muted-foreground">{result.relevantSubjects}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">Suggested Programs</h4>
                        <p className="text-muted-foreground">{result.suggestedPrograms}</p>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2">
                        <University className="size-6 text-accent" />
                        Kenyan Universities
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{result.kenyanUniversities}</p>
                </CardContent>
            </Card>
        </div>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-lg flex items-center gap-2">
                    <CheckCircle className="size-6 text-accent" />
                    Next Steps
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground whitespace-pre-wrap">{result.nextSteps}</p>
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

      <Card className="max-w-4xl mx-auto">
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardHeader>
                <CardTitle className="font-headline">Find Your Path</CardTitle>
                <CardDescription>Fill in your details to generate personalized career advice.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Skills</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Problem Solving, Mathematics, Communication" {...field} />
                      </FormControl>
                       <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="interests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Interests & Favorite Subjects</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Computers, Biology, Art" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Experience / Context</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe any work experience or subjects you enjoy and excel at." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                 <Button size="lg" type="submit" disabled={isLoading || isProfileLoading}>
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
              </CardFooter>
            </form>
          </Form>
      </Card>
      
      {renderResult()}
    </div>
  );
}
