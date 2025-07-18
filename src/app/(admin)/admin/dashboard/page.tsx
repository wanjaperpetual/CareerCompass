'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Bot, Briefcase, Users, BarChart, PieChart } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart as RechartsBarChart, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Cell, XAxis, YAxis, Tooltip as RechartsTooltip, CartesianGrid, Legend } from 'recharts';

const recentActivity = [
  { id: 1, user: 'Alice', action: 'Generated career advice for "Medicine"', tool: 'Coach', time: '2m ago' },
  { id: 2, user: 'Bob', action: 'Analyzed job suitability for "Software Engineer"', tool: 'Job Analysis', time: '5m ago' },
  { id: 3, user: 'Charlie', action: 'Searched for "Computer Science" programs in Nairobi', tool: 'UniFinder', time: '10m ago' },
  { id: 4, user: 'David', action: 'Generated a skill plan for "Python & Data Analysis"', tool: 'Skills', time: '1h ago' },
  { id: 5, user: 'Eve', action: 'Used AI Chatbot to ask about KCSE requirements', tool: 'Chat', time: '2h ago' },
  { id: 6, user: 'Frank', action: 'Generated career advice for "Law"', tool: 'Coach', time: '3h ago' },
  { id: 7, user: 'Grace', action: 'Searched for "Business Administration" programs', tool: 'UniFinder', time: '5h ago' },
  { id: 8, user: 'Heidi', action: 'Analyzed job suitability for "Marketing Manager"', tool: 'Job Analysis', time: '1d ago' },
];

const queriesByToolData = [
    { tool: 'Coach', queries: 120, fill: "hsl(var(--chart-1))" },
    { tool: 'Job Analysis', queries: 80, fill: "hsl(var(--chart-2))" },
    { tool: 'UniFinder', queries: 150, fill: "hsl(var(--chart-3))" },
    { tool: 'Skills', queries: 95, fill: "hsl(var(--chart-4))" },
    { tool: 'Chat', queries: 228, fill: "hsl(var(--chart-5))" },
];

const userRolesData = [
  { name: 'Admin', value: 3, fill: 'hsl(var(--chart-1))' },
  { name: 'User', value: 1254, fill: 'hsl(var(--chart-2))' },
];

const barChartConfig = {
  queries: {
    label: "Queries",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const pieChartConfig = {
  users: {
    label: "Users",
  },
  admin: {
    label: "Admin",
    color: "hsl(var(--chart-1))",
  },
  user: {
    label: "User",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;


export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">
          Admin Dashboard
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Welcome back! Here's an overview of your application's activity.
        </p>
      </header>

      <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,257</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Jobs Listed</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">84</div>
            <p className="text-xs text-muted-foreground">+12 since last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Queries Today</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">+32 since yesterday</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users Today</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">+15% from yesterday</p>
          </CardContent>
        </Card>
      </main>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"> <BarChart className="h-5 w-5"/> AI Queries by Tool</CardTitle>
            <CardDescription>A breakdown of which AI tools are being used the most.</CardDescription>
          </CardHeader>
          <CardContent>
             <ChartContainer config={barChartConfig} className="min-h-[200px] w-full">
               <RechartsBarChart data={queriesByToolData} accessibilityLayer>
                 <CartesianGrid vertical={false} />
                 <XAxis dataKey="tool" tickLine={false} tickMargin={10} axisLine={false} />
                 <YAxis />
                 <RechartsTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                 <Legend />
                 <Bar dataKey="queries" radius={4} />
               </RechartsBarChart>
             </ChartContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><PieChart className="h-5 w-5"/> User Role Distribution</CardTitle>
             <CardDescription>A look at the distribution of user roles in the system.</CardDescription>
          </CardHeader>
          <CardContent>
             <ChartContainer config={pieChartConfig} className="min-h-[200px] w-full">
                <RechartsPieChart>
                    <RechartsTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                    <Pie data={userRolesData} dataKey="value" nameKey="name" innerRadius={50} strokeWidth={5}>
                         {userRolesData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                     <Legend content={<ChartTooltipContent hideLabel hideIndicator />} />
                </RechartsPieChart>
             </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent AI Activity</CardTitle>
          <CardDescription>A log of the most recent user interactions with AI tools.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Tool</TableHead>
                <TableHead>Time</TableHead>
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
                  <TableCell className="text-muted-foreground">{activity.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}