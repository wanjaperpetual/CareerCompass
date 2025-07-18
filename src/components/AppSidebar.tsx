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
import { Bot, Briefcase, ClipboardCheck, Compass, LayoutDashboard, User, University, CreditCard, MessageCircle, History } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function AppSidebar() {
  const pathname = usePathname();
  const isActive = (path: string) => {
    // Special case for dashboard to avoid matching all sub-routes
    if (path === '/dashboard') return pathname === path;
    return pathname.startsWith(path);
  }

  const menuItems = [
    { href: '/dashboard', icon: <LayoutDashboard />, label: 'Dashboard' },
    { href: '/chat', icon: <MessageCircle />, label: 'Chatbot' },
    { href: '/coach', icon: <Bot />, label: 'AI Career Coach' },
    { href: '/skills', icon: <ClipboardCheck />, label: 'Skill Assessment' },
    { href: '/unifinder', icon: <University />, label: 'UniFinder Kenya' },
    { href: '/jobs', icon: <Briefcase />, label: 'Job Board' },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/dashboard" className="flex items-center gap-2.5">
          <Compass className="size-8 text-primary" />
          <h1 className="text-xl font-bold font-headline text-foreground">CareerCompass</h1>
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
            <SidebarMenuButton asChild isActive={isActive('/history')} tooltip="History">
              <Link href="/history">
                <History />
                <span>History</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive('/profile')} tooltip="Profile">
              <Link href="/profile">
                <User />
                <span>Profile</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
           <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive('/billing')} tooltip="Billing">
              <Link href="/billing">
                <CreditCard />
                <span>Billing</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
