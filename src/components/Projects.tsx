import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Drippify",
      description: "Full-stack web application built with Wordpress, featuring user authentication, product management, and payment integration.",
      technologies: ["Wordpress"],
      githubUrl: "https://github.com/AdarshNaithani11",
      liveUrl: "https://www.drippify.in/"
    },
    {
      title: "Weeding Farm Website",
      description: "Responsive website showcasing web development skills with modern design principles and smooth animations.",
      technologies: ["JavaScript", "HTML", "CSS", "PHP"],
      githubUrl: "https://github.com/AdarshNaithani11",
      liveUrl: "https://taniyafarm.in/"
    },
    {
      title: "Website for IT-FEST",
      description: "Full Stack Responsive website showcasing Celebration of Tech, Talent & Innovation",
      technologies: ["JavaScript", "HTML", "CSS", "PHP"],
      githubUrl: "https://github.com/AdarshNaithani11",
      liveUrl: "https://uscsitutsav.in/"
    }
    ,
    {
      title: "Chatbot/ Automation via Python",
      description: "Python chatbot  AI-powered, built using the Python programming language that simulates human conversation.",
      technologies: ["Python"],
      githubUrl: "https://github.com/AdarshNaithani11",
      liveUrl: "https://uscsitutsav.in/"
    }
  ];

  return (
    <section id="projects"
     className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in web development, 
            software development, and graphic design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    
                    <Button
                      size="sm"
                      className="flex items-center gap-2"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;