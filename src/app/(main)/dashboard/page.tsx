
'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BarChart, Briefcase, ChevronRight, FileText, Folder, RefreshCw, University } from 'lucide-react';
import { useProfile } from '@/contexts/ProfileContext';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const planProgressData = [{ name: 'Completed', value: 75 }, { name: 'Remaining', value: 25 }];
const COLORS = ['#f97316', 'hsl(var(--muted))'];

const recentActivities = [
    {
        title: 'Solar Energy Systems Engineers',
        category: 'Natural Resources Systems',
        imgSrc: 'https://placehold.co/400x200.png',
        dataAiHint: 'solar panels'
    },
    {
        title: 'Wind Energy Engineers',
        category: 'Engineering and Technology',
        imgSrc: 'https://placehold.co/400x200.png',
        dataAiHint: 'wind turbine'
    },
    {
        title: 'Quality Assurance in Web Development',
        category: 'Network Systems',
        imgSrc: 'https://placehold.co/400x200.png',
        dataAiHint: 'web development'
    },
    {
        title: 'Graduate Teaching Assistants',
        category: 'Teaching/Training',
        imgSrc: 'https://placehold.co/400x200.png',
        dataAiHint: 'classroom training'
    },
];

const quickAccessItems = [
  { title: 'Portfolio', description: 'See your current portfolio.', icon: <Folder className="size-6 text-primary" />, actions: [{ label: 'Edit', href: '/profile' }] },
  { title: 'Experience Summary', description: 'See the graphical representation of completed projects.', icon: <BarChart className="size-6 text-primary" />, actions: [] },
  { title: 'Opportunities', description: 'Look for opportunities recommended for you.', icon: <Briefcase className="size-6 text-primary" />, actions: [{ label: 'Virtual Internships', href: '/jobs' }] },
  { title: 'Find your future', description: 'Search for colleges and universities.', icon: <University className="size-6 text-primary" />, actions: [{ label: 'Applications', href: '/unifinder' }] },
];


export default function DashboardPage() {
  const { profile } = useProfile();
  
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">
          Hello, {profile.name.split(' ')[0]}!
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Here you can access your 4 most recent activities from 18 total. You can add more through courses.
        </p>
      </header>
      
      <main className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
                {recentActivities.map((activity, index) => (
                    <Card key={index} className="relative overflow-hidden group">
                        <Image src={activity.imgSrc} alt={activity.title} data-ai-hint={activity.dataAiHint} layout="fill" objectFit="cover" className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="relative z-10 flex flex-col justify-end h-48 p-4 text-white">
                           <p className="text-xs uppercase tracking-wider">{activity.category}</p>
                           <h3 className="font-bold text-lg">{activity.title}</h3>
                           <Button size="icon" variant="secondary" className="absolute top-4 right-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                               <ArrowRight className="size-4" />
                           </Button>
                        </div>
                    </Card>
                ))}
            </div>
             <Card>
                 <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
                     <Image src="https://placehold.co/400x300.png" alt="Business Review" data-ai-hint="business meeting" width={150} height={100} className="rounded-md object-cover" />
                     <div className="flex-1">
                        <h3 className="font-bold text-xl font-headline">Executive Business Review</h3>
                        <p className="text-muted-foreground mt-2">An Executive Business Review (EBR) is a strategic meeting with stakeholders from both GitLab and the customer.</p>
                     </div>
                     <Button>View catalog</Button>
                 </CardContent>
             </Card>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
            <Card className="bg-primary/90 text-primary-foreground">
                <CardHeader>
                    <CardTitle className="text-sm font-light uppercase tracking-wider">Your Plan Progress</CardTitle>
                    <CardDescription className="text-xl font-bold text-white">Broken Arrow Public Schools -...</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                    <p className="text-sm text-primary-foreground/80 max-w-[120px]">Track your personal progress within the plan</p>
                    <div className="relative size-24">
                       <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                data={planProgressData}
                                cx="50%"
                                cy="50%"
                                innerRadius={28}
                                outerRadius={35}
                                startAngle={90}
                                endAngle={450}
                                paddingAngle={0}
                                dataKey="value"
                                stroke="none"
                                >
                                {planProgressData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xl font-bold text-white">75%</span>
                        </div>
                    </div>
                </CardContent>
                 <CardFooter>
                    <Button variant="secondary" className="w-full">View plan</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Assessment & Survey</CardTitle>
                    <CardDescription>Find your matching careers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <Link href="#" className="flex items-center justify-between p-3 rounded-md hover:bg-muted">
                        <div className="flex items-center gap-3">
                            <BarChart className="size-5 text-primary" />
                            <span>Assessment recommendations</span>
                        </div>
                        <ChevronRight className="size-5 text-muted-foreground" />
                    </Link>
                     <Link href="#" className="flex items-center justify-between p-3 rounded-md hover:bg-muted">
                        <div className="flex items-center gap-3">
                            <RefreshCw className="size-5 text-primary" />
                            <div>
                                <p>Retake assessment</p>
                                <p className="text-xs text-muted-foreground">Last updated: 02/22/2020</p>
                            </div>
                        </div>
                        <ChevronRight className="size-5 text-muted-foreground" />
                    </Link>
                    <Link href="#" className="flex items-center justify-between p-3 rounded-md hover:bg-muted">
                        <div className="flex items-center gap-3">
                            <FileText className="size-5 text-primary" />
                            <span>Career review survey</span>
                        </div>
                        <ChevronRight className="size-5 text-muted-foreground" />
                    </Link>
                    <Link href="#" className="flex items-center justify-between p-3 rounded-md hover:bg-muted">
                        <div className="flex items-center gap-3">
                            <FileText className="size-5 text-primary" />
                            <span>Final report</span>
                        </div>
                        <ChevronRight className="size-5 text-muted-foreground" />
                    </Link>
                </CardContent>
            </Card>
        </div>
      </main>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {quickAccessItems.map(item => (
            <Card key={item.title} className="p-4">
                <div className="flex justify-between items-start">
                    {item.icon}
                    <Link href="#"><ChevronRight className="size-5 text-muted-foreground hover:text-foreground" /></Link>
                </div>
                <h3 className="font-bold mt-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                <div className="flex gap-4 mt-4">
                    {item.actions.map(action => (
                         <Button key={action.label} variant="link" size="sm" asChild className="p-0 h-auto text-primary">
                            <Link href={action.href}>{action.label}</Link>
                         </Button>
                    ))}
                </div>
            </Card>
        ))}
      </div>
    </div>
  );
}
