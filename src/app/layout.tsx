
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SidebarProvider, Sidebar, SidebarInset, SidebarHeader, SidebarContent, SidebarFooter } from '@/components/ui/sidebar';
import { MainNav } from '@/components/layout/main-nav';
import { Toaster } from "@/components/ui/toaster";
import { Button } from '@/components/ui/button';
import { Twitter, Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio | Adith Kiran Kumar',
  description: 'A personal portfolio showcasing projects and skills of Adith Kiran Kumar.',
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
            <SidebarHeader className="p-4 flex flex-col items-center space-y-2">
              <Image
                src="https://placehold.co/150x150.png"
                alt="Adith Kiran Kumar"
                width={100}
                height={100}
                className="rounded-full border-2 border-sidebar-foreground"
                data-ai-hint="professional portrait"
              />
              <h2 className="text-xl font-semibold text-sidebar-foreground">Adith Kiran Kumar</h2>
            </SidebarHeader>
            <SidebarContent>
              <MainNav />
            </SidebarContent>
            <SidebarFooter className="p-4 text-xs text-muted-foreground flex flex-col items-center space-y-2">
               <div className="flex justify-center space-x-3">
                <Link href="#" passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <Button variant="default" size="icon" className="bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/90">
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </a>
                </Link>
                <Link href="#" passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <Button variant="default" size="icon" className="bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/90">
                      <Facebook className="h-5 w-5" />
                    </Button>
                  </a>
                </Link>
                <Link href="#" passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <Button variant="default" size="icon" className="bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/90">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </a>
                </Link>
              </div>
              <div>&copy; {new Date().getFullYear()} Adith Kiran Kumar</div>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            <main className="flex-1 p-4 md:p-8 lg:p-12">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
