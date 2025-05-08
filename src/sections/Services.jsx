import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Sparkles, Zap, Database, Globe, Layout } from 'lucide-react';
import portfolioData from '@/data/mydata';

const Services = () => {
  const { services } = portfolioData;
  
  // Map icon names to components
  const getIconComponent = (iconName) => {
    const iconProps = { className: "w-10 h-10 mb-4 text-primary", strokeWidth: 1.5 };
    
    switch(iconName.toLowerCase()) {
      case 'code':
        return <Code {...iconProps} />;
      case 'server':
        return <Server {...iconProps} />;
      case 'api':
        return <Database {...iconProps} />;
      case 'layout':
        return <Layout {...iconProps} />;
      case 'globe':
        return <Globe {...iconProps} />;
      case 'sparkles':
        return <Sparkles {...iconProps} />;
      default:
        return <Zap {...iconProps} />;
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };
  
  return (
    <section id="services" className="py-20 bg-white dark:bg-[hsl(var(--dark-bg))]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Services I Offer</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I provide a range of services to help businesses and individuals establish a strong digital presence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-gray-50 dark:bg-[hsl(var(--dark-card))] p-8 rounded-xl transition-all border border-gray-100 dark:border-gray-800"
              >
                <div className="mb-6">
                  {getIconComponent(service.icon)}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{service.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Additional Services Feature */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 bg-gradient-to-br from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Solution?</h3>
                <p className="mb-6 opacity-90">
                  I can build custom solutions tailored to your specific business needs. Let's discuss your project and turn your ideas into reality.
                </p>
                <a 
                  href="#contact" 
                  className="inline-block py-3 px-6 bg-white text-primary rounded-lg font-medium transition-transform hover:scale-105"
                >
                  Get in Touch
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 h-full">
                <ul className="space-y-4 text-white">
                  <li className="flex items-start">
                    <span className="mr-3 bg-white/20 p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Custom Web Application Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 bg-white/20 p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>E-commerce Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 bg-white/20 p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>API Integration Services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 bg-white/20 p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Web Performance Optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;