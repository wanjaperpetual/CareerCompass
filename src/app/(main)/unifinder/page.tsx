'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { findUniversities, type FindUniversitiesOutput } from '@/ai/flows/find-universities';
import { Loader2, Search, Link as LinkIcon, GraduationCap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { useHistory } from '@/contexts/HistoryContext';

const formSchema = z.object({
  course: z.string().min(3, 'Please enter a course.'),
  grade: z.string().min(1, 'Please enter your grade.'),
  location: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function UniFinderPage() {
  const [result, setResult] = useState<FindUniversitiesOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { addToHistory } = useHistory();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      course: '',
      grade: '',
      location: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const universitiesResult = await findUniversities(data);
      setResult(universitiesResult);
      addToHistory({ tool: 'UniFinder', input: data, output: universitiesResult });
    } catch (error) {
      console.error("Failed to find universities:", error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not find universities. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderSkeleton = () => (
    <div className="mt-8 space-y-4">
      {[...Array(3)].map((_, i) => (
         <Card key={i}>
            <CardHeader>
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
                <Skeleton className="h-10 w-full" />
            </CardContent>
         </Card>
      ))}
    </div>
  )

  const renderResult = () => {
    if (isLoading) return renderSkeleton();
    if (!result) return null;

    if (result.universities.length === 0) {
      return <p className="mt-8 text-center text-muted-foreground">No universities found matching your criteria.</p>
    }

    return (
      <div className="mt-8 space-y-4 animate-in fade-in-50">
        <h2 className="text-2xl font-headline font-bold">Recommended Universities</h2>
        {result.universities.map((uni, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="font-headline">{uni.name}</CardTitle>
              <CardDescription>{uni.location}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-muted-foreground" />
                <p><strong>Courses:</strong> {uni.courses.join(', ')}</p>
              </div>
               <div className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-muted-foreground" />
                <a href={uni.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {uni.website}
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };
  
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">UniFinder Kenya</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Find the perfect Kenyan university for your desired course and grade.
        </p>
      </header>

      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
                <CardTitle className="font-headline">Find Your University</CardTitle>
                <CardDescription>Enter your details to get a list of matching universities.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <FormField
                control={form.control}
                name="course"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course of Interest</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Computer Science" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="grade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>High School Grade</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., A-" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Location (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Nairobi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Searching...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" /> Find Universities
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
