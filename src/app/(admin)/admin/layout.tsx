import { redirect } from 'next/navigation';
import { AppSidebar } from '@/components/admin/AdminSidebar';
import { AdminUserNav } from '@/components/admin/AdminUserNav';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAdmin = true; // Replace with actual auth check for admin role

  if (!isAdmin) {
    redirect('/admin/sign-in');
  }

  return (
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
              <AdminUserNav />
          </header>
          <div className="p-4 sm:p-6 lg:p-8">
            {children}
          </div>
        </SidebarInset>
    </SidebarProvider>
  );
}
