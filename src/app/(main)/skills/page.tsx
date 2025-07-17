'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useProfile } from '@/contexts/ProfileContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { generateSkillImprovementPlan } from '@/ai/flows/generate-skill-improvement-plan';
import { Loader2, Sparkles, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useHistory } from '@/contexts/HistoryContext';

const formSchema = z.object({
  skills: z.string().min(3, 'Please list at least one skill.'),
  careerGoals: z.string().min(10, 'Please describe your career goals.'),
  experienceLevel: z.enum(['entry-level', 'mid-level', 'senior-level']),
});

type FormValues = z.infer<typeof formSchema>;

export default function SkillsPage() {
  const { profile } = useProfile();
  const [plan, setPlan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { addToHistory } = useHistory();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: profile.skills,
      careerGoals: '',
      experienceLevel: 'entry-level',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setPlan(null);
    try {
      const result = await generateSkillImprovementPlan(data);
      setPlan(result.plan);
      addToHistory({ tool: 'Skills', input: data, output: result });
    } catch (error) {
      console.error('Failed to generate skill plan:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not generate your skill plan. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
       <header>
        <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">Skill Assessment</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Map out your journey to mastery. Tell us what you want to learn and where you want to go.
        </p>
      </header>
      
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardHeader>
                <CardTitle className="font-headline">Create Your Growth Plan</CardTitle>
                <CardDescription>Fill in the details below to get a personalized plan.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Skills to Improve</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Python, Project Management" {...field} />
                      </FormControl>
                       <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="careerGoals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Career Goals</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., Become a Senior Product Manager in 5 years" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="experienceLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Experience Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your experience level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="entry-level">Entry-level</SelectItem>
                          <SelectItem value="mid-level">Mid-level</SelectItem>
                          <SelectItem value="senior-level">Senior-level</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Plan...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" /> Generate Plan
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><Sparkles className="text-accent"/> Your Personalized Plan</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto">
            {isLoading && (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="space-y-2">
                    <p className="h-4 bg-muted rounded w-[250px] animate-pulse"></p>
                    <p className="h-4 bg-muted rounded w-[200px] animate-pulse"></p>
                  </div>
                </div>
              </div>
            )}
            {plan ? (
              <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap text-muted-foreground">{plan}</div>
            ) : (
              !isLoading && <p className="text-muted-foreground">Your skill improvement plan will appear here once generated.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
