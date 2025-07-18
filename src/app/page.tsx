import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Check, Lightbulb, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Lightbulb className="size-7 text-primary" />
            <span className="text-xl font-semibold">AI Resume Advisor</span>
          </Link>
          <nav className="ml-auto flex items-center gap-4 text-sm font-medium">
             <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
             <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it works</Link>
             <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
             <div className="hidden md:flex items-center gap-4">
                <Button variant="ghost" asChild>
                    <Link href="/sign-in">Log In</Link>
                </Button>
                <Button asChild>
                    <Link href="/sign-up">Sign Up Free <ArrowRight className="ml-2 size-4" /></Link>
                </Button>
             </div>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter leading-tight">
                Land Your Dream Job with AI-Powered Resumes
              </h1>
              <p className="mt-4 max-w-lg text-lg text-muted-foreground">
                Get a resume tailored to each job posting, using the right keywords to stand out. Our AI Resume Builder analyzes job descriptions and your LinkedIn profile to create a personalized, optimized resume that gives you the competitive edge. Start building a resume that matches your next opportunity effortlessly.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/sign-up">Sign Up Free</Link>
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Sponsored by Microsoft</p>
            </div>
             <div className="relative">
                <Image src="https://placehold.co/600x400.png" data-ai-hint="resume builder screenshot" alt="AI Resume Builder" width={600} height={400} className="rounded-lg shadow-2xl" />
             </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-muted/50 dark:bg-card">
          <div className="container">
            <h2 className="text-center text-3xl font-bold font-headline">Unlock Dream Career with AI Hub</h2>
             <div className="mt-12 grid gap-12 md:grid-cols-2 items-center">
                 <div className="relative">
                    <Image src="https://placehold.co/500x350.png" data-ai-hint="career guidance screenshot" alt="AI Hub feature" width={500} height={350} className="rounded-lg shadow-lg" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold font-headline">Your Career Compass, Powered by AI</h3>
                    <p className="mt-4 text-muted-foreground">
                        Powered by best-cutting-edge AI Models, our personal AI consultant analyzes job descriptions and company profiles to deliver strategic career insights. Get expert guidance on industry trends, interview preparation, and professional development - all tailored to your career goals.
                    </p>
                    <Button variant="link" className="p-0 mt-4 text-primary">Get Started <ArrowRight className="ml-2 size-4" /></Button>
                 </div>
            </div>
            <div className="mt-16 grid gap-12 md:grid-cols-2 items-center">
                <div>
                    <h3 className="text-2xl font-bold font-headline">Optimize Your Resume with Smart AI</h3>
                    <p className="mt-4 text-muted-foreground">
                        Our AI doesn't just reformat your data, it analyzes job descriptions to ensure your resume highlights the most relevant skills and experiences. With smart keyword optimization, let AI boost your chances of getting noticed!
                    </p>
                     <ul className="mt-4 space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2"><Check className="text-primary size-5" /> Writing suggestions</li>
                      <li className="flex items-center gap-2"><Check className="text-primary size-5" /> Highlight your experience</li>
                      <li className="flex items-center gap-2"><Check className="text-primary size-5" /> Include a strong portfolio link</li>
                    </ul>
                    <Button variant="link" className="p-0 mt-4 text-primary">Get Started <ArrowRight className="ml-2 size-4" /></Button>
                </div>
                 <div className="relative">
                    <Image src="https://placehold.co/500x350.png" data-ai-hint="resume analysis screenshot" alt="AI Resume Optimization" width={500} height={350} className="rounded-lg shadow-lg" />
                 </div>
            </div>
          </div>
        </section>
        
        <section className="py-20">
            <div className="container text-center">
                <h2 className="text-3xl font-bold font-headline">Join Thousands of Happy Job Seekers</h2>
                <div className="mt-8 flex justify-center gap-4">
                    <Image src="https://placehold.co/150x150.png" data-ai-hint="happy person" alt="Job seeker 1" width={150} height={150} className="rounded-full shadow-lg"/>
                    <Image src="https://placehold.co/150x150.png" data-ai-hint="person working" alt="Job seeker 2" width={150} height={150} className="rounded-full shadow-lg transform translate-y-4"/>
                    <Image src="https://placehold.co/150x150.png" data-ai-hint="professional headshot" alt="Job seeker 3" width={150} height={150} className="rounded-full shadow-lg"/>
                </div>
                <p className="mt-6 mx-auto max-w-2xl text-muted-foreground">Experience the joy of landing your dream job with a resume that stands out. Our AI Resume Builder has helped thousands of professionals tailor their applications, increasing their chances of success. See the smiles of users who've taken their career to the next level—now it's your turn!</p>
            </div>
        </section>

        <section id="how-it-works" className="py-20 bg-slate-900 text-primary-foreground">
             <div className="container grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold font-headline">Ready to Land Your Next Job?</h2>
                    <p className="mt-4 text-slate-300">
                        Take the first step with a resume that's perfectly tailored for the role you want. Let our AI Resume Builder help you stand out and get noticed. Start now and create your career.
                    </p>
                     <Button variant="link" className="p-0 mt-4 text-white">Get Started <ArrowRight className="ml-2 size-4" /></Button>
                </div>
                <div className="relative h-64">
                    <Image src="https://placehold.co/600x400.png" data-ai-hint="business handshake" alt="Successful job interview" layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
            </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="container">
            <h2 className="text-center text-3xl font-bold font-headline">Pricing</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Beginner Plan</CardTitle>
                  <CardDescription><span className="text-3xl font-bold text-foreground">$10</span> / month</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                   <ul className="space-y-3">
                    <li className="flex items-center gap-2"><Check className="text-green-500 size-5" /> 5 AI resume improvements</li>
                    <li className="flex items-center gap-2"><Check className="text-green-500 size-5" /> Basic resume formatting</li>
                    <li className="flex items-center gap-2"><Check className="text-green-500 size-5" /> Download in PDF format</li>
                  </ul>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" className="w-full">Subscribe Now</Button>
                </CardFooter>
              </Card>
               <Card className="flex flex-col border-primary shadow-lg">
                <CardHeader>
                  <CardTitle>Advance Plan</CardTitle>
                  <CardDescription><span className="text-3xl font-bold text-foreground">$20</span> / month</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                   <ul className="space-y-3">
                    <li className="flex items-center gap-2"><Check className="text-green-500 size-5" /> 20 AI resume improvements</li>
                    <li className="flex items-center gap-2"><Check className="text-green-500 size-5" /> AI-keyword optimization</li>
                    <li className="flex items-center gap-2"><Check className="text-green-500 size-5" /> Editable Word download</li>
                     <li className="flex items-center gap-2"><Check className="text-green-500 size-5" /> Cover letter generation</li>
                  </ul>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Subscribe Now</Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Professional Plan</CardTitle>
                  <CardDescription><span className="text-3xl font-bold text-foreground">$40</span> / month</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                   <ul className="space-y-3">
                    <li className="flex items-center gap-2"><Check className="text-green-500 size-5" /> 50 AI resume improvements</li>
                    <li className="flex items-center gap-2"><Check className="text-green-500 size-5" /> LinkedIn profile optimization</li>
                    <li className="flex items-center gap-2"><Check className="text-green-500 size-5" /> AI-generated bios</li>
                  </ul>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" className="w-full">Subscribe Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 text-center bg-gradient-to-r from-blue-700 to-indigo-900 text-white">
          <div className="container">
            <h2 className="text-3xl font-bold font-headline">Start Building Your Perfect Resume Today!</h2>
            <p className="mx-auto mt-4 max-w-2xl text-indigo-200">
             Don't let your dream job slip away. With our AI Resume Builder, you can create a resume that stands out in minutes. Tailor it for the job, get noticed for success, and get ready to impress.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/sign-up">Sign Up Free <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex items-center justify-between py-6 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AI Resume Advisor. All rights reserved.</p>
          <nav className="flex gap-4">
             <Link href="#" className="hover:text-primary">Terms</Link>
             <Link href="#" className="hover:text-primary">Privacy</Link>
             <Link href="/admin/dashboard" className="hover:text-primary">Admin</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
