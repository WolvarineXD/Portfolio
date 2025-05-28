
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Home, FileText, Archive, Mail } from "lucide-react"; // Reverted icons
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/#hero-section", label: "Home", icon: Home },
  { href: "/#about-section", label: "About", icon: FileText },
  { href: "/#projects-section", label: "Portfolio", icon: Archive }, // Reverted label
  { href: "/#contact-section", label: "Contact", icon: Mail },
];

export function MainNav() {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    handleHashChange(); // Set initial hash

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <SidebarMenu>
      {navItems.map((item) => {
        const itemPath = item.href.startsWith("/#") ? item.href.substring(1) : item.href;
        
        const isActive = 
          (currentHash === itemPath) ||
          (item.href === "/#hero-section" && currentHash === "" && pathname === "/");

        return (
          <SidebarMenuItem key={item.href}>
            <Link href={item.href} legacyBehavior passHref>
              <SidebarMenuButton
                asChild
                isActive={isActive}
                // Reverted: className no longer directly sets active background, relies on sidebar.tsx variants.
                // Text color and font-medium for active state are handled by sidebar.tsx logic too.
                className="justify-start px-4 text-sidebar-foreground data-[active=true]:text-sidebar-primary data-[active=true]:font-medium"
              >
                <a>
                  <item.icon 
                    className={cn(
                      "h-5 w-5 mr-3", 
                      isActive ? "text-sidebar-primary" : "text-sidebar-foreground" // Reverted icon color logic
                    )} 
                  />
                  <span>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
