"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, Star, ListOrdered, Archive, Mail } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: FileText },
  { href: "/skills", label: "Skills", icon: Star }, // Assuming you'll create /skills page
  { href: "/services", label: "Service", icon: ListOrdered }, // Assuming you'll create /services page
  { href: "/projects", label: "Portfolio", icon: Archive },
  { href: "/contact", label: "Contact", icon: Mail }, // Assuming you'll create /contact page
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
              className="justify-between px-4" // px-4 for padding, justify-between for text left, icon right
              // Removed tooltip as sidebar is not collapsible to icon-only in the target design
            >
              <a>
                <span>{item.label}</span>
                <item.icon className="h-5 w-5 text-sidebar-foreground group-data-[active=true]:text-sidebar-primary-foreground" />
              </a>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
