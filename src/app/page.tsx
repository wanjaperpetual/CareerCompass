import { ArrowRight, Bot, Briefcase, University } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-8 w-8 text-primary">
                <rect width="256" height="256" fill="none"></rect>
                <path d="M128,24a104,104,0,1,0,104,104A104.2,104.2,0,0,0,128,24Zm-4.1,154.2,12.9-38.8a7.8,7.8,0,0,1,14.5,0l12.9,38.8a8,8,0,0,1-15.1,5.6L144,168l-32,0-4.9,15.8a8,8,0,0,1-15.1-5.6ZM40,128a88.2,88.2,0,0,1,22-56.9L84.4,99.9a40,40,0,0,0,87.2,0l22.4-28.8A88,88,0,1,1,40,128Z"></path>
            </svg>
            <span className="text-xl font-bold font-headline text-foreground">CareerCompass</span>
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/role-selector">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/role-selector">Get Started</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 md:py-32">
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tighter leading-tight">
            Find Your Future, <span className="text-primary">Today.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            CareerCompass is your AI-powered guide to navigating the complex world of careers, universities, and job applications in Kenya.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/role-selector">
                Start Your Journey <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="features" className="bg-secondary py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold font-headline">Everything You Need to Succeed</h2>
                     <p className="mt-4 text-lg text-muted-foreground">Our powerful AI tools are designed to give you a competitive edge.</p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <div className="p-3 bg-primary/10 rounded-md w-fit text-primary mb-4">
                                <Bot className="size-8" />
                            </div>
                            <CardTitle className="font-headline">AI Career Coach</CardTitle>
                            <CardDescription>Get personalized career advice based on your unique skills and interests.</CardDescription>
                        </CardHeader>
                    </Card>
                     <Card>
                        <CardHeader>
                            <div className="p-3 bg-primary/10 rounded-md w-fit text-primary mb-4">
                                <University className="size-8" />
                            </div>
                            <CardTitle className="font-headline">UniFinder Kenya</CardTitle>
                            <CardDescription>Discover the perfect Kenyan universities that match your desired course and grade.</CardDescription>
                        </CardHeader>
                    </Card>
                     <Card>
                        <CardHeader>
                             <div className="p-3 bg-primary/10 rounded-md w-fit text-primary mb-4">
                                <Briefcase className="size-8" />
                            </div>
                            <CardTitle className="font-headline">Job Board & Analysis</CardTitle>
                            <CardDescription>Explore job opportunities and analyze how well you fit with AI-powered suitability checks.</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </section>
        
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to take the next step?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Create an account and start building your future with CareerCompass.
            </p>
            <div className="mt-8">
                <Button size="lg" asChild>
                <Link href="/role-selector">
                    Sign Up for Free <ArrowRight className="ml-2" />
                </Link>
                </Button>
            </div>
        </section>
      </main>

      <footer className="bg-secondary border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-between items-center">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} CareerCompass. All rights reserved.</p>
             <div className="flex gap-4">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
             </div>
        </div>
      </footer>
    </div>
  );
}
