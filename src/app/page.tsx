import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Send, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-card p-6 md:p-10 rounded-lg shadow-md">
        <div className="container mx-auto text-left">
          <p className="text-lg text-primary mb-1">I&apos;m</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 text-foreground">
            Adith Kiran Kumar
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Frontend Developer
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button size="lg" className="bg-foreground text-primary hover:bg-foreground/90 w-full sm:w-auto">
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
            <Button size="lg" variant="default" className="w-full sm:w-auto"> {/* default uses primary color */}
              <Send className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Snippet */}
      <section className="bg-card p-6 md:p-10 rounded-lg shadow-md">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-2">About Me</h2>
          <div className="w-16 h-1 bg-primary mb-8"></div>
          <div className="md:flex md:space-x-8 items-start">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <Image
                src="https://placehold.co/300x300.png"
                alt="Adith Kiran Kumar - About"
                width={250}
                height={250}
                className="rounded-lg object-cover shadow-md"
                data-ai-hint="casual portrait"
              />
            </div>
            <div className="md:w-2/3 space-y-4 text-muted-foreground">
              <p>
                Adith Kiran Kumar is a student currently pursuing a B.Tech Honours degree at RV University. He has a keen interest in various technological domains, including web designing, machine learning, data science, and cybersecurity. Adith is actively engaged in exploring and learning about these fields to broaden his knowledge and skills. With a focus on both creativity and technical expertise, Adith is likely to make valuable contributions in the intersection of technology and innovation.
              </p>
              <div className="pt-2">
                <Link href="/about" passHref>
                  <Button variant="secondary" size="lg"> {/* secondary is bright yellow with black text */}
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
