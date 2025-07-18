'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Bot, Briefcase, ClipboardCheck, University, History, User } from 'lucide-react';
import { useProfile } from '@/contexts/ProfileContext';
import { useHistory, HistoryItem } from '@/contexts/HistoryContext';
import { Progress } from '@/components/ui/progress';

const toolIcons: Record<HistoryItem['tool'], React.ReactNode> = {
  'Coach': <Bot className="h-5 w-5" />,
  'Skills': <ClipboardCheck className="h-5 w-5" />,
  'UniFinder': <University className="h-5 w-5" />,
  'Job Analysis': <Briefcase className="h-5 w-5" />,
};


export default function DashboardPage() {
  const { profile, isProfileLoading } = useProfile();
  const { history, isLoading: isHistoryLoading } = useHistory();

  const profileCompleteness = Math.round(
      (Object.values(profile).filter(value => {
        if (typeof value === 'string') return value.trim() !== '';
        if (Array.isArray(value)) return value.length > 0;
        return false;
      }).length / Object.keys(profile).length) * 100
  );

  const recentHistory = history.slice(0, 3);
  
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">
          Hello, {isProfileLoading ? '...' : profile.name.split(' ')[0]}!
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Welcome back to your CareerCompass. Let's find your path.
        </p>
      </header>
      
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base font-medium flex items-center justify-between">
                            <span>AI Queries</span>
                            <Bot className="h-5 w-5 text-muted-foreground" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">{isHistoryLoading ? '...' : history.length}</p>
                        <p className="text-xs text-muted-foreground">Total interactions</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="text-base font-medium flex items-center justify-between">
                            <span>Saved Jobs</span>
                             <Briefcase className="h-5 w-5 text-muted-foreground" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">5</p>
                        <p className="text-xs text-muted-foreground">Ready to apply</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="text-base font-medium flex items-center justify-between">
                            <span>Profile Strength</span>
                            <User className="h-5 w-5 text-muted-foreground" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">{profileCompleteness}%</p>
                        <Progress value={profileCompleteness} className="h-2 mt-2" />
                    </CardContent>
                </Card>
            </div>
          
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="font-headline">Recent Activity</CardTitle>
                        <CardDescription>Your recent interactions with AI tools.</CardDescription>
                    </div>
                    <Button variant="ghost" asChild>
                        <Link href="/history">View all <ArrowRight className="ml-2 size-4" /></Link>
                    </Button>
                </CardHeader>
                <CardContent>
                    {isHistoryLoading ? (
                        <p>Loading history...</p>
                    ) : recentHistory.length > 0 ? (
                        <div className="space-y-4">
                        {recentHistory.map(item => (
                            <div key={item.id} className="flex items-center gap-4">
                                <div className="p-2 bg-primary/10 rounded-md text-primary">
                                    {toolIcons[item.tool]}
                                </div>
                                <div>
                                    <p className="font-semibold">{item.tool}</p>
                                    <p className="text-xs text-muted-foreground">{new Date(item.timestamp).toLocaleDateString()}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                    ) : (
                        <p className="text-sm text-muted-foreground">No recent activity. Try using one of the tools!</p>
                    )}
                </CardContent>
            </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
            <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">AI Career Coach</CardTitle>
                    <CardDescription className="text-primary-foreground/80">Get personalized career advice based on your profile.</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button variant="secondary" className="w-full" asChild>
                        <Link href="/coach">Start a Session</Link>
                    </Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Find Opportunities</CardTitle>
                     <CardDescription>Browse jobs or find the right university.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full" asChild>
                        <Link href="/jobs">
                            <Briefcase className="mr-2" />
                            Job Board
                        </Link>
                    </Button>
                     <Button variant="outline" className="w-full" asChild>
                        <Link href="/unifinder">
                            <University className="mr-2" />
                            UniFinder Kenya
                        </Link>
                    </Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Develop Your Skills</CardTitle>
                    <CardDescription>Get a personalized plan to improve your skills.</CardDescription>
                </CardHeader>
                <CardFooter>
                     <Button variant="outline" className="w-full" asChild>
                        <Link href="/skills">
                           <ClipboardCheck className="mr-2" />
                           Assess My Skills
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
      </main>

    </div>
  );
}
