
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
      const isAdmin = profile.role === 'admin';
      
      if (!isAdmin) {
        redirect('/dashboard');
      } else {
        setIsAuthorized(true);
      }
    }
  }, [isProfileLoading, profile.role]);

  if (isProfileLoading || !isAuthorized) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p>Checking permissions...</p>
      </div>
    );
  }

  return (
    <div className="admin-theme">
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
            <div className="p-4 sm:p-6 lg:p-8 bg-muted/30 min-h-[calc(100vh-4rem)]">
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
