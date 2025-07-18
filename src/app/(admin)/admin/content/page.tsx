
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Building2, PlusCircle, BookOpen, Briefcase, FileUp } from "lucide-react";

export default function ContentManagementPage() {
    // Dummy data - in a real app, this would come from a database
    const universities = [
        { name: 'University of Nairobi', programs: 50 },
        { name: 'Kenyatta University', programs: 45 },
    ];
    const jobs = [
        { title: 'Software Engineer', company: 'Safaricom' },
        { title: 'Data Analyst', company: 'M-KOPA' },
    ];
    const resources = [
        { title: 'KCSE Maths Revision', type: 'PDF' },
        { title: 'Intro to Python', type: 'Video' },
    ]

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">
                    Content Management
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                    Oversee and manage the database of universities, programs, jobs, and study resources.
                </p>
            </header>

            <div className="grid gap-8 lg:grid-cols-2">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle className="flex items-center gap-2"><Building2 className="size-5" /> Universities & Programs</CardTitle>
                            <CardDescription>Add, edit, or remove institutions and their courses.</CardDescription>
                        </div>
                        <Button variant="outline" size="sm"><PlusCircle className="mr-2"/> Add University</Button>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>University Name</TableHead>
                                    <TableHead className="text-right">Programs</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {universities.map(uni => (
                                    <TableRow key={uni.name}>
                                        <TableCell className="font-medium">{uni.name}</TableCell>
                                        <TableCell className="text-right">{uni.programs}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                         <div>
                            <CardTitle className="flex items-center gap-2"><Briefcase className="size-5" /> Job Board</CardTitle>
                            <CardDescription>Manage job listings available to users.</CardDescription>
                         </div>
                         <Button variant="outline" size="sm"><PlusCircle className="mr-2"/> Add Job</Button>
                    </CardHeader>
                     <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Job Title</TableHead>
                                    <TableHead>Company</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {jobs.map(job => (
                                    <TableRow key={job.title}>
                                        <TableCell className="font-medium">{job.title}</TableCell>
                                        <TableCell>{job.company}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
            
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="flex items-center gap-2"><BookOpen className="size-5" /> Study Resources</CardTitle>
                        <CardDescription>Curate and upload learning materials for students.</CardDescription>
                    </div>
                    <Button variant="outline" size="sm"><FileUp className="mr-2"/> Upload Resource</Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Resource Title</TableHead>
                                <TableHead>Type</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {resources.map(res => (
                                <TableRow key={res.title}>
                                    <TableCell className="font-medium">{res.title}</TableCell>
                                    <TableCell>{res.type}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
