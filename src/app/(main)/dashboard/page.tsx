'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Bot, ClipboardCheck, University, Briefcase, MessageCircle, History, PieChart } from 'lucide-react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Pie, Sector, CartesianGrid } from 'recharts';
import { useProfile } from '@/contexts/ProfileContext';
import { useHistory, type HistoryItem } from '@/contexts/HistoryContext';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { useMemo } from 'react';

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

  const chartConfig = {
    value: {
      label: "Completeness",
      color: "hsl(var(--primary))",
    },
    engagement: {
      label: "Engagement",
    },
    completed: {
      label: "Completed",
      color: "hsl(var(--primary))",
    },
    remaining: {
      label: "Remaining",
      color: "hsl(var(--muted))",
    },
    count: {
      label: 'Count',
      color: 'hsl(var(--primary))',
    },
  };
  
  const recentHistory = history.slice(0, 3);
  
  const coreTools = ['Coach', 'Skills', 'UniFinder', 'Job Analysis'];
  const usedTools = new Set(history.map(item => item.tool));
  const completedCount = Array.from(usedTools).filter(tool => coreTools.includes(tool)).length;
  const engagementData = [
    { type: 'completed', value: completedCount, fill: 'var(--color-completed)' },
    { type: 'remaining', value: coreTools.length - completedCount, fill: 'var(--color-remaining)' },
  ];

  const toolUsageData = useMemo(() => {
    const counts = history.reduce((acc, item) => {
      acc[item.tool] = (acc[item.tool] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return coreTools.map(tool => ({
      name: tool.replace(' Analysis', ''),
      count: counts[tool as HistoryItem['tool']] || 0,
    }));
  }, [history]);

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

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
           <CardHeader>
            <CardTitle className="font-headline">Tool Usage Breakdown</CardTitle>
            <CardDescription>Frequency of each AI tool used.</CardDescription>
          </CardHeader>
          <CardContent>
             <ChartContainer config={chartConfig} className="h-[250px] w-full">
               <ResponsiveContainer>
                <BarChart data={toolUsageData} margin={{ top: 20, right: 20, bottom: 5, left: -20 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis />
                    <Tooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel indicator="dot" />}
                    />
                    <Bar dataKey="count" fill="var(--color-count)" radius={8} />
                </BarChart>
               </ResponsiveContainer>
             </ChartContainer>
          </CardContent>
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

       <div className="grid gap-6 lg:grid-cols-3">
         <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="font-headline">Feature Engagement</CardTitle>
            <CardDescription>
              You've tried {completedCount} out of {coreTools.length} core AI tools.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
             <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square h-[200px]"
            >
              <ResponsiveContainer>
                <PieChart>
                  <Tooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={engagementData}
                    dataKey="value"
                    nameKey="type"
                    innerRadius={60}
                    strokeWidth={5}
                  >
                     <Sector
                        name="Completed"
                        fill="var(--color-completed)"
                      />
                      <Sector
                        name="Remaining"
                        fill="var(--color-remaining)"
                      />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline">Profile Completeness</CardTitle>
            <CardDescription>A complete profile gets you better recommendations.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center pt-8">
            <ChartContainer config={chartConfig} className="h-[20px] w-full">
              <ResponsiveContainer>
                <BarChart layout="vertical" data={[{ name: 'profile', value: 75 }]}>
                  <XAxis type="number" hide domain={[0, 100]} />
                  <YAxis type="category" hide dataKey="name" />
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
                  <Bar dataKey="value" fill="var(--color-value)" radius={8} background={{ fill: 'hsl(var(--muted))', radius: 8 }} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
           <CardFooter className="flex justify-end">
             <Button asChild variant="secondary">
                <Link href="/profile">
                  Complete Your Profile <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
