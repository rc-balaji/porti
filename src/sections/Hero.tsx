import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, AnimatePresence, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import portfolioData from '@/data/portfolio-data';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin);
}

const Hero = () => {
  const { personal_info } = portfolioData;
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y = useMotionValue(0);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);
  const titleY = useTransform(scrollYProgress, [0, 0.4], [0, -100]);
  
  useEffect(() => {
    if (!textRef.current) return;
    
    // Typing animation with GSAP
    const tl = gsap.timeline({
      delay: 1.2,
      repeat: -1,
      repeatDelay: 5
    });
    
    const phrases = [
      "Building Scalable Applications",
      "Creating Responsive Web Interfaces",
      "Developing Modern Software Solutions",
      "Crafting Code with Precision"
    ];
    
    phrases.forEach((phrase, i) => {
      // Type phrase
      tl.to(textRef.current, {
        duration: 1.5,
        text: phrase,
        ease: "none"
      });
      
      // Pause at end of phrase
      tl.to({}, { duration: 1.5 });
      
      // Delete phrase (unless it's the last one and we're going to loop)
      if (i < phrases.length - 1 || phrases.length === 1) {
        tl.to(textRef.current, {
          duration: 1,
          text: "",
          ease: "none"
        });
      }
    });
    
    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    // Floating animation for the profile image
    const element = imageRef.current;
    if (!element) return;
    
    gsap.set(element, { 
      y: 0,
      rotateZ: 0
    });
    
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true
    });
    
    tl.to(element, {
      y: -15,
      rotateZ: 2,
      duration: 2,
      ease: "power1.inOut"
    }).to(element, {
      y: 0,
      rotateZ: 0,
      duration: 2,
      ease: "power1.inOut"
    });
    
    return () => {
      tl.kill();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };
  
  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const socialIconVariants = {
    hidden: { scale: 0 },
    visible: (i: number) => ({
      scale: 1,
      transition: {
        delay: 1 + (i * 0.2),
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    })
  };
  
  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)"
    },
    tap: { scale: 0.95 }
  };

  // Background shapes animation
  const shapes = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {shapes.map((i) => (
          <motion.div
            key={i}
            className={`absolute bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] rounded-full mix-blend-multiply opacity-[0.03] dark:opacity-[0.04]`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 space-y-6 text-center md:text-left mb-12 md:mb-0"
            style={{ y: titleY, opacity }}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p 
              className="text-primary font-medium tracking-wide"
              variants={childVariants}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins tracking-tight gradient-text"
              variants={childVariants}
            >
              {personal_info.name}
            </motion.h1>
            
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] mx-auto md:mx-0"
              initial={{ width: 0 }}
              animate={isInView ? { width: "6rem" } : { width: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
            
            <motion.h2 
              className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300"
              variants={childVariants}
            >
              {personal_info.title}
            </motion.h2>
            
            <motion.div 
              className="text-lg md:text-xl text-primary font-medium max-w-lg h-8"
              variants={childVariants}
            >
              <div ref={textRef}></div>
            </motion.div>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400 max-w-lg"
              variants={childVariants}
            >
              {personal_info.bio}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap space-x-4 justify-center md:justify-start"
              variants={childVariants}
            >
              <motion.button 
                onClick={() => scrollToSection('#projects')}
                className="px-6 py-3 mb-4 md:mb-0 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-white rounded-md font-medium transition-all"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                View My Work
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-3 border-2 border-primary text-primary dark:text-primary rounded-md hover:bg-primary hover:text-white transition-colors font-medium"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Contact Me
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="flex space-x-6 mt-6 justify-center md:justify-start"
              variants={childVariants}
            >
              {[
                { icon: <FaGithub />, href: personal_info.social_links.github, label: "GitHub" },
                { icon: <FaLinkedin />, href: personal_info.social_links.linkedin, label: "LinkedIn" },
                { icon: <FaFacebook />, href: personal_info.social_links.facebook, label: "Facebook" },
                { icon: <FaInstagram />, href: personal_info.social_links.instagram, label: "Instagram" }
              ].map((social, index) => (
                <motion.a 
                  key={social.label}
                  custom={index}
                  variants={socialIconVariants}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-2xl transition-colors transform hover:scale-125 transition-transform duration-300"
                  aria-label={social.label}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            style={{ scale }}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              ref={imageRef}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 shadow-2xl overflow-hidden"
              variants={childVariants}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] animate-spin-slow"></div>
              <div className="absolute inset-[3px] rounded-full overflow-hidden bg-white dark:bg-[hsl(var(--dark-bg))]">
                <img 
                  src={personal_info.profile_picture} 
                  alt={`${personal_info.name} - ${personal_info.title}`} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Floating particles */}
              <AnimatePresence>
                {isInView && Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-2 w-2 rounded-full bg-primary"
                    initial={{
                      scale: 0,
                      x: Math.random() * 100 - 50,
                      y: Math.random() * 100 - 50,
                      opacity: 0
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      x: [`${Math.random() * 60 - 30}%`, `${Math.random() * 100 - 50}%`],
                      y: [`${Math.random() * 60 - 30}%`, `${Math.random() * 100 - 50}%`],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: Math.random() * 2 + 1,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm">Scroll Down</p>
        <motion.div 
          className="w-6 h-10 border-2 border-gray-500 dark:border-gray-400 rounded-full flex justify-center"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
