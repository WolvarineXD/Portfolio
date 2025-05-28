"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, Star, Archive, Mail } from "lucide-react"; // Removed ListOrdered
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: FileText },
  { href: "/skills", label: "Skills", icon: Star },
  { href: "/projects", label: "Portfolio", icon: Archive },
  { href: "/contact", label: "Contact", icon: Mail },
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
              className="justify-between px-4"
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
