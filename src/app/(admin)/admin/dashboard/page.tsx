
'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Bot, Briefcase, Users, FileText, ArrowUp, ArrowDown, GraduationCap, ClipboardCheck, Book, Building2 } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip, Line, LineChart } from 'recharts';
import { Button } from '@/components/ui/button';

const recentActivity = [
  { id: 1, user: 'Alice', action: 'Generated career advice for "Medicine"', tool: 'Coach', time: '2m ago' },
  { id: 2, user: 'Bob', action: 'Analyzed job suitability for "Software Engineer"', tool: 'Job Analysis', time: '5m ago' },
  { id: 3, user: 'Charlie', action: 'Searched for "Computer Science" programs in Nairobi', tool: 'UniFinder', time: '10m ago' },
  { id: 4, user: 'David', action: 'Generated a skill plan for "Python & Data Analysis"', tool: 'Skills', time: '1h ago' },
  { id: 5, user: 'Eve', action: 'Used AI Chatbot to ask about KCSE requirements', tool: 'Chat', time: '2h ago' },
  { id: 6, user: 'Frank', action: 'Generated career advice for "Law"', tool: 'Coach', time: '3h ago' },
];

const toolUsageData = [
    { tool: 'Coach', queries: 150, fill: "var(--color-coach)" },
    { tool: 'Job Analysis', queries: 120, fill: "var(--color-job-analysis)" },
    { tool: 'UniFinder', queries: 90, fill: "var(--color-unifinder)" },
    { tool: 'Skills', queries: 75, fill: "var(--color-skills)" },
    { tool: 'Chat', queries: 138, fill: "var(--color-chat)" },
];

const dailyActiveUsersData = [
  { date: 'Mon', users: 120 },
  { date: 'Tue', users: 150 },
  { date: 'Wed', users: 170 },
  { date: 'Thu', users: 130 },
  { date: 'Fri', users: 190 },
  { date: 'Sat', users: 210 },
  { date: 'Sun', users: 180 },
];

const chartConfig = {
  queries: {
    label: "Queries",
  },
  coach: {
    label: "Coach",
    color: "hsl(var(--chart-1))",
  },
  'job-analysis': {
    label: "Job Analysis",
    color: "hsl(var(--chart-2))",
  },
  unifinder: {
    label: "UniFinder",
    color: "hsl(var(--chart-3))",
  },
  skills: {
    label: "Skills",
    color: "hsl(var(--chart-4))",
  },
    chat: {
    label: "Chat",
    color: "hsl(var(--chart-5))",
  },
  users: {
    label: "Users",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;


export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-6 text-foreground">
      <header className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold font-headline tracking-tight">
            Admin Dashboard
            </h1>
            <p className="text-lg text-muted-foreground">
            Global view of system analytics, user engagement, and content.
            </p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline">Export User Data</Button>
            <Button variant="outline">Export Reports</Button>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
         <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,257</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
                <ArrowUp className="h-3 w-3 text-green-500"/>
                <span>+20.1% from last month</span>
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Queries Today</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
                <ArrowDown className="h-3 w-3 text-red-500"/>
                <span>-5% since yesterday</span>
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Flagged Content</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
                Awaiting review
            </p>
          </CardContent>
        </Card>
         <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Content Stats</CardTitle>
            <ClipboardCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground">
             <div className="flex items-center gap-2"><Building2 className="h-3 w-3" /> 45 Universities</div>
             <div className="flex items-center gap-2"><GraduationCap className="h-3 w-3" /> 210 Programs</div>
             <div className="flex items-center gap-2"><Briefcase className="h-3 w-3" /> 88 Job Listings</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <Card className="lg:col-span-3 bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <CardTitle>AI Tool Usage</CardTitle>
                <CardDescription>Breakdown of queries by feature for the last 7 days.</CardDescription>
            </CardHeader>
            <CardContent className="h-[250px]">
                 <ChartContainer config={chartConfig} className="w-full h-full">
                    <BarChart data={toolUsageData} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
                        <XAxis dataKey="tool" tickLine={false} axisLine={false} tickMargin={8} />
                        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                        <RechartsTooltip cursor={true} content={<ChartTooltipContent indicator="dot" />} />
                        <Bar dataKey="queries" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
         <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <CardTitle>Daily Active Users</CardTitle>
                <CardDescription>DAU for the last 7 days.</CardDescription>
            </CardHeader>
            <CardContent className="h-[250px]">
                 <ChartContainer config={chartConfig} className="w-full h-full">
                    <LineChart data={dailyActiveUsersData} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
                        <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                        <RechartsTooltip cursor={true} content={<ChartTooltipContent indicator="dot" />} />
                        <Line type="monotone" dataKey="users" stroke="var(--color-users)" strokeWidth={2} dot={false} />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
      </div>
       <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Recent AI Activity Logs</CardTitle>
            <CardDescription>A log of recent user interactions with AI agents.</CardDescription>
          </CardHeader>
          <CardContent className="h-[250px] overflow-auto">
            <Table>
                <TableBody>
                {recentActivity.map((activity) => (
                    <TableRow key={activity.id} className="border-b-white/5">
                    <TableCell className="font-medium p-2">{activity.user}</TableCell>
                    <TableCell className="text-muted-foreground p-2">{activity.action}</TableCell>
                    <TableCell className="p-2">
                        <Badge variant="secondary">{activity.tool}</Badge>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
          </CardContent>
        </Card>
    </div>
  );
}
