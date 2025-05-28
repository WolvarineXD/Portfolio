
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Home, FileText, Archive, Mail } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const navItems = [
  { href: "/#hero-section", label: "Home", icon: Home },
  { href: "/#about-section", label: "About", icon: FileText },
  { href: "/#projects-section", label: "Portfolio", icon: Archive },
  { href: "/#contact-section", label: "Contact", icon: Mail },
];

export function MainNav() {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Set initial hash
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <SidebarMenu>
      {navItems.map((item) => {
        const itemPath = item.href.startsWith("/#") ? item.href.substring(1) : item.href; // e.g., #hero-section or /
        const isActive = 
          (itemPath === currentHash) || 
          (item.href === "/#hero-section" && currentHash === "" && pathname === "/");

        return (
          <SidebarMenuItem key={item.href}>
            <Link href={item.href} legacyBehavior passHref>
              <SidebarMenuButton
                asChild
                isActive={isActive}
                className="justify-between px-4"
              >
                <a>
                  <span>{item.label}</span>
                  <item.icon className="h-5 w-5 text-sidebar-foreground group-data-[active=true]:text-sidebar-primary-foreground" />
                </a>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
