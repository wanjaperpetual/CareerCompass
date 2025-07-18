'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { User, Shield, ArrowRight } from 'lucide-react';

export default function RoleSelectorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter leading-tight">
          Welcome to CareerCompass
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Please select your role to continue.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <Card className="w-full max-w-sm transform hover:scale-105 transition-transform duration-300">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
              <User className="size-12 text-primary" />
            </div>
            <CardTitle className="mt-4 text-2xl font-headline">Student</CardTitle>
            <CardDescription>
              Find career advice, search for jobs, and explore universities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/sign-in">
                Proceed as Student <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="w-full max-w-sm transform hover:scale-105 transition-transform duration-300">
          <CardHeader className="text-center">
             <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                <Shield className="size-12 text-primary" />
             </div>
            <CardTitle className="mt-4 text-2xl font-headline">Administrator</CardTitle>
            <CardDescription>
              Manage users, view analytics, and oversee the platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/admin/sign-in">
                Proceed as Admin <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
