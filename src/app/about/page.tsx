import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Award, Zap, Users, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      <Card className="overflow-hidden shadow-xl rounded-lg">
        <CardHeader className="bg-muted/30 p-6 md:p-8">
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary">About Me</CardTitle>
          <CardDescription className="text-lg md:text-xl text-muted-foreground mt-2">
            A Glimpse into My Journey, Skills, and Aspirations
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8 grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 space-y-6">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://placehold.co/500x500.png"
                alt="Your Name - Professional"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
                data-ai-hint="professional developer"
              />
            </div>
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-foreground">[Your Name]</h3>
              <p className="text-md text-accent">Full-Stack Developer</p>
              <p className="text-sm text-muted-foreground">Based in [Your City, Country]</p>
            </div>
             <div className="space-y-3 pt-4">
                <h4 className="text-xl font-semibold text-primary mb-2">Core Skills</h4>
                {["JavaScript (ES6+)", "React & Next.js", "Node.js & Express", "TypeScript", "Tailwind CSS", "Database Management (SQL/NoSQL)", "API Design & Integration", "Version Control (Git)"].map(skill => (
                   <div key={skill} className="flex items-center text-sm text-foreground/90">
                     <Zap className="h-4 w-4 mr-2 text-accent flex-shrink-0" />
                     {skill}
                   </div>
                ))}
            </div>
          </div>
          <div className="md:col-span-2 space-y-6 text-foreground/90">
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">My Story</h2>
              <p className="mb-4 leading-relaxed">
                From a young age, I've been captivated by the power of technology to solve problems and connect people. My journey into web development started with [mention a specific trigger or early experience, e.g., a personal project, a fascinating article, a university course]. This initial spark grew into a deep passion for crafting elegant and efficient digital solutions.
              </p>
              <p className="mb-4 leading-relaxed">
                Over the years, I've honed my skills through [mention how you've learned, e.g., formal education, online courses, hands-on projects, professional experience]. I thrive in collaborative environments where I can contribute my expertise while also learning from others. Each project is an opportunity to push boundaries, explore new technologies, and create something impactful.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">Philosophy & Approach</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-card rounded-md border">
                  <div className="flex items-center mb-2">
                    <Target className="h-6 w-6 mr-2 text-accent" />
                    <h4 className="text-lg font-medium">User-Centric Design</h4>
                  </div>
                  <p className="text-sm leading-relaxed">I believe that the best applications are built with the end-user in mind. Empathy and intuitive design are at the core of my development process.</p>
                </div>
                <div className="p-4 bg-card rounded-md border">
                  <div className="flex items-center mb-2">
                    <Award className="h-6 w-6 mr-2 text-accent" />
                    <h4 className="text-lg font-medium">Continuous Learning</h4>
                  </div>
                  <p className="text-sm leading-relaxed">The tech landscape is ever-evolving, and I'm committed to lifelong learning to stay at the forefront of innovation and best practices.</p>
                </div>
                 <div className="p-4 bg-card rounded-md border">
                  <div className="flex items-center mb-2">
                    <Zap className="h-6 w-6 mr-2 text-accent" />
                    <h4 className="text-lg font-medium">Clean & Efficient Code</h4>
                  </div>
                  <p className="text-sm leading-relaxed">I strive to write code that is not only functional but also maintainable, scalable, and performant, following industry best practices.</p>
                </div>
                <div className="p-4 bg-card rounded-md border">
                  <div className="flex items-center mb-2">
                    <Users className="h-6 w-6 mr-2 text-accent" />
                    <h4 className="text-lg font-medium">Collaboration</h4>
                  </div>
                  <p className="text-sm leading-relaxed">I value teamwork and open communication, believing that the best results come from diverse perspectives working together.</p>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">Beyond the Code</h2>
              <p className="leading-relaxed">
                When I'm not coding, you can find me [mention hobbies or interests, e.g., exploring new hiking trails, reading sci-fi novels, experimenting with new recipes, contributing to open-source projects]. These activities help me recharge and bring fresh perspectives to my work.
              </p>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
