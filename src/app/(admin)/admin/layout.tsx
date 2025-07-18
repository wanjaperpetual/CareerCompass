'use client';

import { redirect } from 'next/navigation';
import { AppSidebar } from '@/components/admin/AdminSidebar';
import { AdminUserNav } from '@/components/admin/AdminUserNav';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { useProfile, ProfileProvider } from '@/contexts/ProfileContext';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const { profile, isProfileLoading } = useProfile();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (!isProfileLoading) {
      // Check the user role from the profile context.
      const isAdmin = profile.role === 'admin';
      
      if (!isAdmin) {
        // If not an admin, redirect to the main user dashboard.
        redirect('/dashboard');
      } else {
        // If admin, authorize access.
        setIsAuthorized(true);
      }
    }
  }, [isProfileLoading, profile.role]);

  // While checking or if not authorized, show a loading/empty state.
  if (isProfileLoading || !isAuthorized) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Checking permissions...</p>
      </div>
    );
  }

  return (
    <div className="light">
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
            <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4">
                    <SidebarTrigger className="md:hidden" />
                    <div className="relative hidden md:block">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="w-full rounded-lg bg-secondary pl-8 md:w-[200px] lg:w-[336px]"
                        />
                    </div>
                </div>
                <AdminUserNav />
            </header>
            <div className="p-4 sm:p-6 lg:p-8 bg-secondary/50 min-h-screen">
                {children}
            </div>
            </SidebarInset>
        </SidebarProvider>
    </div>
  );
}


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProfileProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </ProfileProvider>
  )
}
