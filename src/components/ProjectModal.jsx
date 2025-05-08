import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import gsap from 'gsap';

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);
  const slidesRef = useRef(null);
  const currentSlide = useRef(0);
  const totalSlides = project?.gallery?.length || 0;
  
  // Close modal when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [onClose]);
  
  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  
  // GSAP animation for modal entry
  useEffect(() => {
    gsap.fromTo(
      modalRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
    );
    
    // Initialize slides
    if (slidesRef.current && slidesRef.current.children.length > 0) {
      gsap.set(slidesRef.current.children, { opacity: 0, x: '100%' });
      gsap.set(slidesRef.current.children[0], { opacity: 1, x: '0%' });
    }
  }, []);
  
  // Slide navigation functions
  const goToSlide = (index) => {
    if (!slidesRef.current || totalSlides <= 1) return;
    
    const currentElement = slidesRef.current.children[currentSlide.current];
    const nextElement = slidesRef.current.children[index];
    
    if (index > currentSlide.current) {
      // Move to next slide
      gsap.to(currentElement, { opacity: 0, x: '-100%', duration: 0.5 });
      gsap.fromTo(nextElement, 
        { opacity: 0, x: '100%' }, 
        { opacity: 1, x: '0%', duration: 0.5 }
      );
    } else {
      // Move to previous slide
      gsap.to(currentElement, { opacity: 0, x: '100%', duration: 0.5 });
      gsap.fromTo(nextElement, 
        { opacity: 0, x: '-100%' }, 
        { opacity: 1, x: '0%', duration: 0.5 }
      );
    }
    
    currentSlide.current = index;
  };
  
  const nextSlide = () => {
    if (currentSlide.current < totalSlides - 1) {
      goToSlide(currentSlide.current + 1);
    } else {
      goToSlide(0);
    }
  };
  
  const prevSlide = () => {
    if (currentSlide.current > 0) {
      goToSlide(currentSlide.current - 1);
    } else {
      goToSlide(totalSlides - 1);
    }
  };
  
  if (!project) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9998] bg-black bg-opacity-80 overflow-y-auto p-4">
      <motion.div 
        ref={modalRef}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 z-10 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Image gallery */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-100 dark:bg-gray-900 overflow-hidden">
          <div ref={slidesRef} className="w-full h-full relative">
            {project.gallery.map((image, index) => (
              <div 
                key={index}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img 
                  src={image} 
                  alt={`${project.title} screenshot ${index + 1}`} 
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          {totalSlides > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                aria-label="Previous image"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                aria-label="Next image"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </>
          )}
          
          {/* Slide indicators */}
          {totalSlides > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {project.gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentSlide.current === index 
                      ? 'bg-primary' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h2>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech_stack.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-xl font-semibold mb-2">Overview</h3>
            <p className="mb-6">{project.detailed_description}</p>
            
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="mb-6 list-disc pl-5 space-y-1">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            
            <h3 className="text-xl font-semibold mb-2">Challenges & Solutions</h3>
            <p className="mb-6">{project.challenges}</p>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a 
              href={project.demo_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a 
              href={project.github_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              View Code
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;