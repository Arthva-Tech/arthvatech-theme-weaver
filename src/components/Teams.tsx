
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Twitter, Mail, Code, Database, Palette, Shield } from 'lucide-react';

const Teams = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Lead Developer",
      description: "Full-stack expert with 8+ years in modern web technologies",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      icon: Code,
      social: {
        github: "#",
        linkedin: "#",
        email: "alex@arthvatech.com"
      }
    },
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      description: "Creative designer passionate about user-centered design",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b2ab?w=300&h=300&fit=crop&crop=face",
      skills: ["Figma", "Adobe XD", "Design Systems", "Prototyping"],
      icon: Palette,
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@arthvatech.com"
      }
    },
    {
      name: "Mike Rodriguez",
      role: "DevOps Engineer",
      description: "Infrastructure specialist ensuring scalable and secure deployments",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      skills: ["Docker", "Kubernetes", "CI/CD", "Monitoring"],
      icon: Shield,
      social: {
        github: "#",
        linkedin: "#",
        email: "mike@arthvatech.com"
      }
    },
    {
      name: "Emily Davis",
      role: "Data Scientist",
      description: "AI/ML expert transforming data into actionable insights",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      skills: ["Python", "TensorFlow", "Analytics", "Machine Learning"],
      icon: Database,
      social: {
        github: "#",
        linkedin: "#",
        email: "emily@arthvatech.com"
      }
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-5"></div>
      
      {/* 3D Development Objects */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-primary/20 transform rotate-45 animate-float"></div>
      <div className="absolute top-20 right-20 w-12 h-12 bg-blue-500/20 rounded-lg animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-purple-500/20 transform rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-10 right-10 w-14 h-14 bg-green-500/20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Meet Our
            <span className="gradient-text"> Expert Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of passionate professionals brings together years of experience 
            in cutting-edge technologies to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={member.name} className="group hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="text-center">
                <div className="relative mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-primary/20"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <member.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill) => (
                    <span key={skill} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center space-x-3">
                  {member.social.github && (
                    <a href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  <a href={`mailto:${member.social.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center animate-fade-in">
          <div className="bg-card rounded-xl p-6 border">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Team Members</div>
          </div>
          <div className="bg-card rounded-xl p-6 border">
            <div className="text-3xl font-bold text-primary mb-2">8</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="bg-card rounded-xl p-6 border">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Technologies</div>
          </div>
          <div className="bg-card rounded-xl p-6 border">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Dedication</div>
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-card rounded-2xl p-8 border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals who are passionate about technology and innovation.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View Open Positions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
