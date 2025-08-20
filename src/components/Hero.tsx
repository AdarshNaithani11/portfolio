import { Button } from "@/components/ui/button";
import { Github, Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-glow">
              Adarsh Naithani
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Full Stack Developer & Creative Technologist
            </p>
            <p className="text-lg text-muted-foreground/80">
              Crafting digital experiences through code and design
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              variant="default" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href="#projects">View Work</a>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Dehradun, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>adarshnaithani03@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 7248737011</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;