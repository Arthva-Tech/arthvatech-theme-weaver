
// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { 
//   Code, 
//   Smartphone, 
//   Cloud, 
//   Shield, 
//   Database, 
//   Palette,
//   ArrowRight,
//   CheckCircle
// } from 'lucide-react';

// const Services = () => {
//   const services = [
//     {
//       icon: Code,
//       title: 'Web Development',
//       description: 'Custom web applications built with modern technologies and frameworks.',
//       features: ['React & Next.js', 'Node.js Backend', 'Responsive Design', 'SEO Optimized'],
//       color: 'bg-blue-500/10 text-blue-500',
//     },
//     {
//       icon: Smartphone,
//       title: 'Mobile Development',
//       description: 'Native and cross-platform mobile apps for iOS and Android.',
//       features: ['React Native', 'Flutter', 'iOS Development', 'Android Development'],
//       color: 'bg-green-500/10 text-green-500',
//     },
//     {
//       icon: Cloud,
//       title: 'Cloud Solutions',
//       description: 'Scalable cloud infrastructure and deployment solutions.',
//       features: ['AWS & Azure', 'DevOps', 'Microservices', 'Auto Scaling'],
//       color: 'bg-purple-500/10 text-purple-500',
//     },
//     {
//       icon: Shield,
//       title: 'Cybersecurity',
//       description: 'Comprehensive security solutions to protect your digital assets.',
//       features: ['Security Audits', 'Penetration Testing', 'Data Protection', '24/7 Monitoring'],
//       color: 'bg-red-500/10 text-red-500',
//     },
//     {
//       icon: Database,
//       title: 'Data Analytics',
//       description: 'Transform your data into actionable insights and intelligence.',
//       features: ['Big Data', 'Machine Learning', 'Data Visualization', 'Predictive Analytics'],
//       color: 'bg-yellow-500/10 text-yellow-500',
//     },
//     {
//       icon: Palette,
//       title: 'UI/UX Design',
//       description: 'Beautiful and intuitive designs that enhance user experience.',
//       features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
//       color: 'bg-pink-500/10 text-pink-500',
//     },
//   ];

//   return (
//     <section id="services" className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//             Our <span className="gradient-text">Services</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             We offer comprehensive IT solutions tailored to meet your business needs. 
//             From development to deployment, we've got you covered.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <Card 
//               key={index} 
//               className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-scale-in"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <CardHeader>
//                 <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
//                   <service.icon className="h-8 w-8" />
//                 </div>
//                 <CardTitle className="text-xl group-hover:text-primary transition-colors">
//                   {service.title}
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground mb-6">{service.description}</p>
                
//                 <ul className="space-y-2 mb-6">
//                   {service.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center text-sm">
//                       <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* <Button variant="outline" className="w-full group">
//                   Learn More
//                   <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </Button> */}
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Code,
  Smartphone,
  Cloud,
  Shield,
  Database,
  Palette,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const iconMap = {
  Code: Code,
  Smartphone: Smartphone,
  Cloud: Cloud,
  Shield: Shield,
  Database: Database,
  Palette: Palette,
};

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://localhost:7001/api/services/list')
      .then(res => {
        setServices(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching services:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive IT solutions tailored to meet your business needs. 
            From development to deployment, we've got you covered.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-muted-foreground text-lg">Loading services...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Code;

              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;

