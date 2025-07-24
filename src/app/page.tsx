"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, Github, Code, Briefcase, FileText } from "lucide-react";

// Import existing assets - we'll keep using them
import Jumping from "../components/assets/Experiments.svg";

export default function Home() {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "25+" },
    { label: "Technologies", value: "15+" },
    { label: "GitHub Repos", value: "40+" },
  ];

  const featuredProjects = [
    {
      title: "Dravin",
      description: "MERN Stack based Social Media WebApp with real-time chat",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      link: "#",
    },
    {
      title: "Void Tables",
      description: "Restaurant booking webapp with real-time table reservations",
      tech: ["Next.js", "TypeScript", "Prisma"],
      link: "#",
    },
    {
      title: "JP Foundation",
      description: "NGO website with payment gateway integration",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
  ];

  const currentTech = ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "PostgreSQL"];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Hello, I'm</p>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Vishal Kr. Singh
                </h1>
                <p className="text-xl text-muted-foreground">
                  MERN & TypeScript Engineer Crafting Real-time Apps
                </p>
              </div>
              
              <p className="text-muted-foreground max-w-[600px]">
                I'm a passionate full-stack developer specializing in modern web technologies. 
                I build scalable applications, contribute to open source, and share knowledge 
                through writing and community involvement.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/about">
                    Learn More About Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/vishal_resume.pdf" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    Contact Me
                  </Link>
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-8 md:grid-cols-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <Image
                src={Jumping}
                alt="Developer illustration"
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="container py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">Featured Projects</h2>
              <p className="text-muted-foreground mt-2">
                Some of my recent work and contributions
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Current Tech Stack */}
        <section className="container py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">Current Tech Stack</h2>
            <p className="text-muted-foreground mt-2">
              Technologies I'm currently working with
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {currentTech.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                className="px-4 py-2 bg-card border rounded-lg font-medium hover:bg-accent transition-colors cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/tech-stack">
                View Full Tech Stack
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* What I'm Doing Now */}
        <section className="container py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">What I'm Doing Now</h2>
            <p className="text-muted-foreground mt-2">
              Current focus and activities
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Working
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Full-stack development at PSS Technologies, building real-time applications
                  with MERN stack and Socket.io.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Exploring advanced TypeScript patterns, serverless architectures, 
                  and modern deployment strategies.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Writing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sharing knowledge through technical blog posts about web development
                  and software engineering best practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="container py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter">Latest Blog Posts</h2>
              <p className="text-muted-foreground mt-2">
                Recent thoughts and tutorials
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="text-sm text-muted-foreground">May 27, 2023 • Episode 1</div>
                <CardTitle>Are you a Beginner? Start Here.</CardTitle>
                <CardDescription>
                  A comprehensive guide for developers just starting their journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/blog/8">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="text-sm text-muted-foreground">June 26, 2023 • Episode 4</div>
                <CardTitle>Embracing Continuous Learning</CardTitle>
                <CardDescription>
                  Why continuous learning is crucial for developers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/blog/5">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16">
          <Card className="text-center p-8">
            <CardHeader>
              <CardTitle className="text-2xl">Let's Work Together</CardTitle>
              <CardDescription className="text-lg">
                I'm always interested in new opportunities and exciting projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="https://github.com/vishalvoid" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Profile
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
