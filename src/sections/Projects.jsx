import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Info } from 'lucide-react';
import portfolioData from '@/data/mydata';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ProjectModal from '@/components/ProjectModal';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsRef = useRef(null);
  const titleRef = useRef(null);
  const filterRef = useRef(null);
  const projectCardsRef = useRef(null);
  
  // Get unique categories from projects
  const categories = ['All', ...new Set(projects.map(project => project.category || 'Other'))];
  
  // Initialize GSAP ScrollTrigger animations
  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reset"
        }
      }
    );
    
    // Filters animation
    gsap.fromTo(
      filterRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: filterRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reset"
        }
      }
    );
    
    // Project cards animation setup
    if (projectCardsRef.current) {
      // We'll trigger this manually when projects change
      ScrollTrigger.create({
        trigger: projectCardsRef.current,
        start: "top 80%",
        id: "projects-trigger",
        onEnter: () => animateProjectCards()
      });
    }
    
    return () => {
      // Clean up ScrollTrigger on component unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  // Function to animate project cards
  const animateProjectCards = () => {
    if (!projectCardsRef.current) return;
    
    gsap.fromTo(
      projectCardsRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  };
  
  // Filter projects based on selected category
  useEffect(() => {
    setAnimateCard({ y: 100, opacity: 0 });
    
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      
      if (activeFilter === 'All') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter(project => project.category === activeFilter));
      }
      
      // Re-trigger animations when projects change
      setTimeout(animateProjectCards, 100);
    }, 500);
  }, [activeFilter, projects]);
  
  // Open project modal
  const openProjectModal = (project) => {
    setSelectedProject(project);
    // Disable scroll when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  // Close project modal
  const closeProjectModal = () => {
    setSelectedProject(null);
    // Re-enable scroll when modal is closed
    document.body.style.overflow = '';
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
  
  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  const techBadgeVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  };
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-[hsl(var(--dark-bg))]" ref={projectsRef}>
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <div className="text-center space-y-4" ref={titleRef}>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              My Recent Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my latest projects showcasing my skills and experience.
            </p>
          </div>
          
          {/* Project Filter */}
          <div ref={filterRef} className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div 
            ref={projectCardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[hsl(var(--dark-card))] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative overflow-hidden group h-48 image-container">
                  <img
                    src={project.image || "/assets/images/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "/assets/images/placeholder.svg";
                      e.target.parentNode.classList.remove("loading");
                    }}
                    onLoad={(e) => {
                      e.target.parentNode.classList.remove("loading");
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-between items-center">
                      <a
                        href={project.demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                        aria-label="View live demo"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                      
                      {/* Project details button */}
                      <button
                        onClick={() => openProjectModal(project)}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                        aria-label="View project details"
                      >
                        <Info size={16} />
                      </button>
                      
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                        aria-label="View code on GitHub"
                      >
                        <FaGithub size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
                    
                    {/* More details button outside hover state for accessibility */}
                    <button
                      onClick={() => openProjectModal(project)}
                      className="text-primary hover:text-primary/80 transition-colors"
                      aria-label="View more details"
                    >
                      <Info size={18} />
                    </button>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech_stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View More Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/balajiC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-white rounded-lg font-medium transition-transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <FaGithub className="mr-2" size={20} />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
      
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={closeProjectModal} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;