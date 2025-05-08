import { useRef, useEffect } from 'react';
import myData from '@/data/mydata';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';

const Skills = () => {
  const { skills } = myData;
  const sectionRef = useRef<HTMLElement>(null);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // GSAP animations for skill labels
  useEffect(() => {
    if (!isInView || !titleRef.current) return;
    
    gsap.from(titleRef.current, {
      opacity: 0, 
      y: -30,
      duration: 0.8,
      ease: "power3.out"
    });
    
    return () => {
      gsap.killTweensOf(titleRef.current);
    };
  }, [isInView]);
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundColor = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    ["hsl(var(--light-bg))", "hsl(var(--light-bg))", "hsl(var(--background))"]
  );
  
  // Get icon or abbreviation for a skill
  const getSkillIcon = (skillName: string) => {
    const shortName = skillName.substring(0, 2).toUpperCase();
    return shortName;
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };
  
  const skillItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <motion.section 
      id="skills" 
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            ref={titleRef}
            className="text-3xl md:text-5xl font-bold font-poppins mb-4 gradient-text"
          >
            Technical Skills
          </h2>
          
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : { width: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
          
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I specialize in these technologies to create efficient and scalable applications
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* First column of skills */}
          <div className="space-y-8">
            {skills.slice(0, 6).map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-item group hover-lift"
                variants={skillItemVariants}
                custom={index}
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] flex items-center justify-center text-white font-bold mr-3 shadow-lg">
                    {getSkillIcon(skill.name)}
                  </div>
                  <div className="flex justify-between w-full items-center">
                    <span className="font-medium text-lg">{skill.name}</span>
                    <span className="text-[hsl(var(--accent))] font-semibold">{skill.level}</span>
                  </div>
                </div>
                
                <div className="h-3 w-full bg-gray-200/50 dark:bg-gray-700/30 rounded-full overflow-hidden shadow-inner relative">
                  <div className="absolute inset-0 w-full h-full bg-gray-200/20 dark:bg-gray-700/20 rounded-full overflow-hidden" />
                  
                  <motion.div 
                    ref={el => progressRefs.current[index] = el}
                    className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] relative group-hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] transition-shadow duration-300"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: skill.level } : { width: 0 }}
                    transition={{ 
                      duration: 1.8, 
                      ease: "easeOut", 
                      delay: 0.2 + index * 0.1
                    }}
                  >
                    <motion.div 
                      className="absolute top-0 right-0 h-full w-2 bg-white/20"
                      animate={{
                        x: [0, 20, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        delay: 2 + index * 0.1,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Second column of skills */}
          <div className="space-y-8">
            {skills.slice(6).map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-item group hover-lift"
                variants={skillItemVariants}
                custom={index + 6}
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] flex items-center justify-center text-white font-bold mr-3 shadow-lg">
                    {getSkillIcon(skill.name)}
                  </div>
                  <div className="flex justify-between w-full items-center">
                    <span className="font-medium text-lg">{skill.name}</span>
                    <span className="text-[hsl(var(--accent))] font-semibold">{skill.level}</span>
                  </div>
                </div>
                
                <div className="h-3 w-full bg-gray-200/50 dark:bg-gray-700/30 rounded-full overflow-hidden shadow-inner relative">
                  <div className="absolute inset-0 w-full h-full bg-gray-200/20 dark:bg-gray-700/20 rounded-full overflow-hidden" />
                  
                  <motion.div 
                    ref={el => progressRefs.current[index + 6] = el}
                    className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] relative group-hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] transition-shadow duration-300"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: skill.level } : { width: 0 }}
                    transition={{ 
                      duration: 1.8, 
                      ease: "easeOut",
                      delay: 0.2 + (index + 6) * 0.1
                    }}
                  >
                    <motion.div 
                      className="absolute top-0 right-0 h-full w-2 bg-white/20"
                      animate={{
                        x: [0, 20, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        delay: 2 + (index + 6) * 0.1,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Floating skill bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] opacity-10 flex items-center justify-center text-white font-bold"
              style={{
                width: `${30 + Math.random() * 20}px`,
                height: `${30 + Math.random() * 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
