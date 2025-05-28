import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Eye, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-featured online store with robust product management and secure payments.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online shopping",
    tags: ["React", "Node.js", "Stripe"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: "2",
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with real-time updates.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "charts graphs",
    tags: ["D3.js", "Python", "Flask"],
    liveLink: "#",
    sourceLink: "#",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20 bg-card rounded-xl shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-primary">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm a passionate developer specializing in creating modern, responsive, and user-friendly web applications. Explore my work and learn more about my skills.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/projects" passHref>
              <Button size="lg" className="w-full sm:w-auto group transition-all duration-300 ease-in-out hover:shadow-accent/30 hover:shadow-lg">
                View My Projects
                <Briefcase className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/about" passHref>
              <Button variant="outline" size="lg" className="w-full sm:w-auto group transition-all duration-300 ease-in-out hover:shadow-md">
                About Me
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Snippet */}
      <section className="container mx-auto px-4">
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="md:flex">
            <div className="md:w-1/3">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Your Name"
                width={400}
                height={400}
                className="object-cover w-full h-full"
                data-ai-hint="professional portrait"
              />
            </div>
            <div className="md:w-2/3 p-6 md:p-8">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Hello, I'm [Your Name]</CardTitle>
                <CardDescription className="text-lg">Full-Stack Developer & UI/UX Enthusiast</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90">
                <p>
                  I build digital experiences that are not only functional but also aesthetically pleasing. With a keen eye for detail and a commitment to quality, I transform ideas into reality.
                </p>
                <p>
                  My expertise spans across various technologies including React, Next.js, Node.js, and more. I enjoy tackling complex problems and continuously learning new skills.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/about" passHref>
                  <Button variant="link" className="text-accent p-0 h-auto hover:underline">
                    Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </div>
          </div>
        </Card>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-60">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Link href={project.liveLink} passHref>
                  <Button variant="outline" className="group transition-all duration-300 ease-in-out hover:shadow-md">
                    <Eye className="mr-2 h-4 w-4" /> Live Demo
                  </Button>
                </Link>
                <Link href="/projects" passHref>
                  <Button variant="link" className="text-accent p-0 h-auto hover:underline">
                    More Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/projects" passHref>
            <Button size="lg" variant="secondary" className="group transition-all duration-300 ease-in-out hover:shadow-lg">
              See All Projects <Briefcase className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
