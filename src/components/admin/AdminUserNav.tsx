'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function AdminUserNav() {
  const router = useRouter();

  const handleSignOut = () => {
    router.push('/admin/sign-in');
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
         <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer"
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgObwUW6NrpGxkcC1nCnTGn9ksEkKjZs0WM2ZS_KYYEG2e7Z7E1Zw1YQ90QALLQThKd5mZGGo1vPx_QoFpsOlzinl-CufLu6kiPcrCttfxpqwYZDNK83ji1eJ4sErcgi-ecv4YuTDcI5hD0VN9DsOTGgJOSYJjpQ6QvJSXgOVTjRC1JinLHyIYkQ00BcmOi80jFIjECREpKvbqRBGG3ogiVVZbD_WJQEfOSHdvyHGhP4avI83e6323N66D2hYrWtvfoDd9SJfQO1bq")'}}
            ></div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Admin User</p>
            <p className="text-xs leading-none text-muted-foreground">
              admin@careercompass.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
           <DropdownMenuItem asChild>
             <Link href="/dashboard">Switch to User View</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
