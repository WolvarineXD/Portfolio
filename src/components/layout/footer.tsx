export function AppFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-6 px-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p>Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
