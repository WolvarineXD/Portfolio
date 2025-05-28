
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Zap, Code, Database, Settings, Users, Brain } from "lucide-react"; // Example icons

interface Skill {
  name: string;
  level: number; // 0-100
  icon?: React.ElementType;
}

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  skills: Skill[];
  description?: string;
}

const skillsData: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: Code,
    description: "Crafting responsive and engaging user interfaces.",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3 & Tailwind", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Shadcn UI", level: 70 },
    ],
  },
  {
    name: "Backend Development",
    icon: Settings,
    description: "Building robust server-side logic and APIs.",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Python (Flask/Django)", level: 60 },
      { name: "RESTful APIs", level: 75 },
    ],
  },
  {
    name: "Databases",
    icon: Database,
    description: "Managing and querying data effectively.",
    skills: [
      { name: "MongoDB", level: 65 },
      { name: "SQL (PostgreSQL/MySQL)", level: 70 },
    ],
  },
  {
    name: "Machine Learning & Data Science",
    icon: Brain,
    description: "Exploring data patterns and building intelligent systems.",
    skills:
    [
      { name: "Python (NumPy, Pandas)", level: 70 },
      { name: "Scikit-learn", level: 60 },
      { name: "TensorFlow/Keras (Basic)", level: 50 },
      { name: "Data Visualization", level: 65 },
    ],
  },
  {
    name: "Cybersecurity",
    icon: Zap, // Using Zap as a placeholder, could be Shield
    description: "Understanding and implementing security best practices.",
    skills: [
      { name: "Network Security Basics", level: 55 },
      { name: "Vulnerability Assessment (Intro)", level: 50 },
    ],
  },
  {
    name: "Tools & Soft Skills",
    icon: Users,
    description: "Essential tools and interpersonal abilities.",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Docker (Basic)", level: 50 },
      { name: "Problem Solving", level: 90 },
      { name: "Team Collaboration", level: 80 },
      { name: "Communication", level: 85 },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      <Card className="overflow-hidden shadow-xl rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out hover:-translate-y-1">
        <CardHeader className="bg-muted/30 p-6 md:p-8">
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary">My Skillset</CardTitle>
          <CardDescription className="text-lg md:text-xl text-muted-foreground mt-2">
            A glimpse into my technical capabilities and expertise.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <div className="space-y-10">
            {skillsData.map((category) => (
              <section key={category.name}>
                <div className="flex items-center mb-6">
                  <category.icon className="h-8 w-8 text-primary mr-3" />
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">{category.name}</h2>
                    {category.description && <p className="text-sm text-muted-foreground">{category.description}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <h3 className="text-md font-medium text-foreground/90">{skill.name}</h3>
                        <Badge variant="secondary" className="text-xs">{skill.level}%</Badge>
                      </div>
                      <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-2.5" />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
