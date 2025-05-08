import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import portfolioData from '@/data/mydata';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const { experience, education, certifications } = portfolioData;

  useEffect(() => {
    // GSAP animations for enhanced UI/UX
    gsap.fromTo(
      '.timeline-item',
      { opacity: 0, x: -30 },
      { 
        opacity: 1, 
        x: 0, 
        stagger: 0.2, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: '#experience',
          start: 'top 70%',
        }
      }
    );

    // Animate the timeline circles
    gsap.fromTo(
      '.timeline-circle',
      { scale: 0 },
      { 
        scale: 1,
        stagger: 0.2, 
        duration: 0.5, 
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: '#experience',
          start: 'top 70%',
        }
      }
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 reveal relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Experience & Education</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            My professional journey and educational background
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <FaBriefcase className="text-primary mr-3" /> Work Experience
            </h3>
            
            <div className="space-y-10 relative">
              {/* Timeline line that connects all circles */}
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-primary opacity-70 transform -translate-x-1/2 h-full"></div>
              
              {experience.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="relative pl-10 pb-8 timeline-item"
                  variants={itemVariants}
                >
                  <div className="absolute left-0 top-0 w-6 h-6 bg-primary rounded-full timeline-circle transform -translate-x-1/2"></div>
                  
                  <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
                    <h4 className="text-xl font-semibold">{exp.role}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-1 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-4 italic">{exp.duration}</p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <FaGraduationCap className="text-primary mr-3" /> Education & Certifications
            </h3>
            
            <div className="space-y-10 relative">
              {/* Timeline line that connects all circles */}
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-primary opacity-70 transform -translate-x-1/2 h-full"></div>
              
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="relative pl-10 pb-8 timeline-item"
                  variants={itemVariants}
                >
                  <div className="absolute left-0 top-0 w-6 h-6 bg-primary rounded-full timeline-circle transform -translate-x-1/2"></div>
                  
                  <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-1 font-medium">{edu.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-4 italic">{edu.year}</p>
                  </div>
                </motion.div>
              ))}
              
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="relative pl-10 pb-8 timeline-item"
                  variants={itemVariants}
                >
                  <div className="absolute left-0 top-0 w-6 h-6 bg-primary rounded-full timeline-circle transform -translate-x-1/2"></div>
                  
                  <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
                    <h4 className="text-xl font-semibold">{cert.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-1 font-medium">{cert.issued_by}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-4 italic">{cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;