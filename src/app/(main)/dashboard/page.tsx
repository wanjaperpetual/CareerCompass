'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRight, Bot, Briefcase, CheckCircle, Clock, FileText, Target, User } from 'lucide-react';
import { useProfile } from '@/contexts/ProfileContext';
import { useHistory } from '@/contexts/HistoryContext';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Badge } from '@/components/ui/badge';
import { jobs } from '../jobs/data';

const recentJobs = jobs.slice(0, 5);

export default function DashboardPage() {
  const { profile, isProfileLoading } = useProfile();
  const { history, isLoading: isHistoryLoading } = useHistory();

  const toolUsageData = [
      { name: 'Jan', count: history.filter(h => new Date(h.timestamp).getMonth() === 0).length },
      { name: 'Feb', count: history.filter(h => new Date(h.timestamp).getMonth() === 1).length },
      { name: 'Mar', count: history.filter(h => new Date(h.timestamp).getMonth() === 2).length },
      { name: 'Apr', count: history.filter(h => new Date(h.timestamp).getMonth() === 3).length },
      { name: 'May', count: history.filter(h => new Date(h.timestamp).getMonth() === 4).length },
      { name: 'Jun', count: history.filter(h => new Date(h.timestamp).getMonth() === 5).length },
      { name: 'Jul', count: history.filter(h => new Date(h.timestamp).getMonth() === 6).length },
      { name: 'Aug', count: history.filter(h => new Date(h.timestamp).getMonth() === 7).length },
    ];
  
  const profileCompleteness = Math.round(
      (Object.values(profile).filter(value => {
        if (typeof value === 'string') return value.trim() !== '';
        if (Array.isArray(value)) return value.length > 0;
        return false;
      }).length / Object.keys(profile).length) * 100
  );

  const StatCard = ({ icon, title, value, change, isPrimary = false }: { icon: React.ReactNode, title: string, value: string, change: string, isPrimary?: boolean }) => (
    <Card className={isPrimary ? 'bg-primary text-primary-foreground' : ''}>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className={`p-2 rounded-full ${isPrimary ? 'bg-primary-foreground/20' : 'bg-primary/10'}`}>
            {icon}
          </div>
          <p className={`text-sm ${isPrimary ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{title}</p>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-3xl font-bold">{value}</h3>
        <div className="flex items-center text-sm mt-2">
          <span className={`px-2 py-0.5 rounded-full text-xs flex items-center gap-1 ${isPrimary ? 'bg-white/20' : 'bg-green-100 text-green-800'}`}>
            <ArrowUpRight className="h-3 w-3" /> {change}
          </span>
          <span className={`ml-2 ${isPrimary ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>vs last month</span>
        </div>
      </CardContent>
    </Card>
  );
  
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">
          Hello, {isProfileLoading ? '...' : profile.name.split(' ')[0]}!
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Welcome back to your career dashboard.
        </p>
      </header>
      
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard icon={<User className="text-primary"/>} title="Profile Completeness" value={`${profileCompleteness}%`} change="+5%" isPrimary />
            <StatCard icon={<FileText className="text-primary"/>} title="Jobs Applied" value="12" change="+2" />
            <StatCard icon={<Bot className="text-primary"/>} title="AI Queries" value={isHistoryLoading ? '...' : `${history.length}`} change="+10" />
            <StatCard icon={<Briefcase className="text-primary"/>} title="Saved Jobs" value="5" change="+1" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline">AI Tool Usage History</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={toolUsageData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip
                          contentStyle={{
                              backgroundColor: 'hsl(var(--background))',
                              borderColor: 'hsl(var(--border))',
                              borderRadius: 'var(--radius)',
                          }}
                          cursor={{fill: 'hsl(var(--muted))'}}
                      />
                      <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="count" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} className="fill-sky-300" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
           <Card className="bg-gradient-to-br from-purple-600 to-blue-800 text-white overflow-hidden">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Your Career, Backed by Data</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative">
                        <Bot className="absolute -bottom-8 -right-4 h-32 w-32 text-white/10" />
                        <p className="text-sm text-purple-200 relative z-10">AI analyzes industry trends, hiring patterns, and skill gaps to give you personalized career advice.</p>
                        <Button variant="secondary" className="mt-4" asChild>
                            <Link href="/coach">Generate Now</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Open Positions</CardTitle>
                    <CardDescription>A preview of the latest job opportunities.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {recentJobs.map(job => (
                        <div key={job.id} className="flex items-center justify-between">
                            <div>
                                <p className="font-semibold">{job.title}</p>
                                <p className="text-sm text-muted-foreground">{job.company}</p>
                            </div>
                            <Badge variant={job.type === 'Full-time' ? 'default' : 'secondary'} className="capitalize">{job.type}</Badge>
                        </div>
                    ))}
                     <Button variant="outline" className="w-full" asChild>
                        <Link href="/jobs">View All Jobs</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
      </main>

    </div>
  );
}
