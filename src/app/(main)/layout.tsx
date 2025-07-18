import { AppSidebar } from '@/components/AppSidebar';
import { UserNav } from '@/components/UserNav';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { HistoryProvider } from '@/contexts/HistoryContext';
import { ProfileProvider } from '@/contexts/ProfileContext';
import { redirect } from 'next/navigation';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isSignedIn = true; // Replace with actual auth check

  if (!isSignedIn) {
    redirect('/role-selector');
  }

  return (
    <ProfileProvider>
      <HistoryProvider>
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur sm:px-6 lg:px-8">
                  <div className="md:hidden">
                    <SidebarTrigger />
                  </div>
                   <div className="hidden md:block">
                     {/* Placeholder for breadcrumbs or page title */}
                  </div>
                  <UserNav />
              </header>
              <div className="p-4 sm:p-6 lg:p-8">
                {children}
              </div>
            </SidebarInset>
        </SidebarProvider>
      </HistoryProvider>
    </ProfileProvider>
  );
}
