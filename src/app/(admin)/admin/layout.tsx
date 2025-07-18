
'use client';

import { redirect } from 'next/navigation';
import { useProfile, ProfileProvider } from '@/contexts/ProfileContext';
import { useEffect, useState } from 'react';
import { AdminUserNav } from '@/components/admin/AdminUserNav';
import Link from 'next/link';

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
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f1f2f4] px-10 py-3">
          <div className="flex items-center gap-4 text-[#121416]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em]">AI Career Guide Admin</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8 items-center">
            <div className="flex items-center gap-9">
              <Link className="text-[#121416] text-sm font-medium leading-normal" href="/admin/dashboard">Dashboard</Link>
              <Link className="text-[#121416] text-sm font-medium leading-normal" href="/admin/users">Users</Link>
              <Link className="text-[#121416] text-sm font-medium leading-normal" href="#">Reports</Link>
              <Link className="text-[#121416] text-sm font-medium leading-normal" href="/admin/settings">Settings</Link>
            </div>
            <AdminUserNav />
          </div>
        </header>
        <div className="flex flex-1 justify-center py-5">
            {children}
        </div>
      </div>
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
