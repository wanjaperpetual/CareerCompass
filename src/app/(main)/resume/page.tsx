'use client';
import { useProfile } from '@/contexts/ProfileContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Printer } from 'lucide-react';
import { ResumePreview } from '@/components/ResumePreview';

export default function ResumePage() {
  const { profile, isProfileLoading } = useProfile();

  const handlePrint = () => {
    const printContents = document.getElementById('resume-to-print')?.innerHTML;
    if (printContents) {
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload(); // to re-attach event listeners
    }
  };

  if (isProfileLoading) {
    return <div>Loading resume...</div>
  }

  return (
    <div className="space-y-8">
       <header className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">Resume Builder</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Craft a professional resume with a live preview.
            </p>
        </div>
        <Button onClick={handlePrint}>
            <Printer className="mr-2 h-4 w-4" />
            Print Resume
        </Button>
      </header>

      <div className="w-full">
         <Card className="overflow-hidden">
            <CardContent className="p-0">
                <ResumePreview profile={profile} />
            </CardContent>
         </Card>
      </div>

      {/* Hidden div for printing */}
      <div className="hidden">
        <div id="resume-to-print">
            <ResumePreview profile={profile} forPrint={true} />
        </div>
      </div>
    </div>
  );
}
