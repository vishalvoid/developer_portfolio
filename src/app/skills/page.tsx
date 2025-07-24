import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, MessageSquare, Users, Target, Lightbulb, Clock } from "lucide-react";

export default function SkillsPage() {
  const codingSkills = [
    {
      category: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 90, experience: "3+ years", projects: ["Dravin", "Portfolio", "JP Foundation"] },
        { name: "Next.js", level: 85, experience: "2+ years", projects: ["Portfolio v2", "Personal Projects"] },
        { name: "TypeScript", level: 80, experience: "2+ years", projects: ["Multiple Projects"] },
        { name: "JavaScript", level: 95, experience: "3+ years", projects: ["All Web Projects"] },
        { name: "HTML/CSS", level: 95, experience: "4+ years", projects: ["All Projects"] },
        { name: "Tailwind CSS", level: 90, experience: "2+ years", projects: ["Recent Projects"] },
      ]
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85, experience: "3+ years", projects: ["Dravin", "Chat Apps", "APIs"] },
        { name: "Express.js", level: 85, experience: "3+ years", projects: ["REST APIs", "Web Servers"] },
        { name: "MongoDB", level: 80, experience: "2+ years", projects: ["Dravin", "Multiple Projects"] },
        { name: "PostgreSQL", level: 75, experience: "1+ year", projects: ["Codemix Projects"] },
        { name: "Socket.io", level: 80, experience: "2+ years", projects: ["Real-time Apps"] },
      ]
    },
    {
      category: "Mobile Development",
      icon: "📱",
      skills: [
        { name: "Flutter", level: 70, experience: "1+ year", projects: ["Mobile Apps"] },
        { name: "Dart", level: 70, experience: "1+ year", projects: ["Flutter Apps"] },
        { name: "React Native", level: 60, experience: "Learning", projects: ["Personal Projects"] },
      ]
    },
    {
      category: "DevOps & Tools",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 90, experience: "3+ years", projects: ["All Projects"] },
        { name: "Docker", level: 65, experience: "Learning", projects: ["Containerization"] },
        { name: "AWS", level: 60, experience: "1+ year", projects: ["Cloud Deployments"] },
        { name: "Linux", level: 75, experience: "2+ years", projects: ["Server Management"] },
        { name: "VS Code", level: 95, experience: "4+ years", projects: ["Daily Development"] },
      ]
    }
  ];

  const softSkills = [
    {
      title: "Problem Solving",
      icon: Brain,
      level: 90,
      description: "Analytical thinking and systematic approach to complex challenges",
      examples: ["Debugging complex issues", "System architecture design", "Performance optimization"]
    },
    {
      title: "Communication",
      icon: MessageSquare,
      level: 85,
      description: "Clear technical communication with team members and stakeholders",
      examples: ["Technical documentation", "Code reviews", "Client presentations"]
    },
    {
      title: "Team Collaboration",
      icon: Users,
      level: 88,
      description: "Working effectively in diverse teams and mentoring junior developers",
      examples: ["Agile development", "Pair programming", "Knowledge sharing"]
    },
    {
      title: "Project Management",
      icon: Target,
      level: 75,
      description: "Planning, organizing, and delivering projects on time",
      examples: ["Timeline management", "Resource allocation", "Risk assessment"]
    },
    {
      title: "Continuous Learning",
      icon: Lightbulb,
      level: 95,
      description: "Staying updated with latest technologies and best practices",
      examples: ["Online courses", "Tech conferences", "Open source contributions"]
    },
    {
      title: "Time Management",
      icon: Clock,
      level: 80,
      description: "Efficiently managing multiple projects and deadlines",
      examples: ["Priority setting", "Task organization", "Deadline management"]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "text-green-500";
    if (level >= 75) return "text-blue-500";
    if (level >= 60) return "text-yellow-500";
    return "text-gray-500";
  };

  const getExpertiseLevel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <div className="container py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tighter mb-4">Skills & Expertise</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A comprehensive overview of my technical abilities and soft skills, 
              developed through years of hands-on experience and continuous learning.
            </p>
          </div>

          <Tabs defaultValue="coding" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
              <TabsTrigger value="coding">Coding Skills</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>

            <TabsContent value="coding" className="space-y-8">
              {codingSkills.map((category, categoryIndex) => (
                <Card key={categoryIndex}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-2xl">{category.icon}</span>
                      {category.category}
                    </CardTitle>
                    <CardDescription>
                      Technical skills and frameworks in this domain
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold">{skill.name}</h4>
                            <Badge 
                              variant="secondary" 
                              className={getSkillColor(skill.level)}
                            >
                              {getExpertiseLevel(skill.level)}
                            </Badge>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Proficiency</span>
                              <span>{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                          
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div>
                              <span className="font-medium">Experience:</span> {skill.experience}
                            </div>
                            <div>
                              <span className="font-medium">Used in:</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {skill.projects.map((project, projectIndex) => (
                                  <Badge key={projectIndex} variant="outline" className="text-xs">
                                    {project}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="soft" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {softSkills.map((skill, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <skill.icon className="h-5 w-5 text-primary" />
                        </div>
                        {skill.title}
                      </CardTitle>
                      <CardDescription>{skill.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Strength Level</span>
                          <span className={getSkillColor(skill.level)}>
                            {getExpertiseLevel(skill.level)}
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                      
                      <div>
                        <h5 className="font-medium mb-2">Examples:</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {skill.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Skills Summary */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Skills Summary</CardTitle>
              <CardDescription>
                Key strengths and areas of expertise
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Technologies Mastered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}