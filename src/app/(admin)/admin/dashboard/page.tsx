
'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow, TableHead, TableHeader } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Bot, Briefcase, Users, ArrowUp, ArrowDown, BookOpen } from 'lucide-react';
import { ChartContainer, ChartTooltipContent, ChartConfig } from "@/components/ui/chart";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip, Line, LineChart } from 'recharts';

const recentActivity = [
  { id: 1, user: 'Alice W.', action: 'Generated career advice for "Medicine"', tool: 'Coach', time: '2m ago' },
  { id: 2, user: 'Bob K.', action: 'Analyzed job suitability for "Software Engineer"', tool: 'Job Analysis', time: '5m ago' },
  { id: 3, user: 'Charlie M.', action: 'Searched for "Computer Science" programs', tool: 'UniFinder', time: '10m ago' },
  { id: 4, user: 'David O.', action: 'Generated a skill plan for "Python"', tool: 'Skills', time: '1h ago' },
  { id: 5, user: 'Eve A.', action: 'Used AI Chatbot to ask about KCSE', tool: 'Chat', time: '2h ago' },
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
    <div className="flex flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,257</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
                <ArrowUp className="h-3 w-3 text-green-500"/>
                <span>+20.1% this month</span>
            </p>
          </CardContent>
        </Card>
        <Card>
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
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Jobs Listed</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">88</div>
            <p className="text-xs text-muted-foreground">
                +10 since last week
            </p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Resources</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
             <div className="text-2xl font-bold">42</div>
             <p className="text-xs text-muted-foreground">PDFs, Videos, and Guides</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <Card className="lg:col-span-3">
            <CardHeader>
                <CardTitle>AI Tool Usage</CardTitle>
                <CardDescription>Breakdown of queries by feature for the last month.</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
                 <ChartContainer config={chartConfig} className="w-full h-full">
                    <BarChart data={toolUsageData} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
                        <XAxis dataKey="tool" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                        <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                        <RechartsTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                        <Bar dataKey="queries" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
         <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle>Daily Active Users</CardTitle>
                <CardDescription>DAU for the last 7 days.</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
                 <ChartContainer config={chartConfig} className="w-full h-full">
                    <LineChart data={dailyActiveUsersData} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
                        <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                        <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                        <RechartsTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                        <Line type="monotone" dataKey="users" stroke="hsl(var(--primary))" strokeWidth={2} dot={true} />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
      </div>
       <Card>
          <CardHeader>
            <CardTitle>Recent AI Activity</CardTitle>
            <CardDescription>A log of the latest user interactions with AI agents.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Action</TableHead>
                        <TableHead>Tool Used</TableHead>
                        <TableHead className="text-right">Time</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {recentActivity.map((activity) => (
                    <TableRow key={activity.id}>
                    <TableCell className="font-medium">{activity.user}</TableCell>
                    <TableCell>{activity.action}</TableCell>
                    <TableCell>
                        <Badge variant="outline">{activity.tool}</Badge>
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">{activity.time}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
          </CardContent>
        </Card>
    </div>
  );
}
