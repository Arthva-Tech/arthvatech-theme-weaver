
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience in cutting-edge technologies.',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'We deliver excellence in every project with rigorous testing and optimization.',
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Focused on achieving your business objectives through technology solutions.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies to provide you with the best solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Arthvatech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a leading IT company specializing in innovative digital solutions. Our mission is to 
            empower businesses through cutting-edge technology and exceptional service delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <p className="text-muted-foreground mb-6">
              Founded with a vision to transform the digital landscape, Arthvatech has been at the 
              forefront of technological innovation. We combine creativity with technical expertise 
              to deliver solutions that drive business growth.
            </p>
            <p className="text-muted-foreground">
              Our team of passionate developers, designers, and strategists work collaboratively 
              to bring your ideas to life, ensuring every project exceeds expectations and 
              delivers measurable results.
            </p>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
