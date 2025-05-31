
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
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Development Objects/Decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Code className="absolute top-8 left-10 h-6 w-6 text-blue-400 animate-pulse" />
        <Terminal className="absolute top-16 right-20 h-8 w-8 text-blue-300 animate-pulse" style={{ animationDelay: '1s' }} />
        <Settings className="absolute bottom-12 left-1/4 h-5 w-5 text-blue-200 animate-spin" style={{ animationDuration: '8s' }} />
        <Code className="absolute bottom-8 right-10 h-7 w-7 text-blue-400 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Code className="h-8 w-8 text-blue-400" />
                <Terminal className="h-4 w-4 text-purple-400 absolute -bottom-1 -right-1" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Arthvatech
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Transforming businesses through innovative technology solutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>hello@arthvatech.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>123 Tech Street, Digital City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Stay Connected</h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Subscribe for tech insights and updates.
            </p>
            
            <div className="flex gap-2 mb-6">
              <input 
                type="email" 
                placeholder="Enter email"
                className="flex-1 px-4 py-2 text-sm bg-slate-800 border border-slate-600 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white px-4">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-slate-800 p-3 rounded-lg hover:bg-blue-600 transition-all duration-300 flex-shrink-0"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Arthvatech. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
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
