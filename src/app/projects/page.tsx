import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  liveLink?: string;
  sourceLink?: string;
  category: string;
}

const projectsData: Project[] = [
  {
    id: "proj1",
    title: "Portfolio Website",
    description: "This very website, showcasing my skills and projects. Built with Next.js and Tailwind CSS.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "portfolio website",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Shadcn UI"],
    liveLink: "/",
    sourceLink: "#", // Add your source link
    category: "Web Development",
  },
  {
    id: "proj2",
    title: "Advanced E-commerce Platform",
    description: "A full-stack e-commerce solution with features like product catalog, cart, checkout, and user authentication.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    liveLink: "#", // Add your live link
    sourceLink: "#", // Add your source link
    category: "Full-Stack",
  },
  {
    id: "proj3",
    title: "Task Management App",
    description: "A collaborative task management tool to help teams organize and track their work effectively.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "task board",
    tags: ["Vue.js", "Firebase", "Vuetify"],
    liveLink: "#", // Add your live link
    sourceLink: "#", // Add your source link
    category: "Web Application",
  },
  {
    id: "proj4",
    title: "Interactive Data Dashboard",
    description: "A dynamic dashboard for visualizing and analyzing business intelligence data in real-time.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "data charts",
    tags: ["D3.js", "Python", "Flask", "Pandas"],
    liveLink: "#", // Add your live link
    category: "Data Visualization",
  },
  {
    id: "proj5",
    title: "Mobile Weather App",
    description: "A sleek and intuitive weather application for iOS and Android, providing real-time forecasts.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "weather app",
    tags: ["React Native", "Expo", "OpenWeatherMap API"],
    category: "Mobile Development",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">My Projects</h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
          A collection of my work, demonstrating my skills in various technologies and my passion for creating impactful solutions.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg">
            <div className="relative w-full h-52 group">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={project.imageHint}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
            <CardHeader className="pt-4">
              <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-start items-stretch sm:items-center gap-3 pt-4 border-t">
              {project.liveLink && (
                <Link href={project.liveLink} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full group transition-all duration-300 ease-in-out hover:shadow-md">
                      <Eye className="mr-2 h-4 w-4" /> Live Demo
                    </Button>
                  </a>
                </Link>
              )}
              {project.sourceLink && (
                <Link href={project.sourceLink} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="ghost" className="w-full group text-muted-foreground hover:text-foreground transition-all duration-300 ease-in-out">
                    <Github className="mr-2 h-4 w-4" /> Source Code
                  </Button>
                  </a>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
