
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Code,
  Terminal,
  Settings
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'Cloud Solutions',
    'Cybersecurity',
    'Data Analytics',
    'UI/UX Design',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-muted/30 border-t relative overflow-hidden">
      {/* Development Objects/Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-8 left-10 h-6 w-6 text-primary/20 animate-float" />
        <Terminal className="absolute top-16 right-20 h-8 w-8 text-primary/15 animate-pulse" />
        <Settings className="absolute bottom-12 left-1/4 h-5 w-5 text-primary/10 animate-spin [animation-duration:8s]" />
        <Code className="absolute bottom-8 right-10 h-7 w-7 text-primary/20 animate-float [animation-delay:1s]" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Main Footer Content - Horizontal Layout */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Code className="h-6 w-6 text-primary" />
                <Terminal className="h-3 w-3 text-secondary absolute -bottom-1 -right-1" />
              </div>
              <div className="text-xl font-bold gradient-text">
                Arthvatech
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Transforming businesses through innovative technology solutions.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-3 w-3 text-primary" />
                <span>hello@arthvatech.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-3 w-3 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-3 w-3 text-primary" />
                <span>123 Tech Street, Digital City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe for tech insights and updates.
            </p>
            
            <div className="flex gap-2 mb-4">
              <input 
                type="email" 
                placeholder="Enter email"
                className="flex-1 px-3 py-2 text-sm border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button size="sm">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-muted p-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Horizontal */}
        <div className="border-t pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Arthvatech. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
