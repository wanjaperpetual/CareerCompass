'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';

export default function HistoryPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold font-headline tracking-tight text-foreground">History</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Review your past interactions and generated results.
        </p>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>
            This section will display your history with the AI coach, job analyses, and more.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-16 text-muted-foreground">
          <Clock className="size-12" />
          <p className="mt-4 text-lg font-medium">No history yet.</p>
        </CardContent>
      </Card>
    </div>
  );
}
