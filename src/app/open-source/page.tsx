import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, GitFork, Users, Code, Heart, Zap } from "lucide-react";
import Link from "next/link";

export default function OpenSourcePage() {
  const contributions = [
    {
      id: "developer-portfolio",
      name: "Developer Portfolio v2",
      description: "Modern portfolio template built with Next.js 14, TypeScript, and shadcn/ui",
      type: "Owner",
      language: "TypeScript",
      stars: 15,
      forks: 8,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      status: "Active",
      contribution: "Creator and maintainer",
      url: "https://github.com/vishalvoid/developer_portfolio",
      featured: true
    },
    {
      id: "dravin-social",
      name: "Dravin Social Platform",
      description: "MERN stack social media application with real-time features",
      type: "Owner", 
      language: "JavaScript",
      stars: 12,
      forks: 6,
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      status: "Completed",
      contribution: "Full development and documentation",
      url: "https://github.com/vishalvoid/dravin",
      featured: true
    },
    {
      id: "void-tables",
      name: "Restaurant Booking System",
      description: "Next.js application for restaurant table reservations",
      type: "Owner",
      language: "TypeScript",
      stars: 8,
      forks: 4,
      technologies: ["Next.js", "Prisma", "PostgreSQL"],
      status: "Active",
      contribution: "Architecture and implementation",
      url: "https://github.com/vishalvoid/void-tables",
      featured: false
    },
    {
      id: "react-chat-components",
      name: "React Chat Components",
      description: "Reusable React components for building chat interfaces",
      type: "Contributor",
      language: "JavaScript",
      stars: 45,
      forks: 12,
      technologies: ["React", "Socket.io", "CSS"],
      status: "Active",
      contribution: "UI components and documentation improvements",
      url: "https://github.com/community/react-chat-components",
      featured: false
    }
  ];

  const communityStats = [
    { label: "GitHub Repositories", value: "40+", icon: Github },
    { label: "Total Stars Earned", value: "85+", icon: Star },
    { label: "Forks Created", value: "30+", icon: GitFork },
    { label: "Contributors Helped", value: "15+", icon: Users }
  ];

  const skills = [
    {
      category: "Open Source Skills", 
      items: [
        "Project Architecture & Documentation",
        "Community Management & Communication", 
        "Code Review & Mentoring",
        "Issue Triage & Bug Fixing",
        "Feature Development & Testing",
        "CI/CD Pipeline Setup"
      ]
    },
    {
      category: "Technologies Contributed To",
      items: [
        "React & Next.js Ecosystem",
        "Node.js & Express Applications",
        "TypeScript & JavaScript Libraries",
        "Database Systems (MongoDB, PostgreSQL)",
        "Real-time Applications (Socket.io)",
        "UI Component Libraries"
      ]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "Believing in the power of collaboration and knowledge sharing to advance technology for everyone."
    },
    {
      icon: Code,
      title: "Quality Code",
      description: "Writing clean, well-documented, and tested code that others can easily understand and contribute to."
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "Helping fellow developers grow by sharing knowledge, reviewing code, and providing guidance."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Contributing to cutting-edge projects and exploring new technologies that push the web forward."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <div className="container py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tighter mb-4">Open Source & Community</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              My contributions to the open source community, from building reusable tools to 
              mentoring fellow developers. I believe in the power of collaboration and knowledge sharing.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {communityStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Contributions */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-5 w-5 text-yellow-500" />
              <h2 className="text-2xl font-bold">Featured Contributions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contributions.filter(contrib => contrib.featured).map((contribution) => (
                <Card key={contribution.id} className="hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <Github className="h-5 w-5" />
                          {contribution.name}
                        </CardTitle>
                        <Badge className="mt-2" variant={contribution.type === "Owner" ? "default" : "secondary"}>
                          {contribution.type}
                        </Badge>
                      </div>
                      <Badge variant="outline">{contribution.status}</Badge>
                    </div>
                    <CardDescription className="mt-3">
                      {contribution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        <span>{contribution.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-4 w-4" />
                        <span>{contribution.forks}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className={`w-3 h-3 rounded-full ${
                          contribution.language === 'TypeScript' ? 'bg-blue-500' : 'bg-yellow-500'
                        }`}></div>
                        <span>{contribution.language}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {contribution.technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Contribution */}
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="font-medium text-sm mb-1">My Contribution:</div>
                      <div className="text-sm text-muted-foreground">{contribution.contribution}</div>
                    </div>

                    <Button className="w-full" asChild>
                      <Link href={contribution.url} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        View Repository
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Contributions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">All Contributions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contributions.map((contribution) => (
                <Card key={contribution.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        {contribution.name}
                      </CardTitle>
                      {contribution.featured && <Star className="h-4 w-4 text-yellow-500" />}
                    </div>
                    <CardDescription className="text-sm line-clamp-2">
                      {contribution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <Badge variant={contribution.type === "Owner" ? "default" : "secondary"}>
                        {contribution.type}
                      </Badge>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          <span>{contribution.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="h-3 w-3" />
                          <span>{contribution.forks}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {contribution.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {contribution.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{contribution.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={contribution.url} target="_blank">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        View Repository
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills & Values */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Skills */}
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Values */}
            <div>
              <h3 className="text-xl font-bold mb-6">Open Source Values</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <value.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Open Source Matters */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Why Open Source Matters to Me</CardTitle>
              <CardDescription>
                My philosophy on contributing to the developer community
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <p>
                Open source has been instrumental in my growth as a developer. Every framework, 
                library, and tool I use daily exists because of the generous contributions of 
                developers worldwide. I believe in giving back to this community that has given me so much.
              </p>
              <p>
                Through my open source contributions, I aim to:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Create tools and components that solve real-world problems</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Share knowledge and best practices with fellow developers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Help maintain and improve existing projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span>Mentor newcomers and foster an inclusive community</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Let's Collaborate</CardTitle>
                <CardDescription>
                  Interested in contributing to my projects or collaborating on something new?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild>
                    <Link href="https://github.com/vishalvoid" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Follow on GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/projects">View My Projects</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}