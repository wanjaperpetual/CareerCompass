import { AppSidebar } from '@/components/AppSidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { ProfileProvider } from '@/contexts/ProfileContext';
import { redirect } from 'next/navigation';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isSignedIn = true; // Replace with actual auth check

  if (!isSignedIn) {
    redirect('/sign-up');
  }

  return (
    <ProfileProvider>
      <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <div className="p-4 sm:p-6 lg:p-8">
              {children}
            </div>
          </SidebarInset>
      </SidebarProvider>
    </ProfileProvider>
  );
}
