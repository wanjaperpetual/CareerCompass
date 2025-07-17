'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Bot, ClipboardCheck, University, Briefcase, MessageCircle } from 'lucide-react';

export default function DashboardPage() {
  const features = [
    { title: 'AI Chatbot', description: 'Get instant answers about careers and universities.', icon: <MessageCircle className="size-8 text-primary" />, href: '/chat' },
    { title: 'AI Career Coach', description: 'Get personalized career advice and guidance.', icon: <Bot className="size-8 text-primary" />, href: '/coach' },
    { title: 'Skill Assessment', description: 'Identify your strengths and areas for improvement.', icon: <ClipboardCheck className="size-8 text-primary" />, href: '/skills' },
    { title: 'UniFinder Kenya', description: 'Find Kenyan universities that match your profile.', icon: <University className="size-8 text-primary" />, href: '/unifinder' },
    { title: 'Job Board', description: 'Find job opportunities that match your profile.', icon: <Briefcase className="size-8 text-primary" />, href: '/jobs' },
  ];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in-50">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">
          Welcome to CareerCompass
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Your all-in-one platform for navigating your career path with confidence.
        </p>
      </header>
      
      <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={feature.title} className="flex flex-col transition-all hover:shadow-md hover:-translate-y-1" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                  <CardDescription className="mt-1">{feature.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardFooter className="mt-auto pt-0">
              <Button asChild variant="link" className="p-0 text-primary">
                <Link href={feature.href}>
                  Get Started <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </main>
    </div>
  );
}
