"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="md:hidden">
            <SidebarTrigger />
          </div>
          <Link href="/" className="ml-4 md:ml-0 text-xl font-medium text-foreground hover:text-accent transition-colors">
            My Portfolio
          </Link>
        </div>
        {/* Add other header elements like dark mode toggle here if needed */}
      </div>
    </header>
  );
}
