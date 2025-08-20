import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Mail, Phone, Github } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Personal Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-foreground/80">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <span className="font-medium">Date of Birth:</span>
                      <p className="text-muted-foreground">September 19, 2003</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 text-foreground/80">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <span className="font-medium">Address:</span>
                      <p className="text-muted-foreground">
                        Arcadia Grant Badowala<br />
                        Dehradun - 248007
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-foreground/80">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <span className="font-medium">Email:</span>
                      <p className="text-muted-foreground">adarshnaithani03@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-foreground/80">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <span className="font-medium">Phone:</span>
                      <p className="text-muted-foreground">+91 7248737011</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-foreground/80">
                    <Github className="w-5 h-5 text-primary" />
                    <div>
                      <span className="font-medium">GitHub:</span>
                      <a 
                        href="https://github.com/AdarshNaithani11" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-glow transition-colors duration-300"
                      >
                        AdarshNaithani11
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Professional Summary</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  I'm a passionate Full Stack Developer with expertise in modern web technologies. 
                  My journey combines technical excellence with creative design thinking, allowing me 
                  to build comprehensive digital solutions that are both functional and visually appealing.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Core Competencies</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Full Stack Web Development</li>
                      <li>• Creative Graphic Design</li>
                      <li>• Software Architecture & Development</li>
                      <li>• Modern Frontend Frameworks</li>
                      <li>• Backend API Development</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;