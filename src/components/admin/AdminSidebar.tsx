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
import { Shield, LayoutDashboard, Users, Settings, LogOut, FileText, Briefcase, GraduationCap } from 'lucide-react';
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
    { href: '/admin/users', icon: <Users />, label: 'User Management' },
    { href: '/admin/content', icon: <FileText />, label: 'Content' },
    { href: '/admin/jobs', icon: <Briefcase />, label: 'Jobs' },
    { href: '/admin/universities', icon: <GraduationCap />, label: 'Universities' },
  ];

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <Link href="/admin/dashboard" className="flex items-center gap-2.5">
          <Shield className="size-8 text-primary" />
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
        <SidebarMenu>
          <SidebarMenuItem>
             <SidebarMenuButton asChild isActive={isActive('/admin/settings')} tooltip="Settings">
                <Link href="/admin/settings">
                    <Settings />
                    <span>Settings</span>
                </Link>
             </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
             <SidebarMenuButton asChild tooltip="Sign Out">
                <Link href="/admin/sign-in">
                    <LogOut />
                    <span>Sign Out</span>
                </Link>
             </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
