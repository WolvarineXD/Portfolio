"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, FolderGit2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About Me", icon: User },
  { href: "/projects", label: "Projects", icon: Briefcase },
  // { href: "/contact", label: "Contact", icon: Mail }, // Example for future extension
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <Link href={item.href} legacyBehavior passHref>
            <SidebarMenuButton
              asChild
              isActive={pathname === item.href}
              className="justify-start"
              tooltip={{children: item.label, side: 'right', align: 'center'}}
            >
              <a>
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
