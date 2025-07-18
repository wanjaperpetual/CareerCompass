
'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Bot, Briefcase, Users, BarChart, FileText, ArrowUp, ArrowDown } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip, CartesianGrid } from 'recharts';
import { Button } from '@/components/ui/button';

const recentActivity = [
  { id: 1, user: 'Alice', action: 'Generated career advice for "Medicine"', tool: 'Coach', time: '2m ago' },
  { id: 2, user: 'Bob', action: 'Analyzed job suitability for "Software Engineer"', tool: 'Job Analysis', time: '5m ago' },
  { id: 3, user: 'Charlie', action: 'Searched for "Computer Science" programs in Nairobi', tool: 'UniFinder', time: '10m ago' },
  { id: 4, user: 'David', action: 'Generated a skill plan for "Python & Data Analysis"', tool: 'Skills', time: '1h ago' },
  { id: 5, user: 'Eve', action: 'Used AI Chatbot to ask about KCSE requirements', tool: 'Chat', time: '2h ago' },
  { id: 6, user: 'Frank', action: 'Generated career advice for "Law"', tool: 'Coach', time: '3h ago' },
];

const queriesByDayData = [
  { date: 'Mon', queries: 220 },
  { date: 'Tue', queries: 180 },
  { date: 'Wed', queries: 250 },
  { date: 'Thu', queries: 210 },
  { date: 'Fri', queries: 300 },
  { date: 'Sat', queries: 280 },
  { date: 'Sun', queries: 350 },
];

const chartConfig = {
  queries: {
    label: "Queries",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;


export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-6 text-foreground">
      <header className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold font-headline tracking-tight">
            Hello Admin!
            </h1>
            <p className="text-lg text-muted-foreground">
            Displaying data for the last 7 days.
            </p>
        </div>
        <div className="flex items-center gap-4">
            <Button variant="outline">Export Data</Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white">See AI Actions</Button>
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
            <CardTitle className="text-sm font-medium">Total Jobs Listed</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">84</div>
             <p className="text-xs text-muted-foreground flex items-center gap-1">
                <ArrowUp className="h-3 w-3 text-green-500"/>
                <span>+12 since last week</span>
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
         <Card className="bg-green-500/10 border-green-500/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Recommendations</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8 Actions</div>
            <p className="text-xs text-green-400">Recommended based on new user signups.</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-5">
        <Card className="md:col-span-3 bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <CardTitle>AI Query Analytics</CardTitle>
                <CardDescription>Total queries over the last 7 days.</CardDescription>
            </CardHeader>
            <CardContent className="h-[250px]">
                 <ChartContainer config={chartConfig} className="w-full h-full">
                    <AreaChart data={queriesByDayData} margin={{ top: 5, right: 20, left: -10, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorQueries" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border)/0.5)"/>
                        <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                        <RechartsTooltip cursor={true} content={<ChartTooltipContent indicator="dot" />} />
                        <Area type="monotone" dataKey="queries" stroke="hsl(var(--chart-1))" fillOpacity={1} fill="url(#colorQueries)" />
                    </AreaChart>
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
