import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Calendar, Briefcase } from "lucide-react";
import Link from "next/link";

export default function TechStackPage() {
  const techCategories = [
    {
      category: "Frontend Frameworks & Libraries",
      icon: "⚛️",
      technologies: [
        {
          name: "React",
          description: "Component-based library for building user interfaces",
          experience: "3+ years",
          proficiency: "Expert",
          usedIn: ["Dravin", "Portfolio", "Multiple Projects"],
          documentation: "https://react.dev",
          favorite: true
        },
        {
          name: "Next.js",
          description: "React framework with server-side rendering and static generation",
          experience: "2+ years",
          proficiency: "Advanced",
          usedIn: ["Portfolio v2", "Personal Projects"],
          documentation: "https://nextjs.org",
          favorite: true
        },
        {
          name: "TypeScript",
          description: "Typed superset of JavaScript for better development experience",
          experience: "2+ years",
          proficiency: "Advanced",
          usedIn: ["Recent Projects", "Portfolio v2"],
          documentation: "https://typescriptlang.org"
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework for rapid UI development",
          experience: "2+ years",
          proficiency: "Expert",
          usedIn: ["Portfolio v2", "Recent Projects"],
          documentation: "https://tailwindcss.com",
          favorite: true
        }
      ]
    },
    {
      category: "Backend Technologies",
      icon: "🔧",
      technologies: [
        {
          name: "Node.js",
          description: "JavaScript runtime for building scalable server applications",
          experience: "3+ years",
          proficiency: "Advanced",
          usedIn: ["APIs", "Real-time Apps", "Microservices"],
          documentation: "https://nodejs.org",
          favorite: true
        },
        {
          name: "Express.js",
          description: "Fast, minimalist web framework for Node.js",
          experience: "3+ years",
          proficiency: "Advanced",
          usedIn: ["REST APIs", "Web Servers"],
          documentation: "https://expressjs.com"
        },
        {
          name: "Socket.io",
          description: "Real-time bidirectional event-based communication",
          experience: "2+ years",
          proficiency: "Advanced",
          usedIn: ["Chat Applications", "Real-time Features"],
          documentation: "https://socket.io"
        }
      ]
    },
    {
      category: "Databases",
      icon: "🗄️",
      technologies: [
        {
          name: "MongoDB",
          description: "NoSQL document database for modern applications",
          experience: "2+ years",
          proficiency: "Advanced",
          usedIn: ["Dravin", "Chat Apps", "APIs"],
          documentation: "https://mongodb.com",
          favorite: true
        },
        {
          name: "PostgreSQL",
          description: "Advanced open-source relational database",
          experience: "1+ year",
          proficiency: "Intermediate",
          usedIn: ["Codemix Projects", "Enterprise Apps"],
          documentation: "https://postgresql.org"
        },
        {
          name: "Redis",
          description: "In-memory data structure store for caching",
          experience: "1+ year",
          proficiency: "Intermediate",
          usedIn: ["Caching", "Session Storage"],
          documentation: "https://redis.io"
        }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      technologies: [
        {
          name: "AWS",
          description: "Amazon Web Services cloud platform",
          experience: "1+ year",
          proficiency: "Intermediate",
          usedIn: ["Deployments", "Storage", "Compute"],
          documentation: "https://aws.amazon.com"
        },
        {
          name: "Docker",
          description: "Containerization platform for application deployment",
          experience: "Learning",
          proficiency: "Beginner",
          usedIn: ["Development Environment"],
          documentation: "https://docker.com"
        },
        {
          name: "Vercel",
          description: "Platform for deploying frontend applications",
          experience: "2+ years",
          proficiency: "Advanced",
          usedIn: ["Portfolio", "Next.js Apps"],
          documentation: "https://vercel.com",
          favorite: true
        }
      ]
    },
    {
      category: "Development Tools",
      icon: "🛠️",
      technologies: [
        {
          name: "Git & GitHub",
          description: "Version control system and code repository hosting",
          experience: "3+ years",
          proficiency: "Expert",
          usedIn: ["All Projects", "Collaboration"],
          documentation: "https://git-scm.com",
          favorite: true
        },
        {
          name: "VS Code",
          description: "Lightweight but powerful source code editor",
          experience: "4+ years",
          proficiency: "Expert",
          usedIn: ["Daily Development"],
          documentation: "https://code.visualstudio.com",
          favorite: true
        },
        {
          name: "Postman",
          description: "API development and testing platform",
          experience: "2+ years",
          proficiency: "Advanced",
          usedIn: ["API Testing", "Documentation"],
          documentation: "https://postman.com"
        }
      ]
    },
    {
      category: "Mobile Development", 
      icon: "📱",
      technologies: [
        {
          name: "Flutter",
          description: "Google's UI toolkit for building mobile applications",
          experience: "1+ year",
          proficiency: "Intermediate",
          usedIn: ["Mobile Apps", "Cross-platform Development"],
          documentation: "https://flutter.dev"
        },
        {
          name: "Dart",
          description: "Programming language optimized for building mobile apps",
          experience: "1+ year",
          proficiency: "Intermediate",
          usedIn: ["Flutter Development"],
          documentation: "https://dart.dev"
        }
      ]
    }
  ];

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "Expert": return "text-green-600 bg-green-50 dark:bg-green-900/20";
      case "Advanced": return "text-blue-600 bg-blue-50 dark:bg-blue-900/20";
      case "Intermediate": return "text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20";
      default: return "text-gray-600 bg-gray-50 dark:bg-gray-900/20";
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <div className="container py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tighter mb-4">Tech Stack</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A comprehensive overview of the technologies, frameworks, and tools I use 
              to build modern web applications. Each technology includes my experience level, 
              usage context, and relevant projects.
            </p>
          </div>

          {/* Tech Categories */}
          <div className="space-y-8">
            {techCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    {category.category}
                  </CardTitle>
                  <CardDescription>
                    Technologies and tools in this category
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.technologies.map((tech, techIndex) => (
                      <Card key={techIndex} className="relative hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
                        {tech.favorite && (
                          <div className="absolute top-3 right-3">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          </div>
                        )}
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center justify-between">
                            {tech.name}
                            <Badge className={getProficiencyColor(tech.proficiency)}>
                              {tech.proficiency}
                            </Badge>
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {tech.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{tech.experience}</span>
                          </div>
                          
                          <div>
                            <h5 className="font-medium mb-2 flex items-center gap-2">
                              <Briefcase className="h-4 w-4" />
                              Used In:
                            </h5>
                            <div className="flex flex-wrap gap-1">
                              {tech.usedIn.map((project, projectIndex) => (
                                <Badge key={projectIndex} variant="secondary" className="text-xs">
                                  {project}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          {tech.documentation && (
                            <Button variant="outline" size="sm" className="w-full" asChild>
                              <Link href={tech.documentation} target="_blank">
                                <ExternalLink className="mr-2 h-3 w-3" />
                                Documentation
                              </Link>
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tech Stack Summary */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Tech Stack Philosophy</CardTitle>
              <CardDescription>
                My approach to choosing and working with technologies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Core Principles</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
                      <span>Choose the right tool for the job, not the trending one</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
                      <span>Prioritize maintainability and developer experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
                      <span>Stay updated with industry best practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
                      <span>Focus on performance and user experience</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Currently Learning</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">GraphQL</Badge>
                    <Badge variant="outline">Kubernetes</Badge>
                    <Badge variant="outline">Microservices</Badge>
                    <Badge variant="outline">Serverless</Badge>
                    <Badge variant="outline">Web3</Badge>
                    <Badge variant="outline">AI/ML Integration</Badge>
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-6 border-t">
                <p className="text-sm text-muted-foreground mb-4">
                  Interested in discussing any of these technologies or collaborating on a project?
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild>
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/projects">View My Projects</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}