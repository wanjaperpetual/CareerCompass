'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow, TableHead, TableHeader } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

// Dummy data to populate the dashboard, as seen in the design.
const coachUsage = {
  sessions: 150,
  change: "+12%",
};

const chatbotQueries = [
  { timestamp: "2024-01-15 10:00", studentId: "Student A", query: "How to prepare for AI interviews?", topic: "Interview Prep" },
  { timestamp: "2024-01-15 11:30", studentId: "Student B", query: "Best universities for AI research?", topic: "Education" },
  { timestamp: "2024-01-15 13:45", studentId: "Student C", query: "What are the key skills for AI engineers?", topic: "Skills" },
  { timestamp: "2024-01-15 15:20", studentId: "Student D", query: "How to build an AI portfolio?", topic: "Portfolio" },
  { timestamp: "2024-01-15 16:55", studentId: "Student E", query: "Career paths in AI?", topic: "Career Paths" },
];

const uniFinderTrends = [
  { university: "Tech Institute of Advanced Studies", searches: 250, filters: "AI, Machine Learning, Computer Science" },
  { university: "National University of Technology", searches: 200, filters: "AI, Robotics, Data Science" },
  { university: "California Institute of Technology", searches: 180, filters: "AI, Deep Learning, Natural Language Processing" },
];

const skillStats = {
  completionRate: "85%",
  averageScore: "78%",
};

const jobMetrics = {
  saved: 320,
  applied: 150,
};

const activeStudents = [
    { id: "Student F", activity: "High", lastLogin: "2024-01-15" },
    { id: "Student G", activity: "Medium", lastLogin: "2024-01-14" },
    { id: "Student H", activity: "High", lastLogin: "2024-01-15" },
    { id: "Student I", activity: "Low", lastLogin: "2024-01-12" },
    { id: "Student J", activity: "Medium", lastLogin: "2024-01-13" },
];

