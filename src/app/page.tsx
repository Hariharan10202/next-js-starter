// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import {
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Code,
  Palette,
  Database,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Master New Skills with
            <span className="text-primary"> Personalized</span> Learning
            Roadmaps
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10">
            Build your custom learning journey, track your progress, and connect
            with peers - all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/auth/signup">
              <Button size="lg" className="text-base px-8">
                Get Started
              </Button>
            </Link>
            <Link href="/explore">
              <Button size="lg" variant="outline" className="text-base px-8">
                Explore Roadmaps
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Supercharge Your Learning Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-10 w-10 text-primary" />,
                title: "Personalized Roadmaps",
                description:
                  "Get a customized learning plan tailored to your goals, skill level, and available time.",
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-primary" />,
                title: "Track Your Progress",
                description:
                  "Visualize your learning journey and stay motivated with milestone achievements.",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Community Support",
                description:
                  "Connect with peers, ask questions, and share your knowledge in topic discussions.",
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Gamified Experience",
                description:
                  "Earn XP, unlock badges, and level up as you progress through your learning roadmap.",
              },
              {
                icon: <Code className="h-10 w-10 text-primary" />,
                title: "Web Development",
                description:
                  "Master frontend, backend, or full-stack development with structured learning paths.",
              },
              {
                icon: <Database className="h-10 w-10 text-primary" />,
                title: "Data Science",
                description:
                  "Learn data analysis, machine learning, and visualization with hands-on projects.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-6 shadow-sm border flex flex-col items-center text-center"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join thousands of learners who are accelerating their careers with
            our structured learning paths.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="text-base px-8">
              Create Your Account
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-muted/30 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="text-lg font-bold">SkillRoadmap</span>
              <span className="text-sm text-muted-foreground">
                © {new Date().getFullYear()}
              </span>
            </div>
            <div className="flex gap-6">
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
