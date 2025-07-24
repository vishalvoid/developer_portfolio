import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin, Calendar, Heart, BookOpen, Music, Coffee } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const timeline = [
    {
      year: "2023 - Present",
      title: "Web Developer Intern (Full Stack)",
      company: "PSS Technologies",
      description: "Implemented full stack chat application which stores real-time data in MongoDB database along with real-time communication using Socket.io",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    },
    {
      year: "2023",
      title: "Web Developer Intern (Full Stack)",
      company: "Codemix",
      description: "Developed a GeoLocation app & Designed an authentication system for HR management and service applications with hierarchical user creation and real-time monitoring.",
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
    },
    {
      year: "2022 - 2023",
      title: "Frontend Developer (Freelance)",
      company: "JP Foundation",
      description: "Created a simple but beautiful website for NGO Jayaprakash Narayan Foundation (central government undertaking)",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const values = [
    {
      title: "Continuous Learning",
      description: "I believe in staying updated with the latest technologies and best practices.",
    },
    {
      title: "Quality Code",
      description: "Writing clean, maintainable, and well-documented code is my priority.",
    },
    {
      title: "User-Centric Design",
      description: "Building applications that provide exceptional user experiences.",
    },
    {
      title: "Open Source",
      description: "Contributing to the community and sharing knowledge through open source projects.",
    },
  ];

  const interests = [
    { icon: BookOpen, label: "Reading Tech Blogs", color: "bg-blue-500" },
    { icon: Music, label: "Music Production", color: "bg-purple-500" },
    { icon: Coffee, label: "Coffee Enthusiast", color: "bg-amber-500" },
    { icon: Heart, label: "Open Source", color: "bg-red-500" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <div className="container py-12">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground">Noida, India</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              I'm a passionate full-stack developer who loves building meaningful applications 
              and contributing to the developer community.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Bio Section */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>My Story</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                  <p>
                    I am a passionate and skilled <strong>Software Developer</strong> specializing in 
                    <strong> Mobile</strong> and <strong>Web Development</strong> with a strong dedication 
                    to quality and <strong>attention to detail</strong>. I am constantly seeking new 
                    <strong>challenges</strong> and opportunities to improve my craft.
                  </p>
                  <p>
                    I stay updated with the latest industry trends and best practices by attending conferences, 
                    taking online courses, and <strong>experimenting</strong> with new <strong>technologies</strong>. 
                    I build <strong>functional</strong>, <strong>beautiful</strong> and 
                    <strong>user-friendly</strong> designs. My commitment to innovation ensures that clients 
                    receive <strong>cutting-edge</strong> and <strong>effective solutions</strong>.
                  </p>
                  <p>
                    Currently, I'm focused on building real-time applications using the MERN stack and exploring 
                    modern deployment strategies. I believe in writing clean, maintainable code and creating 
                    exceptional user experiences.
                  </p>
                </CardContent>
              </Card>

              {/* Values */}
              <Card>
                <CardHeader>
                  <CardTitle>My Values</CardTitle>
                  <CardDescription>
                    The principles that guide my work and development philosophy
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {values.map((value, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="font-semibold">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">3+ years experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Noida, India</span>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/vishal_resume.pdf" target="_blank">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Interests */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Interests & Hobbies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {interests.map((interest, index) => (
                      <div key={index} className="flex flex-col items-center text-center p-3 rounded-lg bg-muted/50">
                        <div className={`p-2 rounded-full ${interest.color} text-white mb-2`}>
                          <interest.icon className="h-4 w-4" />
                        </div>
                        <span className="text-xs font-medium">{interest.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Currently Reading */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Currently Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="secondary">Advanced TypeScript</Badge>
                    <Badge variant="secondary">Serverless Architecture</Badge>
                    <Badge variant="secondary">GraphQL</Badge>
                    <Badge variant="secondary">Docker & Kubernetes</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Professional Timeline</CardTitle>
              <CardDescription>
                My journey as a software developer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-8 pb-8 border-l border-muted last:border-l-0">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{item.year}</Badge>
                      </div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="font-medium text-primary">{item.company}</p>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                      <div className="flex flex-wrap gap-1 pt-2">
                        {item.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Let's Connect</CardTitle>
                <CardDescription>
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild>
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/projects">View My Work</Link>
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