
'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Bot, Briefcase, Users, FileText, ArrowUp, ArrowDown, GraduationCap, ClipboardCheck } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip } from 'recharts';
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
            Overview of system usage and user engagement.
            </p>
        </div>
        <Button variant="outline">Export Data</Button>
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
            <CardTitle className="text-sm font-medium">Career Advice Generated</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
                <ArrowUp className="h-3 w-3 text-green-500"/>
                <span>+15% from last week</span>
            </p>
          </CardContent>
        </Card>
         <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">University Searches</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,890</div>
            <p className="text-xs text-muted-foreground">Total searches all time</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-5">
        <Card className="md:col-span-3 bg-card/50 backdrop-blur-sm">
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
        <Card className="md:col-span-2 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Recent AI Activity</CardTitle>
            <CardDescription>A log of recent user interactions.</CardDescription>
          </CardHeader>
          <CardContent className="h-[250px] overflow-auto">
            <Table>
                <TableBody>
                {recentActivity.map((activity) => (
                    <TableRow key={activity.id} className="border-b-white/5">
                    <TableCell className="font-medium p-2">{activity.user}</TableCell>
                    <TableCell className="text-muted-foreground p-2">{activity.action.length > 25 ? `${activity.action.substring(0, 25)}...` : activity.action}</TableCell>
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
    </div>
  );
}

    