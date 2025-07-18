import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Check, Compass, ArrowRight, Bot, ClipboardCheck, University, Briefcase } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const tools = [
  {
    icon: <Bot className="size-8 text-primary" />,
    title: "AI Career Coach",
    description: "Get personalized career advice based on your skills, interests, and experience to find the perfect path for you."
  },
  {
    icon: <ClipboardCheck className="size-8 text-primary" />,
    title: "Skill Assessment",
    description: "Generate a custom skill improvement plan to help you achieve your career goals and stay competitive."
  },
  {
    icon: <University className="size-8 text-primary" />,
    title: "UniFinder Kenya",
    description: "Discover suitable Kenyan universities and programs that match your grades and course interests."
  },
  {
    icon: <Briefcase className="size-8 text-primary" />,
    title: "Job Board & Analysis",
    description: "Browse job listings and use our AI to analyze how well your profile matches the requirements."
  },
]

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Compass className="size-7 text-primary" />
            <span className="text-xl font-semibold">CareerCompass</span>
          </Link>
          <nav className="ml-auto flex items-center gap-4 text-sm font-medium">
             <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
             <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
             <div className="hidden md:flex items-center gap-4">
                <Button variant="ghost" asChild>
                    <Link href="/sign-in">Log In</Link>
                </Button>
                <Button asChild>
                    <Link href="/sign-up">Get Started <ArrowRight className="ml-2 size-4" /></Link>
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
                Navigate Your Career Path with AI-Powered Guidance
              </h1>
              <p className="mt-4 max-w-lg text-lg text-muted-foreground">
                CareerCompass is your intelligent guide to making informed decisions about your future. From choosing a university to finding the right job, our AI tools are designed to help Kenyan students succeed.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/sign-up">Start Your Journey Free</Link>
                </Button>
              </div>
            </div>
             <div className="relative">
                <Image src="https://placehold.co/600x400.png" data-ai-hint="student planning career" alt="AI Career Guidance" width={600} height={400} className="rounded-lg shadow-2xl" />
             </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-muted/50 dark:bg-card">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-headline">A Suite of Tools for Your Success</h2>
              <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">
                Everything you need to plan your education and career, all in one place.
              </p>
            </div>
             <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                 {tools.map((tool) => (
                   <Card key={tool.title} className="text-center">
                     <CardHeader>
                       <div className="mx-auto w-fit p-4 bg-primary/10 rounded-full mb-4">
                         {tool.icon}
                       </div>
                       <CardTitle className="font-headline">{tool.title}</CardTitle>
                     </CardHeader>
                     <CardContent>
                       <p className="text-muted-foreground">{tool.description}</p>
                     </CardContent>
                   </Card>
                 ))}
            </div>
          </div>
        </section>
        
        <section className="py-20">
            <div className="container text-center">
                <h2 className="text-3xl font-bold font-headline">Join Thousands of Ambitious Students</h2>
                <div className="mt-8 flex justify-center gap-4">
                    <Image src="https://placehold.co/150x150.png" data-ai-hint="happy student" alt="Student 1" width={150} height={150} className="rounded-full shadow-lg"/>
                    <Image src="https://placehold.co/150x150.png" data-ai-hint="student studying" alt="Student 2" width={150} height={150} className="rounded-full shadow-lg transform translate-y-4"/>
                    <Image src="https://placehold.co/150x150.png" data-ai-hint="professional headshot student" alt="Student 3" width={150} height={150} className="rounded-full shadow-lg"/>
                </div>
                <p className="mt-6 mx-auto max-w-2xl text-muted-foreground">See the success stories of students who have used CareerCompass to take control of their future. Your journey to a fulfilling career starts here.</p>
            </div>
        </section>

        <section id="pricing" className="py-20 bg-muted/50 dark:bg-card">
          <div className="container">
            <h2 className="text-center text-3xl font-bold font-headline">Choose Your Plan</h2>
             <p className="mt-2 max-w-xl mx-auto text-center text-lg text-muted-foreground">
                Simple, transparent pricing. Get started for free.
              </p>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription><span className="text-3xl font-bold text-foreground">$0</span> / month</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                   <ul className="space-y-3">
                    <li className="flex items-center gap-2"><Check className="text-green-500 size-5" /> Basic Job Board Access</li>
                    <li className="flex items-center gap-2"><Check className="text-green-500 size-5" /> Limited AI Coach Queries</li>
                    <li className="flex items-center gap-2"><Check className="text-green-500 size-5" /> Skill Assessment</li>
                  </ul>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" className="w-full" asChild><Link href="/sign-up">Get Started</Link></Button>
                </CardFooter>
              </Card>
               <Card className="flex flex-col border-primary shadow-lg">
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription><span className="text-3xl font-bold text-foreground">$15</span> / month</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                   <ul className="space-y-3">
                    <li className="flex items-center gap-2"><Check className="text-green-500 size-5" /> Everything in Free</li>
                    <li className="flex items-center gap-2"><Check className="text-green-500 size-5" /> Unlimited AI Coach Queries</li>
                    <li className="flex items-center gap-2"><Check className="text-green-500 size-5" /> Advanced Suitability Analysis</li>
                    <li className="flex items-center gap-2"><Check className="text-green-500 size-5" /> Personalized Skill Plans</li>
                  </ul>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" asChild><Link href="/sign-up">Upgrade Now</Link></Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Contact Us</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                   <ul className="space-y-3">
                    <li className="flex items-center gap-2"><Check className="text-green-500 size-5" /> Everything in Pro</li>
                    <li className="flex items-center gap-2"><Check className="text-green-500 size-5" /> Team Accounts & Integrations</li>
                    <li className="flex items-center gap-2"><Check className="text-green-500 size-5" /> Dedicated Support</li>
                  </ul>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" className="w-full">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 text-center bg-gradient-to-r from-blue-700 to-indigo-900 text-white">
          <div className="container">
            <h2 className="text-3xl font-bold font-headline">Ready to Find Your Path?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-indigo-200">
             Stop guessing and start planning. With CareerCompass, you have an AI-powered guide to help you every step of the way. Your future is waiting.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/sign-up">Sign Up and Start Exploring <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex items-center justify-between py-6 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CareerCompass. All rights reserved.</p>
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
