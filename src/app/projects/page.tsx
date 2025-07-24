"use client";

import React from "react";
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users, Star } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      id: "dravin",
      title: "Dravin",
      subtitle: "Social Media WebApp",
      description: "MERN Stack based Social Media WebApp with real-time features. Users can make friends, upload photos, like, comment, and enjoy one-to-one chatting functionality.",
      longDescription: "Dravin is a comprehensive social media platform built with the MERN stack, featuring real-time communication capabilities. The application includes user authentication, friend requests, photo uploads, interactive posts with likes and comments, and a real-time chat system using Socket.io.",
      image: "/project-images/dravin.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express.js", "JWT", "Cloudinary"],
      category: "Full Stack",
      status: "Completed",
      year: "2023",
      featured: true,
      metrics: {
        users: "100+",
        uptime: "99.9%",
        performance: "95"
      },
      features: [
        "User authentication and authorization",
        "Real-time chat messaging",
        "Photo upload and sharing",
        "Like and comment system",
        "Friend request functionality",
        "Responsive design",
        "Real-time notifications"
      ],
      challenges: [
        "Implementing real-time features with Socket.io",
        "Optimizing image upload and storage",
        "Managing complex state in React",
        "Ensuring data consistency across real-time updates"
      ],
      links: [
        { name: "Live Demo", url: "https://dravin-demo.vercel.app", type: "demo" },
        { name: "Source Code", url: "https://github.com/vishalvoid/dravin", type: "github" }
      ]
    },
    {
      id: "void-tables",
      title: "Void Tables",
      subtitle: "Restaurant Booking WebApp",
      description: "A website to reserve tables in restaurants by choosing the best one for you in real time. Features dish browsing, pricing, and table availability.",
      longDescription: "Void Tables is a modern restaurant reservation system that allows users to browse available tables, view menus with pricing, and make real-time reservations. The platform provides restaurant owners with a dashboard to manage bookings and table availability.",
      image: "/project-images/void-tables.jpg",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      category: "Full Stack",
      status: "Completed",
      year: "2023",
      featured: true,
      metrics: {
        bookings: "500+",
        restaurants: "25+",
        satisfaction: "4.8/5"
      },
      features: [
        "Real-time table availability",
        "Menu browsing with pricing",
        "Table reservation system",
        "Restaurant dashboard",
        "Payment integration",
        "Review and rating system",
        "Mobile-responsive design"
      ],
      challenges: [
        "Managing real-time table availability",
        "Implementing complex booking logic",
        "Creating intuitive restaurant dashboard",
        "Handling payment processing securely"
      ],
      links: [
        { name: "Live Demo", url: "https://void-tables.vercel.app", type: "demo" },
        { name: "Source Code", url: "https://github.com/vishalvoid/void-tables", type: "github" }
      ]
    },
    {
      id: "jp-foundation",
      title: "JP Foundation",
      subtitle: "NGO Website",
      description: "Beautiful looking website built for Jayaprakash Narayan Foundation using HTML, CSS, and JavaScript. Includes payment gateway integration for donations.",
      longDescription: "A professional website created for JP Foundation, a central government undertaking NGO. The website serves as an informational portal about the foundation's work and includes a secure donation system to support their initiatives.",
      image: "/project-images/jp-foundation.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Payment Gateway", "Responsive Design"],
      category: "Frontend",
      status: "Completed",
      year: "2023",
      featured: false,
      metrics: {
        visitors: "5000+/month",
        donations: "150% increase",
        performance: "95+"
      },
      features: [
        "Responsive web design",
        "Payment gateway integration",
        "Content management system",
        "SEO optimization",
        "Accessibility compliance",
        "Fast loading times",
        "Cross-browser compatibility"
      ],
      challenges: [
        "Creating accessible design for diverse users",
        "Integrating secure payment processing",
        "Optimizing for search engines",
        "Ensuring cross-browser compatibility"
      ],
      links: [
        { name: "Live Website", url: "https://jpfoundation.org", type: "demo" }
      ]
    },
    {
      id: "portfolio-v2",
      title: "Portfolio",
      subtitle: "Personal Website",
      description: "A portfolio to showcase talent created using latest tech stacks including Next.js, TypeScript, and modern design principles.",
      longDescription: "The current portfolio website you're viewing, built with modern web technologies and best practices. Features include responsive design, dark mode, interactive components, and comprehensive content management.",
      image: "/project-images/portfolio.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
      category: "Frontend",
      status: "In Development",
      year: "2024",
      featured: true,
      metrics: {
        performance: "98+",
        accessibility: "100",
        seo: "95+"
      },
      features: [
        "Server-side rendering",
        "TypeScript for type safety",
        "Responsive design system",
        "Interactive animations",
        "SEO optimization",
        "Accessibility compliance",
        "Modern UI components"
      ],
      challenges: [
        "Migrating from single-page to multi-page architecture",
        "Implementing modern design system",
        "Optimizing performance and SEO",
        "Creating engaging user interactions"
      ],
      links: [
        { name: "Live Website", url: "https://vishalvoid.com", type: "demo" },
        { name: "Source Code", url: "https://github.com/vishalvoid/developer_portfolio", type: "github" }
      ]
    },
    {
      id: "batak",
      title: "Batak",
      subtitle: "Hangout Space WebApp",
      description: "A place where a group of people can come and hangout via video and audio with group features for collaborative activities.",
      longDescription: "Batak is a video conferencing and hangout platform designed for casual social interactions. It provides group video/audio calls, collaborative features, and a friendly interface for virtual hangouts.",
      image: "/project-images/batak.jpg",
      technologies: ["React", "WebRTC", "Socket.io", "Node.js", "MongoDB"],
      category: "Full Stack",
      status: "In Development",
      year: "2024",
      featured: false,
      metrics: {
        users: "Beta Testing",
        rooms: "50+",
        sessions: "200+"
      },
      features: [
        "Video/audio calling",
        "Group hangout rooms",
        "Screen sharing",
        "Chat messaging",
        "Room management",
        "User presence indicators",
        "Mobile support"
      ],
      challenges: [
        "Implementing WebRTC for video calls",
        "Managing real-time group interactions",
        "Optimizing for mobile devices",
        "Handling network connectivity issues"
      ],
      links: [
        { name: "Coming Soon", url: "#", type: "demo" }
      ]
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <div className="container py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tighter mb-4">Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A collection of projects I've built, from social media platforms to restaurant booking systems. 
              Each project showcases different aspects of modern web development and problem-solving.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-5 w-5 text-yellow-500" />
              <h2 className="text-2xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription className="text-base font-medium text-primary">
                          {project.subtitle}
                        </CardDescription>
                      </div>
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription className="mt-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    {/* Metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-4 p-3 bg-muted rounded-lg">
                        {Object.entries(project.metrics).map(([key, value], index) => (
                          <div key={index} className="text-center">
                            <div className="font-semibold text-sm">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.links.map((link, linkIndex) => (
                        <Button 
                          key={linkIndex} 
                          variant={link.type === "demo" ? "default" : "outline"} 
                          size="sm" 
                          asChild
                          disabled={link.url === "#"}
                        >
                          <Link href={link.url} target="_blank">
                            {link.type === "github" ? (
                              <Github className="mr-2 h-3 w-3" />
                            ) : (
                              <ExternalLink className="mr-2 h-3 w-3" />
                            )}
                            {link.name}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Projects */}
          <div>
            <h2 className="text-2xl font-bold mb-6">All Projects</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <CardDescription className="text-sm font-medium text-primary">
                          {project.subtitle}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">{project.year}</Badge>
                        {project.featured && <Star className="h-3 w-3 text-yellow-500" />}
                      </div>
                    </div>
                    <CardDescription className="text-sm line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      {project.links.slice(0, 2).map((link, linkIndex) => (
                        <Button 
                          key={linkIndex} 
                          variant="outline" 
                          size="sm" 
                          className="flex-1" 
                          asChild
                          disabled={link.url === "#"}
                        >
                          <Link href={link.url} target="_blank">
                            {link.type === "github" ? (
                              <Github className="mr-1 h-3 w-3" />
                            ) : (
                              <ExternalLink className="mr-1 h-3 w-3" />
                            )}
                            {link.name}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Project Stats */}
          <Card className="mt-16">
            <CardHeader>
              <CardTitle>Project Statistics</CardTitle>
              <CardDescription>
                Overview of my project portfolio and development journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{projects.length}</div>
                  <div className="text-sm text-muted-foreground">Total Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {projects.filter(p => p.status === "Completed").length}
                  </div>
                  <div className="text-sm text-muted-foreground">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {projects.filter(p => p.category === "Full Stack").length}
                  </div>
                  <div className="text-sm text-muted-foreground">Full Stack</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {new Set(projects.flatMap(p => p.technologies)).size}
                  </div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Have a Project Idea?</CardTitle>
                <CardDescription>
                  I'm always interested in working on exciting new projects and challenges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild>
                    <Link href="/contact">Let's Discuss</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/vishalvoid" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      View All Code
                    </Link>
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