
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
import { cn } from "@/lib/utils";

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

    // Set initial hash based on the current URL
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

  return (
    <SidebarMenu>
      {navItems.map((item) => {
        // item.href is like "/#hero-section"
        // currentHash from window.location.hash is like "#hero-section"
        // itemPath for "/#hero-section" becomes "#hero-section"
        const itemPath = item.href.startsWith("/#") ? item.href.substring(1) : item.href;
        
        const isActive = 
          (currentHash === itemPath) || // Primary condition: current hash matches item's target hash
          (item.href === "/#hero-section" && currentHash === "" && pathname === "/"); // Special case for home on initial load

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
                  <item.icon 
                    className={cn(
                      "h-5 w-5",
                      isActive ? "text-sidebar-primary-foreground" : "text-sidebar-foreground"
                    )} 
                  />
                </a>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
