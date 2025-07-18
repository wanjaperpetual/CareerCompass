'use client';

import { redirect } from 'next/navigation';
import { AppSidebar } from '@/components/admin/AdminSidebar';
import { AdminUserNav } from '@/components/admin/AdminUserNav';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { useProfile, ProfileProvider } from '@/contexts/ProfileContext';
import { useEffect, useState } from 'react';

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

  if (!isAuthorized) {
    return null; 
  }

  return (
    <div className="dark">
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
            <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border/20 bg-background/80 px-4 backdrop-blur sm:px-6 lg:px-8">
                <div className="md:hidden">
                    <SidebarTrigger />
                </div>
                <div className="hidden md:block">
                    {/* Placeholder for breadcrumbs or page title */}
                </div>
                <AdminUserNav />
            </header>
            <div className="p-4 sm:p-6 lg:p-8 bg-background">
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
