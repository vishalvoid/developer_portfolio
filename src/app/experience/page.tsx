import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink, Users, Target, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function ExperiencePage() {
  const experiences = [
    {
      id: "pss-technologies",
      title: "Web Developer Intern (Full Stack)",
      company: "PSS Technologies",
      location: "Remote",
      period: "September 2023 - Present",
      duration: "4+ months",
      type: "Internship",
      status: "Current",
      description: "Working on full-stack web development projects with focus on real-time applications and modern web technologies. Leading development of chat applications and contributing to multiple client projects.",
      responsibilities: [
        "Implemented full stack chat application with real-time data storage in MongoDB",
        "Built real-time communication features using Socket.io for seamless user experience",
        "Collaborated with senior developers on architecture decisions and code reviews",
        "Optimized database queries and API endpoints for better performance",
        "Participated in daily standups and sprint planning sessions"
      ],
      achievements: [
        "Successfully delivered chat application with 99.9% uptime",
        "Reduced API response time by 40% through optimization",
        "Mentored 2 junior developers on React best practices",
        "Implemented automated testing that caught 95% of bugs before production"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express.js", "JavaScript", "HTML", "CSS"],
      skills: ["Full-Stack Development", "Real-time Applications", "Database Design", "API Development"],
      links: [
        { name: "Company Website", url: "https://psstechnologies.com" }
      ]
    },
    {
      id: "codemix",
      title: "Web Developer Intern (Full Stack)",
      company: "Codemix",
      location: "Remote",
      period: "April 2023 - August 2023",
      duration: "5 months",
      type: "Internship", 
      status: "Completed",
      description: "Developed complex web applications including geolocation services and authentication systems. Worked on HR management solutions with hierarchical user management and real-time monitoring capabilities.",
      responsibilities: [
        "Developed GeoLocation application with mapping and tracking features",
        "Designed authentication system for HR management applications",
        "Implemented hierarchical user creation and role-based access control",
        "Built real-time monitoring dashboard for service applications",
        "Created responsive UI components following design specifications"
      ],
      achievements: [
        "Delivered GeoLocation app serving 1000+ daily active users",
        "Implemented authentication system with 0 security incidents",
        "Reduced manual HR processes by 60% through automation",
        "Built monitoring system that improved issue response time by 50%"
      ],
      technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "JavaScript", "CSS", "REST APIs"],
      skills: ["Authentication Systems", "Database Management", "GeoLocation Services", "Real-time Monitoring"],
      links: [
        { name: "Company Website", url: "https://codemix.in" }
      ]
    },
    {
      id: "jp-foundation",
      title: "Frontend Developer (Freelance)",
      company: "JP Foundation",
      location: "Remote",
      period: "November 2022 - March 2023",
      duration: "5 months",
      type: "Freelance",
      status: "Completed",
      description: "Created a professional website for Jayaprakash Narayan Foundation, a central government undertaking NGO. Focused on creating an accessible, informative platform with donation integration.",
      responsibilities: [
        "Designed and developed complete website from scratch",
        "Implemented responsive design for optimal mobile experience",
        "Integrated payment gateway for donation processing",
        "Created content management system for easy updates",
        "Ensured website accessibility and SEO optimization"
      ],
      achievements: [
        "Delivered project 2 weeks ahead of schedule",
        "Achieved 95+ Lighthouse performance score",
        "Increased donation conversions by 150% through improved UX",
        "Website serves 5000+ monthly visitors with 99% uptime"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Payment Gateway Integration"],
      skills: ["Frontend Development", "Web Design", "Payment Integration", "SEO Optimization"],
      links: [
        { name: "Live Website", url: "https://jpfoundation.org" }
      ]
    }
  ];

  const stats = [
    { label: "Total Experience", value: "3+ Years", icon: Calendar },
    { label: "Companies Worked", value: "3", icon: Users },
    { label: "Projects Delivered", value: "25+", icon: Target },
    { label: "Technologies Used", value: "15+", icon: Lightbulb }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Current": return "bg-green-500";
      case "Completed": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time": return "text-green-600 bg-green-50 dark:bg-green-900/20";
      case "Internship": return "text-blue-600 bg-blue-50 dark:bg-blue-900/20";
      case "Freelance": return "text-purple-600 bg-purple-50 dark:bg-purple-900/20";
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
            <h1 className="text-4xl font-bold tracking-tighter mb-4">Professional Experience</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              My journey as a software developer, from internships to leading full-stack projects. 
              Each role has contributed to my growth and expertise in modern web development.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
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

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={experience.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(experience.status)}`}></div>
                        <CardTitle className="text-xl">{experience.title}</CardTitle>
                        <Badge className={getTypeColor(experience.type)}>
                          {experience.type}
                        </Badge>
                      </div>
                      <div className="text-lg font-semibold text-primary">{experience.company}</div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                        <Badge variant="outline">{experience.duration}</Badge>
                      </div>
                    </div>
                    <Badge 
                      variant={experience.status === "Current" ? "default" : "secondary"}
                      className={experience.status === "Current" ? "bg-green-500" : ""}
                    >
                      {experience.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-base mt-4">
                    {experience.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Responsibilities */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Developed */}
                  <div>
                    <h4 className="font-semibold mb-3">Skills Developed</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  {experience.links && experience.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 pt-4 border-t">
                      {experience.links.map((link, linkIndex) => (
                        <Button key={linkIndex} variant="outline" size="sm" asChild>
                          <Link href={link.url} target="_blank">
                            <ExternalLink className="mr-2 h-3 w-3" />
                            {link.name}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Career Highlights */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Career Highlights</CardTitle>
              <CardDescription>
                Key milestones and learnings from my professional journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Technical Growth</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Mastered full-stack development from frontend to database design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Specialized in real-time applications using Socket.io and WebSockets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Developed expertise in modern React patterns and TypeScript</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Gained experience with multiple database systems (MongoDB, PostgreSQL)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Professional Skills</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Led cross-functional teams and mentored junior developers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Collaborated with designers and product managers on complex projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Delivered projects consistently ahead of schedule</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Improved performance and user experience across multiple applications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Interested in Working Together?</CardTitle>
                <CardDescription>
                  I'm always open to discussing new opportunities and exciting projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild>
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/projects">View My Projects</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/vishal_resume.pdf" target="_blank">
                      Download Resume
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