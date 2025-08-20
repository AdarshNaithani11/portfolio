import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "adarshnaithani03@gmail.com",
      href: "mailto:adarshnaithani03@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7248737011",
      href: "tel:+917248737011"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dehradun, India",
      href: "#"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "AdarshNaithani11",
      href: "https://github.com/AdarshNaithani11"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Ready to collaborate on your next project? Let's create something amazing together.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Card 
                  key={contact.label} 
                  className="bg-card/50 border-border/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <IconComponent className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-foreground">{contact.label}</h3>
                    {contact.href !== "#" ? (
                      <a 
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center justify-center gap-1"
                      >
                        {contact.value}
                        {contact.href.startsWith("http") && (
                          <ExternalLink className="w-3 h-3" />
                        )}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{contact.value}</span>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="mailto:adarshnaithani03@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Send Me an Email
              </a>
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Or connect with me on GitHub to see my latest work
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;