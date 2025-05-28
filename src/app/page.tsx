
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Send, ArrowRight, Mail, Phone, MapPin, Eye, Github, ExternalLink, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Contact Form Schema and Types
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});
type ContactFormValues = z.infer<typeof formSchema>;

// Projects Data and Types
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
    liveLink: "/#hero-section", // Link to the top of the page
    sourceLink: "#", 
    category: "Web Development",
  },
  {
    id: "proj2",
    title: "Advanced E-commerce Platform",
    description: "A full-stack e-commerce solution with features like product catalog, cart, checkout, and user authentication.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    liveLink: "#", 
    sourceLink: "#", 
    category: "Full-Stack",
  },
  {
    id: "proj3",
    title: "Task Management App",
    description: "A collaborative task management tool to help teams organize and track their work effectively.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "task board",
    tags: ["Vue.js", "Firebase", "Vuetify"],
    liveLink: "#", 
    sourceLink: "#", 
    category: "Web Application",
  },
  {
    id: "proj4",
    title: "Interactive Data Dashboard",
    description: "A dynamic dashboard for visualizing and analyzing business intelligence data in real-time.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "data charts",
    tags: ["D3.js", "Python", "Flask", "Pandas"],
    liveLink: "#", 
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


export default function HomePage() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onContactSubmit(data: ContactFormValues) {
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section id="hero-section" className="bg-card p-6 md:p-10 rounded-lg shadow-md min-h-[calc(100vh-10rem)] flex flex-col justify-center">
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
            <Link href="/#contact-section" passHref>
              <Button size="lg" variant="default" className="w-full sm:w-auto"> {/* default uses primary color */}
                <Send className="mr-2 h-5 w-5" />
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section (Full content from former about page) */}
      <section id="about-section" className="py-12 md:py-16">
        <div className="container mx-auto">
           <Card className="overflow-hidden shadow-xl rounded-lg">
            <CardHeader className="bg-muted/30 p-6 md:p-8">
              <CardTitle className="text-3xl md:text-4xl font-bold text-primary">More About Adith Kiran Kumar</CardTitle>
              <CardDescription className="text-lg md:text-xl text-muted-foreground mt-2">
                In-depth journey, skills, and aspirations.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <div className="md:flex md:space-x-8 items-start mb-8">
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
                </div>
              </div>
              <div className="space-y-6 text-foreground/90">
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-3">My Story (Extended)</h2>
                  <p className="mb-4 leading-relaxed">
                    Building upon the brief introduction, my fascination with technology was ignited by [Specific Detail about early experience, e.g., building my first simple game, disassembling and reassembling a computer, a captivating documentary on AI]. This curiosity wasn&apos;t just a fleeting interest; it became a driving force, propelling me to understand the intricate dance between hardware and software.
                  </p>
                  <p className="mb-4 leading-relaxed">
                    My academic journey at RV University has been instrumental in providing a structured foundation. Courses in [Mention 2-3 key courses like Data Structures, Algorithms, Web Development, AI Fundamentals] have equipped me with theoretical knowledge, while personal projects and hackathons have been my playground for practical application. I&apos;m particularly proud of [Mention a specific project briefly, e.g., a sentiment analysis tool I developed, or a collaborative e-commerce prototype].
                  </p>
                  <p className="mb-4 leading-relaxed">
                    I believe that learning is a continuous process, especially in the fast-paced tech world. Beyond formal education, I actively participate in online communities, contribute to open-source projects when possible, and follow thought leaders in areas like [Mention 1-2 specific tech areas like Serverless Architectures, Ethical AI, or Quantum Computing].
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-3">Core Competencies</h2>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li><strong>Web Design & Development:</strong> Proficient in HTML, CSS, JavaScript, and frameworks like React/Next.js. Experience in creating responsive and user-friendly interfaces.</li>
                    <li><strong>Machine Learning:</strong> Understanding of fundamental ML algorithms, data preprocessing, model training, and evaluation. Explored libraries like Scikit-learn and TensorFlow/Keras.</li>
                    <li><strong>Data Science:</strong> Skills in data analysis, visualization (e.g., Matplotlib, Seaborn), and drawing insights from complex datasets using Python and related tools.</li>
                    <li><strong>Cybersecurity:</strong> Basic knowledge of cybersecurity principles, network security, and vulnerability assessment. Keen to learn more about ethical hacking and defensive strategies.</li>
                    <li><strong>Problem Solving:</strong> Strong analytical skills with a methodical approach to dissecting problems and devising effective solutions.</li>
                    <li><strong>Teamwork & Communication:</strong> Proven ability to collaborate effectively in team environments and communicate technical concepts clearly.</li>
                  </ul>
                </section>
                 <section>
                  <h2 className="text-2xl font-semibold text-primary mb-3">Future Aspirations</h2>
                  <p className="leading-relaxed">
                    Looking ahead, I aim to specialize in [Mention a specific area, e.g., full-stack development with a focus on AI integration, or cybersecurity research]. I am eager to apply my skills in a challenging professional environment where I can contribute to innovative projects and continue my growth. I am particularly interested in roles that allow me to [Mention type of work, e.g., build scalable web applications, develop intelligent systems, or protect digital assets].
                  </p>
                </section>
                {/* The "Back to Home" button is not needed in a single-page layout */}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-0">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">My Projects</h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              A collection of my work, demonstrating my skills in various technologies and my passion for creating impactful solutions.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <Card 
                key={project.id} 
                className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out rounded-lg hover:-translate-y-1"
              >
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
                      <a target={project.liveLink.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" className="w-full sm:w-auto">
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
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-0">
          <Card className="overflow-hidden shadow-xl rounded-lg">
            <CardHeader className="bg-muted/30 p-6 md:p-8">
              <CardTitle className="text-3xl md:text-4xl font-bold text-primary">Get In Touch</CardTitle>
              <CardDescription className="text-lg md:text-xl text-muted-foreground mt-2">
                Have a question or want to work together? Send me a message!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Send A Message</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onContactSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Adith Kiran Kumar" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="Project Inquiry" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell me more about your project or query..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" size="lg" className="w-full sm:w-auto">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground/90">Address</h4>
                        <p>123 Tech Avenue, Innovation City, RV 560076</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground/90">Phone</h4>
                        <p>+1 (234) 567-8900</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground/90">Email</h4>
                        <p>adith.kiran@example.com</p>
                      </div>
                    </div>
                  </div>
                   <div className="mt-8 pt-6 border-t border-border">
                     <h4 className="text-xl font-semibold text-foreground mb-3">Office Hours</h4>
                     <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                     <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                   </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
