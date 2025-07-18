
'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, BarChart3, Bot, Briefcase, ChevronRight, ClipboardCheck, History, University, User } from 'lucide-react';
import { useProfile } from '@/contexts/ProfileContext';
import { useHistory } from '@/contexts/HistoryContext';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Progress } from '@/components/ui/progress';

const toolIcons: Record<string, React.ReactNode> = {
  'Coach': <Bot className="h-4 w-4" />,
  'Skills': <ClipboardCheck className="h-4 w-4" />,
  'UniFinder': <University className="h-4 w-4" />,
  'Job Analysis': <Briefcase className="h-4 w-4" />,
};

const quickAccessItems = [
  { title: 'AI Career Coach', description: 'Get personalized career advice.', href: '/coach', icon: <Bot className="size-6 text-primary" /> },
  { title: 'Skill Assessment', description: 'Generate a skill improvement plan.', href: '/skills', icon: <ClipboardCheck className="size-6 text-primary" /> },
  { title: 'UniFinder Kenya', description: 'Find suitable Kenyan universities.', href: '/unifinder', icon: <University className="size-6 text-primary" /> },
  { title: 'Job Board', description: 'Discover job opportunities.', href: '/jobs', icon: <Briefcase className="size-6 text-primary" /> },
];

export default function DashboardPage() {
  const { profile, isProfileLoading } = useProfile();
  const { history, isLoading: isHistoryLoading } = useHistory();

  const toolUsageData = quickAccessItems.map(item => ({
      name: item.title,
      count: history.filter(h => h.tool === item.title.split(' ')[0]).length,
  }));
  
  const profileCompleteness = Math.round(
      (Object.values(profile).filter(value => {
        if (typeof value === 'string') return value.trim() !== '';
        if (Array.isArray(value)) return value.length > 0;
        return false;
      }).length / Object.keys(profile).length) * 100
  );
  
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">
          Hello, {isProfileLoading ? '...' : profile.name.split(' ')[0]}!
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Welcome back to your career dashboard. Let's help you find your path.
        </p>
      </header>
      
      <main className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2">
                        <BarChart3 className="size-6 text-primary"/>
                        AI Tool Usage
                    </CardTitle>
                    <CardDescription>
                        See which tools you're using the most.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     {isHistoryLoading ? <p>Loading chart...</p> : (
                         <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <RechartsBarChart data={toolUsageData}>
                                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'hsl(var(--background))',
                                        borderColor: 'hsl(var(--border))'
                                    }}
                                />
                                <Legend wrapperStyle={{fontSize: "12px"}}/>
                                <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                                </RechartsBarChart>
                            </ResponsiveContainer>
                        </div>
                     )}
                </CardContent>
            </Card>

             <Card>
                 <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2"><History className="size-6 text-primary"/>Recent Activity</CardTitle>
                    <CardDescription>A log of your most recent interactions with AI tools.</CardDescription>
                </CardHeader>
                 <CardContent>
                    {isHistoryLoading ? (
                        <p>Loading history...</p>
                    ) : history.length === 0 ? (
                        <p className="text-muted-foreground">No recent activity. Try using one of the AI tools!</p>
                    ) : (
                        <ul className="space-y-4">
                            {history.slice(0, 3).map(item => (
                                <li key={item.id} className="flex items-center gap-4">
                                    <div className="p-2 bg-primary/10 text-primary rounded-md">{toolIcons[item.tool]}</div>
                                    <div>
                                        <p className="font-semibold">{item.tool}</p>
                                        <p className="text-sm text-muted-foreground">{new Date(item.timestamp).toLocaleDateString()}</p>
                                    </div>
                                    <Button variant="outline" size="sm" asChild className="ml-auto">
                                        <Link href="/history">View <ChevronRight className="ml-1 size-4"/></Link>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    )}
                 </CardContent>
             </Card>
        </div>

        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2"><User className="size-6 text-primary" />Your Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-foreground">Profile Completeness</span>
                            <span className="text-sm font-medium text-primary">{profileCompleteness}%</span>
                        </div>
                        <Progress value={profileCompleteness} />
                    </div>
                    <Button asChild className="w-full">
                        <Link href="/profile">Edit Profile <ArrowRight className="ml-2 size-4" /></Link>
                    </Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Quick Access</CardTitle>
                    <CardDescription>Jump right back in.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    {quickAccessItems.map(item => (
                        <Link href={item.href} key={item.title} className="flex items-center justify-between p-3 rounded-md hover:bg-muted">
                            <div className="flex items-center gap-3">
                                {item.icon}
                                <span>{item.title}</span>
                            </div>
                            <ChevronRight className="size-5 text-muted-foreground" />
                        </Link>
                    ))}
                </CardContent>
            </Card>
        </div>
      </main>

    </div>
  );
}
