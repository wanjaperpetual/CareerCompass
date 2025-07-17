'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Bot, ClipboardCheck, University, Briefcase, MessageCircle, History } from 'lucide-react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { useProfile } from '@/contexts/ProfileContext';
import { useHistory, type HistoryItem } from '@/contexts/HistoryContext';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

const features = [
  { title: 'AI Chatbot', description: 'Get instant answers about careers and universities.', icon: <MessageCircle className="size-8 text-primary" />, href: '/chat' },
  { title: 'AI Career Coach', description: 'Get personalized career advice and guidance.', icon: <Bot className="size-8 text-primary" />, href: '/coach' },
  { title: 'Skill Assessment', description: 'Identify your strengths and areas for improvement.', icon: <ClipboardCheck className="size-8 text-primary" />, href: '/skills' },
  { title: 'UniFinder Kenya', description: 'Find Kenyan universities that match your profile.', icon: <University className="size-8 text-primary" />, href: '/unifinder' },
  { title: 'Job Board', description: 'Find job opportunities that match your profile.', icon: <Briefcase className="size-8 text-primary" />, href: '/jobs' },
];

const toolIcons: Record<HistoryItem['tool'], React.ReactNode> = {
  'Coach': <Bot className="h-5 w-5" />,
  'Skills': <ClipboardCheck className="h-5 w-5" />,
  'UniFinder': <University className="h-5 w-5" />,
  'Job Analysis': <Briefcase className="h-5 w-5" />,
};

export default function DashboardPage() {
  const { profile } = useProfile();
  const { history } = useHistory();

  const profileCompleteness = [
    { name: 'Info', value: Object.values(profile).filter(v => typeof v === 'string' && v.length > 0).length / 7 * 100 },
    { name: 'Experience', value: profile.experience.length > 0 ? 100 : 0 },
    { name: 'Education', value: profile.education.length > 0 ? 100 : 0 },
  ];
  
  const chartData = [
    {
      metric: "Profile",
      value: Math.round(profileCompleteness.reduce((acc, item) => acc + item.value, 0) / 3)
    }
  ];
  const chartConfig = {
    value: {
      label: "Completeness",
      color: "hsl(var(--primary))",
    },
  };
  
  const recentHistory = history.slice(0, 3);

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

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Profile Completeness</CardTitle>
            <CardDescription>A complete profile gets you better recommendations.</CardDescription>
          </CardHeader>
          <CardContent>
             <ChartContainer config={chartConfig} className="h-[100px] w-full">
              <BarChart accessibilityLayer data={chartData} layout="vertical" margin={{ left: -20 }}>
                <XAxis type="number" dataKey="value" hide={true} domain={[0, 100]}/>
                <YAxis type="category" dataKey="metric" hide={true} />
                <Tooltip 
                  cursor={{ fill: 'transparent' }} 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <p className="text-sm font-medium">{`${payload[0].value}% Complete`}</p>
                        </div>
                      )
                    }
                    return null
                  }} 
                />
                <Bar dataKey="value" fill="var(--color-value)" radius={8} background={{ fill: 'hsl(var(--muted))', radius: 8 }}/>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>
             <Button asChild variant="secondary">
                <Link href="/profile">
                  Complete Your Profile <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Recent Activity</CardTitle>
            <CardDescription>Your latest interactions with the AI tools.</CardDescription>
          </CardHeader>
          <CardContent>
            {recentHistory.length > 0 ? (
              <ul className="space-y-4">
                {recentHistory.map(item => (
                  <li key={item.id} className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-md text-primary">{toolIcons[item.tool]}</div>
                    <div>
                      <p className="font-medium">{item.tool}</p>
                      <p className="text-xs text-muted-foreground">{new Date(item.timestamp).toLocaleDateString()}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">No recent activity. Try one of the tools!</p>
            )}
          </CardContent>
           <CardFooter>
             <Button asChild variant="secondary" className="w-full">
                <Link href="/history">
                  View All History <History className="ml-2 size-4" />
                </Link>
              </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
