import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import portfolioData from '@/data/mydata';

const Testimonials = () => {
  const { testimonials } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);
  
  // Auto slide testimonials
  useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearTimeout(timerRef.current);
  }, [activeIndex, testimonials.length]);
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    clearTimeout(timerRef.current);
  };
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    clearTimeout(timerRef.current);
  };
  
  const handleDotClick = (index) => {
    setActiveIndex(index);
    clearTimeout(timerRef.current);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  };
  
  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
    },
    exit: { 
      opacity: 0, 
      x: -100,
      transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  };
  
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-[hsl(var(--dark-bg))]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
            >
              Client Testimonials
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              What people say about my work and collaboration experience.
            </motion.p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div className="relative min-h-[300px] md:min-h-[280px]">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className={`absolute inset-0 ${
                      index === activeIndex ? 'block' : 'hidden'
                    }`}
                    initial="hidden"
                    animate={index === activeIndex ? "visible" : "hidden"}
                    variants={slideVariants}
                  >
                    <div className="bg-white dark:bg-[hsl(var(--dark-card))] rounded-xl p-8 shadow-md">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="md:w-1/4 flex justify-center">
                          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 image-container loading">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src = "/assets/images/placeholder.svg";
                                e.target.parentNode.classList.remove("loading");
                              }}
                              onLoad={(e) => {
                                e.target.parentNode.classList.remove("loading");
                              }}
                            />
                          </div>
                        </div>
                        
                        <div className="md:w-3/4 relative">
                          <Quote className="absolute -top-2 -left-3 h-10 w-10 text-primary opacity-20" />
                          <blockquote className="text-gray-600 dark:text-gray-300 italic pl-4 md:pl-0 relative">
                            "{testimonial.quote}"
                          </blockquote>
                          
                          <div className="mt-4 pl-4 md:pl-0">
                            <h4 className="font-bold text-gray-900 dark:text-gray-100">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Navigation arrows */}
              <div className="flex justify-between">
                <button
                  onClick={handlePrev}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white dark:bg-gray-800 p-2 md:p-3 rounded-full shadow-md text-primary border border-gray-200 dark:border-gray-700 z-10"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <button
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white dark:bg-gray-800 p-2 md:p-3 rounded-full shadow-md text-primary border border-gray-200 dark:border-gray-700 z-10"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-3 w-3 rounded-full focus:outline-none transition-colors duration-300 ${
                    index === activeIndex
                      ? 'bg-primary'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary/50 dark:hover:bg-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
          
          {/* Call to action */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center bg-gradient-to-r from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] text-white p-8 md:p-10 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
            <p className="mb-6 max-w-2xl mx-auto opacity-90">
              I'm currently available for freelance projects, consultations, or full-time opportunities.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-white text-primary font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Get In Touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;