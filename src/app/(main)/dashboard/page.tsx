'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Bot, ClipboardCheck, University, Briefcase, MessageCircle, History, PieChart, Lightbulb, User } from 'lucide-react';
import { useProfile } from '@/contexts/ProfileContext';
import { useHistory, type HistoryItem } from '@/contexts/HistoryContext';
import { Progress } from '@/components/ui/progress';
import { useMemo } from 'react';

const toolIcons: Record<HistoryItem['tool'], React.ReactNode> = {
  'Coach': <Bot className="h-5 w-5" />,
  'Skills': <ClipboardCheck className="h-5 w-5" />,
  'UniFinder': <University className="h-5 w-5" />,
  'Job Analysis': <Briefcase className="h-5 w-5" />,
};

const tips = [
    "Keep your profile up to date to get the best AI-powered career recommendations.",
    "Use the AI Chatbot to ask quick questions about universities and courses.",
    "Don't forget to analyze a job's suitability before applying. Let our AI help!",
    "A detailed Skill Assessment can reveal learning paths you hadn't considered.",
    "Check the Job Board regularly for new internship and entry-level opportunities."
];

export default function DashboardPage() {
  const { profile } = useProfile();
  const { history } = useHistory();
  
  const recentHistory = useMemo(() => history.slice(0, 3), [history]);

  const profileCompleteness = useMemo(() => {
    let score = 0;
    if (profile.name && profile.name !== 'Jane Doe') score += 1;
    if (profile.email && profile.email !== 'jane.doe@email.com') score += 1;
    if (profile.title && profile.title !== 'Aspiring Full Stack Developer') score += 1;
    if (profile.summary && profile.summary.length > 100) score += 1;
    if (profile.skills) score += 1;
    if (profile.experience.length > 0) score += 1;
    if (profile.education.length > 0) score += 1;
    return Math.round((score / 7) * 100);
  }, [profile]);
  
  const tipOfTheDay = useMemo(() => tips[Math.floor(Math.random() * tips.length)], []);

  return (
    <div className="flex flex-col gap-8 animate-in fade-in-50">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">
          Welcome back, {profile.name.split(' ')[0]}!
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Let's continue building your future.
        </p>
      </header>
      
      <main className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 bg-gradient-to-br from-primary/80 to-accent/80 text-primary-foreground shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Your Career Hub</CardTitle>
            <CardDescription className="text-primary-foreground/80">Everything you need in one place. Jump back in!</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-4">
                <h3 className="font-semibold">Quick Access</h3>
                <div className="flex flex-col gap-2">
                    <Button variant="secondary" className="justify-start" asChild><Link href="/coach"><Bot className="mr-2"/>AI Career Coach</Link></Button>
                    <Button variant="secondary" className="justify-start" asChild><Link href="/jobs"><Briefcase className="mr-2"/>Job Board</Link></Button>
                    <Button variant="secondary" className="justify-start" asChild><Link href="/chat"><MessageCircle className="mr-2"/>AI Chatbot</Link></Button>
                </div>
            </div>
            <div className="space-y-4">
                <h3 className="font-semibold">Your Profile</h3>
                <p className="text-sm text-primary-foreground/80">A complete profile leads to better recommendations.</p>
                <div>
                    <div className="flex justify-between mb-1 text-sm font-medium">
                        <span>Completeness</span>
                        <span>{profileCompleteness}%</span>
                    </div>
                    <Progress value={profileCompleteness} className="h-2 [&>div]:bg-white" />
                </div>
                <Button variant="outline" className="text-foreground" asChild>
                    <Link href="/profile"><User className="mr-2"/>Update Profile</Link>
                </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <Lightbulb className="text-accent" /> Tip of the Day
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-muted-foreground">{tipOfTheDay}</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="link" className="p-0 text-primary">
              <Link href="/skills">
                Assess Your Skills <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </main>

      <Card>
          <CardHeader>
            <CardTitle className="font-headline">Recent Activity</CardTitle>
            <CardDescription>Your latest interactions with the AI tools.</CardDescription>
          </CardHeader>
          <CardContent>
            {recentHistory.length > 0 ? (
              <ul className="space-y-4">
                {recentHistory.map(item => (
                  <li key={item.id} className="flex items-center gap-4 p-2 rounded-md hover:bg-muted/50">
                    <div className="p-2 bg-primary/10 rounded-md text-primary">{toolIcons[item.tool]}</div>
                    <div>
                      <p className="font-medium">{item.tool}</p>
                      <p className="text-xs text-muted-foreground">{new Date(item.timestamp).toLocaleString()}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-center py-8 text-muted-foreground">No recent activity. Try one of the tools!</p>
            )}
          </CardContent>
           <CardFooter className="flex justify-end">
             <Button asChild variant="secondary" className="w-full sm:w-auto">
                <Link href="/history">
                  View All History <History className="ml-2 size-4" />
                </Link>
              </Button>
          </CardFooter>
        </Card>
    </div>
  );
}
