'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Shield, LayoutDashboard, Users, Settings, FileText, Briefcase, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function AppSidebar() {
  const pathname = usePathname();
  const isActive = (path: string) => {
    // Exact match for dashboard
    if (path === '/admin/dashboard') return pathname === path;
    return pathname.startsWith(path);
  }

  const menuItems = [
    { href: '/admin/dashboard', icon: <LayoutDashboard />, label: 'Dashboard' },
    { href: '/admin/users', icon: <Users />, label: 'Users' },
    { href: '/admin/content', icon: <FileText />, label: 'Content' },
    { href: '/admin/settings', icon: <Settings />, label: 'Settings' },
  ];

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader>
        <Link href="/admin/dashboard" className="flex items-center gap-2.5">
          <Shield className="size-8 text-sidebar-accent" />
          <h1 className="text-xl font-bold font-headline text-sidebar-foreground">Admin</h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={isActive(item.href)} tooltip={item.label}>
                <Link href={item.href}>
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="m-2 p-4 rounded-lg bg-sidebar-accent/10 text-center text-sidebar-foreground">
            <h3 className="font-bold font-headline">CareerCompass</h3>
            <p className="text-xs text-sidebar-foreground/70 mt-1">Admin Portal</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
