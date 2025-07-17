import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Compass, Bot, Briefcase, University, Check, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Compass className="size-8 text-primary" />
            <span className="text-xl font-headline">CareerCompass</span>
          </Link>
          <nav className="ml-auto flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Sign Up <ArrowRight className="ml-2 size-4" /></Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter">
              Navigate Your Career Path in Kenya
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              CareerCompass uses AI to provide personalized career guidance, university recommendations, and job matching—all tailored for the Kenyan student.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/sign-up">Get Started for Free</Link>
              </Button>
            </div>
             <div className="mt-12">
              <Image 
                src="https://placehold.co/1200x400.png"
                alt="Students collaborating and looking at a bright future"
                width={1200}
                height={400}
                className="rounded-lg shadow-xl mx-auto"
                data-ai-hint="career development"
                priority
              />
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-muted/50 dark:bg-card">
          <div className="container">
            <h2 className="text-center text-3xl font-bold font-headline">Your All-in-One Career Toolkit</h2>
            <p className="text-center mt-2 text-muted-foreground">Everything you need to succeed from high school to your first job.</p>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Bot className="size-10 text-primary mb-4" />
                  <CardTitle>AI Career Coach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Get personalized advice on careers that match your skills and interests.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <University className="size-10 text-primary mb-4" />
                  <CardTitle>UniFinder Kenya</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Discover Kenyan universities and courses that align with your grades and ambitions.</p>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                  <Briefcase className="size-10 text-primary mb-4" />
                  <CardTitle>Targeted Job Board</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Find internships and entry-level jobs from top Kenyan companies.</p>
                </CardContent>
              </Card>
            </div>
             <div className="relative mt-16 flex flex-col md:flex-row items-center justify-between rounded-lg border bg-card p-8 shadow-lg">
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold font-headline">See How You Match</h3>
                    <p className="text-muted-foreground mt-2">Our AI analyzes your profile against job descriptions to give you a suitability score, helping you apply with confidence.</p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2"><Check className="text-primary size-5" /> Score jobs from 0-100%</li>
                      <li className="flex items-center gap-2"><Check className="text-primary size-5" /> Get justifications for your score</li>
                      <li className="flex items-center gap-2"><Check className="text-primary size-5" /> Identify skill gaps to improve</li>
                    </ul>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                    <Image src="https://placehold.co/400x300.png" alt="Feature screenshot" width={400} height={300} className="rounded-lg shadow-md" data-ai-hint="dashboard analysis"/>
                </div>
            </div>
          </div>
        </section>

      </main>
      <footer className="border-t">
        <div className="container flex items-center justify-between py-6 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CareerCompass. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
