import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technicalSkills = [
    { name: "JavaScript", level: "Advanced", color: "bg-yellow-500/20 text-yellow-300" },
    { name: "PHP", level: "Intermediate", color: "bg-blue-500/20 text-blue-300" },
    { name: "Python", level: "Intermediate", color: "bg-green-500/20 text-green-300" },
    { name: "WordPress", level: "Advanced", color: "bg-purple-500/20 text-purple-300" },
  ];

  const expertise = [
    {
      title: "Web Development",
      description: "Creating modern, responsive web applications with cutting-edge technologies",
      icon: "🌐"
    },
    {
      title: "Graphic Design",
      description: "Designing visually compelling graphics and user interfaces",
      icon: "🎨"
    },
    {
      title: "Software Development",
      description: "Building robust software solutions and applications",
      icon: "💻"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {technicalSkills.map((skill, index) => (
                <Card 
                  key={skill.name} 
                  className="bg-card/30 border-border/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <h4 className="text-xl font-bold mb-2 text-foreground">{skill.name}</h4>
                    <Badge className={`${skill.color} border-0`}>
                      {skill.level}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Expertise Areas */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Areas of Expertise</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {expertise.map((area, index) => (
                <Card 
                  key={area.title} 
                  className="bg-card/30 border-border/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 hover:scale-105 text-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{area.icon}</div>
                    <h4 className="text-xl font-bold mb-4 text-primary">{area.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;