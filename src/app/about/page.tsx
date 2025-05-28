import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      <Card className="overflow-hidden shadow-xl rounded-lg">
        <CardHeader className="bg-muted/30 p-6 md:p-8">
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary">More About Adith Kiran Kumar</CardTitle>
          <CardDescription className="text-lg md:text-xl text-muted-foreground mt-2">
            In-depth journey, skills, and aspirations.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <div className="space-y-6 text-foreground/90">
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">My Story (Extended)</h2>
              <p className="mb-4 leading-relaxed">
                Building upon the brief introduction, my fascination with technology was ignited by [Specific Detail about early experience, e.g., building my first simple game, disassembling and reassembling a computer, a captivating documentary on AI]. This curiosity wasn't just a fleeting interest; it became a driving force, propelling me to understand the intricate dance between hardware and software.
              </p>
              <p className="mb-4 leading-relaxed">
                My academic journey at RV University has been instrumental in providing a structured foundation. Courses in [Mention 2-3 key courses like Data Structures, Algorithms, Web Development, AI Fundamentals] have equipped me with theoretical knowledge, while personal projects and hackathons have been my playground for practical application. I'm particularly proud of [Mention a specific project briefly, e.g., a sentiment analysis tool I developed, or a collaborative e-commerce prototype].
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
            <div className="mt-8">
              <Link href="/" passHref>
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
