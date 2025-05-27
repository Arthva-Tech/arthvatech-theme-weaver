
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Code, Zap, Globe, Database, Cpu, Monitor } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      {/* 3D Development Objects */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 transform rotate-45 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-lg transform rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-500/20 transform rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-60 left-1/3 w-8 h-8 bg-green-500/20 rounded-sm transform rotate-12 animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-60 right-1/4 w-14 h-14 bg-yellow-500/20 transform -rotate-12 animate-float" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute top-32 left-1/2 w-6 h-6 bg-red-500/20 rounded-lg animate-float" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-in-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Innovating
              <span className="gradient-text"> Digital </span>
              Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              We transform ideas into powerful digital experiences. From cutting-edge web development to AI-powered solutions, we're your technology partner for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>

            {/* Additional Tech Stack Section */}
            <div className="mt-12 lg:mt-16">
              <p className="text-sm text-muted-foreground mb-4">Trusted by leading companies</p>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center opacity-60">
                <div className="text-2xl font-bold">React</div>
                <div className="text-2xl font-bold">Node.js</div>
                <div className="text-2xl font-bold">AWS</div>
                <div className="text-2xl font-bold">Python</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative z-10 bg-card rounded-3xl p-8 shadow-2xl border">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary/10 rounded-xl p-6 text-center">
                  <Code className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Development</h3>
                  <p className="text-sm text-muted-foreground">Custom solutions</p>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-6 text-center">
                  <Zap className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Performance</h3>
                  <p className="text-sm text-muted-foreground">Lightning fast</p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-6 text-center">
                  <Globe className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Global Reach</h3>
                  <p className="text-sm text-muted-foreground">Worldwide impact</p>
                </div>
                <div className="bg-green-500/10 rounded-xl p-6 text-center">
                  <Database className="h-8 w-8 text-green-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Data Solutions</h3>
                  <p className="text-sm text-muted-foreground">Smart insights</p>
                </div>
              </div>

              {/* Additional feature cards */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="bg-orange-500/10 rounded-xl p-6 text-center">
                  <Cpu className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">AI/ML</h3>
                  <p className="text-sm text-muted-foreground">Intelligent systems</p>
                </div>
                <div className="bg-cyan-500/10 rounded-xl p-6 text-center">
                  <Monitor className="h-8 w-8 text-cyan-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">UI/UX</h3>
                  <p className="text-sm text-muted-foreground">Beautiful design</p>
                </div>
              </div>
            </div>
            
            {/* Decorative 3D elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-purple-500 transform rotate-45 opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500 to-primary rounded-lg transform -rotate-12 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-r from-green-500 to-yellow-500 transform rotate-12 opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Additional Bottom Section */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">Quick turnaround without compromising quality</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold mb-2">Secure Solutions</h3>
              <p className="text-sm text-muted-foreground">Enterprise-grade security in every project</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-lg font-semibold mb-2">Scalable Growth</h3>
              <p className="text-sm text-muted-foreground">Built to grow with your business needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