export default function AdminDashboardPage() {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1 mx-auto">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[#121416] tracking-light text-[32px] font-bold leading-tight">Admin Dashboard</p>
          <p className="text-[#6a7581] text-sm font-normal leading-normal">Overview of student activity and AI tool usage</p>
        </div>
      </div>
      
      <h2 className="text-[#121416] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">AI Coach Usage</h2>
      <div className="flex flex-wrap gap-4 px-4 py-6">
        <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#dde0e3] p-6">
          <p className="text-[#121416] text-base font-medium leading-normal">Daily AI Coach Sessions</p>
          <p className="text-[#121416] tracking-light text-[32px] font-bold leading-tight truncate">{coachUsage.sessions}</p>
          <div className="flex gap-1">
            <p className="text-[#6a7581] text-base font-normal leading-normal">Last 7 Days</p>
            <p className="text-[#078838] text-base font-medium leading-normal">{coachUsage.change}</p>
          </div>
          <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
            <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z" fill="url(#paint0_linear_1131_5935)"></path>
              <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#6a7581" strokeWidth="3" strokeLinecap="round"></path>
              <defs><linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse"><stop stopColor="#f1f2f4"></stop><stop offset="1" stopColor="#f1f2f4" stopOpacity="0"></stop></linearGradient></defs>
            </svg>
            <div className="flex justify-around">
              <p className="text-[#6a7581] text-[13px] font-bold leading-normal tracking-[0.015em]">Mon</p>
              <p className="text-[#6a7581] text-[13px] font-bold leading-normal tracking-[0.015em]">Tue</p>
              <p className="text-[#6a7581] text-[13px] font-bold leading-normal tracking-[0.015em]">Wed</p>
              <p className="text-[#6a7581] text-[13px] font-bold leading-normal tracking-[0.015em]">Thu</p>
              <p className="text-[#6a7581] text-[13px] font-bold leading-normal tracking-[0.015em]">Fri</p>
              <p className="text-[#6a7581] text-[13px] font-bold leading-normal tracking-[0.015em]">Sat</p>
              <p className="text-[#6a7581] text-[13px] font-bold leading-normal tracking-[0.015em]">Sun</p>
            </div>
          </div>
        </div>
      </div>
      
      <h2 className="text-[#121416] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Chatbot Queries</h2>
      <div className="px-4 py-3">
        <div className="overflow-hidden rounded-xl border border-[#dde0e3] bg-white">
          <Table>
            <TableHeader><TableRow><TableHead className="w-[20%]">Timestamp</TableHead><TableHead className="w-[20%]">Student ID</TableHead><TableHead className="w-[40%]">Query</TableHead><TableHead className="w-[20%]">Topic</TableHead></TableRow></TableHeader>
            <TableBody>
              {chatbotQueries.map((item, index) => (
                <TableRow key={index}><TableCell className="h-[72px] text-[#6a7581]">{item.timestamp}</TableCell><TableCell className="text-[#6a7581]">{item.studentId}</TableCell><TableCell className="text-[#6a7581]">{item.query}</TableCell><TableCell className="text-[#6a7581]">{item.topic}</TableCell></TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <h2 className="text-[#121416] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">UniFinder Trends</h2>
       <div className="px-4 py-3">
        <div className="overflow-hidden rounded-xl border border-[#dde0e3] bg-white">
          <Table>
            <TableHeader><TableRow><TableHead className="w-[40%]">University</TableHead><TableHead className="w-[15%]">Searches</TableHead><TableHead className="w-[45%]">Filters Used</TableHead></TableRow></TableHeader>
            <TableBody>
              {uniFinderTrends.map((item, index) => (
                <TableRow key={index}><TableCell className="h-[72px] text-[#6a7581]">{item.university}</TableCell><TableCell className="text-[#6a7581]">{item.searches}</TableCell><TableCell className="text-[#6a7581]">{item.filters}</TableCell></TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <h2 className="text-[#121416] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Skill Assessment Stats</h2>
      <div className="flex flex-wrap gap-4 p-4">
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#dde0e3]">
          <p className="text-[#121416] text-base font-medium leading-normal">Completion Rate</p>
          <p className="text-[#121416] tracking-light text-2xl font-bold leading-tight">{skillStats.completionRate}</p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#dde0e3]">
          <p className="text-[#121416] text-base font-medium leading-normal">Average Score</p>
          <p className="text-[#121416] tracking-light text-2xl font-bold leading-tight">{skillStats.averageScore}</p>
        </div>
      </div>

      <h2 className="text-[#121416] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Job Save/Apply Metrics</h2>
      <div className="flex flex-wrap gap-4 p-4">
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#dde0e3]">
          <p className="text-[#121416] text-base font-medium leading-normal">Jobs Saved</p>
          <p className="text-[#121416] tracking-light text-2xl font-bold leading-tight">{jobMetrics.saved}</p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#dde0e3]">
          <p className="text-[#121416] text-base font-medium leading-normal">Jobs Applied</p>
          <p className="text-[#121416] tracking-light text-2xl font-bold leading-tight">{jobMetrics.applied}</p>
        </div>
      </div>

      <h2 className="text-[#121416] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Active Students</h2>
      <div className="px-4 py-3">
        <div className="overflow-hidden rounded-xl border border-[#dde0e3] bg-white">
          <Table>
            <TableHeader><TableRow><TableHead className="w-1/3">Student ID</TableHead><TableHead className="w-1/3">Activity Level</TableHead><TableHead className="w-1/3">Last Login</TableHead></TableRow></TableHeader>
            <TableBody>
              {activeStudents.map((item, index) => (
                <TableRow key={index}><TableCell className="h-[72px] text-[#6a7581]">{item.id}</TableCell><TableCell className="text-[#6a7581]">{item.activity}</TableCell><TableCell className="text-[#6a7581]">{item.lastLogin}</TableCell></TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <h2 className="text-[#121416] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Admin Tools</h2>
      <div className="flex justify-stretch">
        <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
          <Button variant="outline" className="bg-[#f1f2f4] text-[#121416] text-sm font-bold tracking-[0.015em] border-none">View Student Logs (Anonymized)</Button>
          <Button variant="outline" className="bg-[#f1f2f4] text-[#121416] text-sm font-bold tracking-[0.015em] border-none">Export Reports (CSV/PDF)</Button>
        </div>
      </div>

    </div>
  );
}
