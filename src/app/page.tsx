
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Send, Github, Mail, Phone, MapPin, ChevronDown, ChevronUp, ArrowUp, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

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
    imageUrl: "/Screenshot 2025-05-28 131453.png",
    imageHint: "portfolio website",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Shadcn UI"],
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
    sourceLink: "#",
    category: "Data Visualization",
  },
  {
    id: "proj5",
    title: "Mobile Weather App",
    description: "A sleek and intuitive weather application for iOS and Android, providing real-time forecasts.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "weather app",
    tags: ["React Native", "Expo", "OpenWeatherMap API"],
    sourceLink: "#",
    category: "Mobile Development",
  },
];

const phrases = ["Student at RV University", "Welcome to my Resume"];
const FORMSpree_ENDPOINT = "https://formspree.io/f/mpwdvlvo"; 

export default function HomePage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [heroSubtitle, setHeroSubtitle] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAboutExtendedVisible, setIsAboutExtendedVisible] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseDuration = 1500;
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setHeroSubtitle(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
          timer = setTimeout(handleTyping, deleteSpeed);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          // charIndex is already 0
        }
      } else {
        if (charIndex < currentPhrase.length) {
          setHeroSubtitle(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
          timer = setTimeout(handleTyping, typeSpeed);
        } else {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    timer = setTimeout(handleTyping, typeSpeed); // Initial call

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollToTop && window.scrollY > 400) {
        setShowScrollToTop(true);
      } else if (showScrollToTop && window.scrollY <= 400) {
        setShowScrollToTop(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScrollToTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  async function onContactSubmit(data: ContactFormValues) {
    if (FORMSpree_ENDPOINT === "https://formspree.io/f/YOUR_FORM_ID_HERE") {
      toast({
        variant: "destructive",
        title: "Formspree Endpoint Not Configured!",
        description: "Please replace 'YOUR_FORM_ID_HERE' in the code with your actual Formspree form ID.",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSpree_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json', // Formspree recommends this for AJAX submissions
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon via Formspree.",
        });
        form.reset();
      } else {
        // Formspree might return errors in JSON format
        let errorMessage = "Could not send your message. Please try again.";
        try {
            const errorResult = await response.json();
            if (errorResult && errorResult.errors && errorResult.errors.length > 0) {
                errorMessage = errorResult.errors.map((err: { field: string, message: string}) => `${err.field ? err.field + ': ' : ''}${err.message}`).join(', ');
            } else if (errorResult && errorResult.error) {
                errorMessage = errorResult.error;
            }
        } catch (e) {
            // If parsing error response fails, use a generic message
            console.error("Error parsing Formspree error response:", e);
        }
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: errorMessage,
        });
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem connecting to the server or Formspree. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-12 relative">
      {/* Hero Section */}
      <section id="hero-section" className="bg-card rounded-lg shadow-md flex flex-col justify-center p-2">
        <div className="container mx-auto text-left">
          <p className="text-lg text-primary mb-1">I&apos;m</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 text-card-foreground">
            Adith Kiran Kumar
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {heroSubtitle}
            <span className="inline-block ml-1 animate-pulse opacity-75">|</span>
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-0">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto rounded-r-none sm:rounded-r-md">
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
            <Link href="/#contact-section" passHref>
              <Button size="lg" variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto rounded-l-none sm:rounded-l-md">
                <Send className="mr-2 h-5 w-5" />
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-section" className="py-12 md:py-16">
        <div className="container mx-auto">
           <Card className="overflow-hidden shadow-xl rounded-lg">
            <CardHeader className="bg-muted/30 p-6 md:p-8">
              <CardTitle className="text-3xl md:text-4xl font-bold text-card-foreground">More About Adith Kiran Kumar</CardTitle>
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
              <div className="mt-6 mb-4 flex justify-start">
                <Button
                  variant="outline"
                  onClick={() => setIsAboutExtendedVisible(!isAboutExtendedVisible)}
                  className="text-primary border-primary hover:bg-primary/10"
                >
                  {isAboutExtendedVisible ? "Read Less" : "Read More"}
                  {isAboutExtendedVisible ? <ChevronUp className="ml-2 h-5 w-5" /> : <ChevronDown className="ml-2 h-5 w-5" />}
                </Button>
              </div>

              {isAboutExtendedVisible && (
                <div className="space-y-6 text-card-foreground/90 animate-in fade-in-50 duration-500">
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
                </div>
              )}
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
                <div className="relative w-full h-60 group">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    style={{objectFit: "cover"}}
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
                        className="text-xs bg-accent text-accent-foreground px-2.5 py-1 rounded-full font-medium"
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
                  {project.sourceLink && (
                    <Link href={project.sourceLink} passHref legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                      <Button variant="ghost" className="w-full group text-muted-foreground hover:text-card-foreground transition-all duration-300 ease-in-out">
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
                  <h3 className="text-2xl font-semibold text-card-foreground mb-6">Send A Message</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onContactSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-card-foreground/80">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Username" {...field} />
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
                            <FormLabel className="text-card-foreground/80">Email Address</FormLabel>
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
                            <FormLabel className="text-card-foreground/80">Subject</FormLabel>
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
                            <FormLabel className="text-card-foreground/80">Your Message</FormLabel>
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
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-card-foreground mb-6">Contact Information</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-card-foreground/90">Address</h4>
                        <p>#314 Janabharthi BDA Layout, RVCE Post Banglore- 560059</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-card-foreground/90">Phone</h4>
                        <p>+91 8904440075</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-card-foreground/90">Email</h4>
                        <p>adith.sps@gmail.com</p>
                      </div>
                    </div>
                     <p className="pt-2 text-sm">
                      Feel free to reach out via any of the methods above. I&apos;m always happy to discuss new projects, collaborations, or opportunities. Your inquiries are important, and I aim to respond promptly.
                    </p>
                  </div>
                   <div className="mt-8 pt-6 border-t">
                     <h4 className="text-xl font-semibold text-card-foreground mb-3">Active Hours</h4>
                     <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                     <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                     <p className="text-muted-foreground text-sm mt-2">
                       I strive to respond to all inquiries within 24-48 business hours. If your matter is urgent, please indicate so in your message.
                     </p>
                   </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {showScrollToTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-opacity duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}


    
