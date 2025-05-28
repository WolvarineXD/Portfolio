import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SidebarProvider, Sidebar, SidebarInset, SidebarTrigger, SidebarHeader, SidebarContent, SidebarFooter } from '@/components/ui/sidebar';
import { MainNav } from '@/components/layout/main-nav';
import { AppHeader } from '@/components/layout/header';
import { AppFooter } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { Button } from '@/components/ui/button';
import { Home, Info, Briefcase } from 'lucide-react';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio | Your Name',
  description: 'A personal portfolio showcasing projects and skills.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider>
          <Sidebar>
            <SidebarHeader className="p-4">
              <Link href="/" className="text-2xl font-semibold text-primary hover:text-accent transition-colors">
                Portfolio
              </Link>
            </SidebarHeader>
            <SidebarContent>
              <MainNav />
            </SidebarContent>
            <SidebarFooter className="p-4 text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Your Name
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            <AppHeader />
            <main className="flex-1 p-4 md:p-8 lg:p-12">
              {children}
            </main>
            <AppFooter />
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
