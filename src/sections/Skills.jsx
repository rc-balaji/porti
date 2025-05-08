import React, { useEffect, useRef } from 'react';
import portfolioData from '@/data/mydata';
import { motion, useInView, useAnimation } from 'framer-motion';
import gsap from 'gsap';

const Skills = () => {
  const { skills } = portfolioData;
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  // Group skills by level
  const skillsByLevel = {
    Expert: skills.filter(skill => skill.level === 'Expert'),
    Advanced: skills.filter(skill => skill.level === 'Advanced'),
    Intermediate: skills.filter(skill => skill.level === 'Intermediate')
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      
      // GSAP animations for skill bars
      const skillBars = document.querySelectorAll('.skill-bar-fill');
      gsap.fromTo(
        skillBars, 
        { width: 0 }, 
        { 
          width: 'var(--bar-width)', 
          duration: 1.5, 
          stagger: 0.1,
          ease: 'power2.out' 
        }
      );
    }
  }, [isInView, controls]);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  };

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  };

  // Get width percentage based on skill level
  const getSkillLevelWidth = (level) => {
    switch (level) {
      case 'Expert':
        return '90%';
      case 'Advanced':
        return '75%';
      case 'Intermediate':
        return '60%';
      default:
        return '40%';
    }
  };

  // Get color based on skill level
  const getSkillLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'from-blue-500 to-indigo-600';
      case 'Advanced':
        return 'from-indigo-500 to-purple-600';
      case 'Intermediate':
        return 'from-purple-500 to-pink-600';
      default:
        return 'from-pink-500 to-red-600';
    }
  };

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-[hsl(var(--dark-bg))]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="space-y-10"
        >
          <motion.div variants={titleVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are the technologies and tools I've mastered throughout my development journey.
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skillsByLevel).map(([level, levelSkills]) => (
              <motion.div
                key={level}
                variants={skillCardVariants}
                className="card p-6 hover:shadow-lg transition-shadow dark:bg-[hsl(var(--dark-card))]"
              >
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <span className={`inline-block w-3 h-3 mr-2 rounded-full bg-gradient-to-r ${getSkillLevelColor(level)}`}></span>
                  {level} Level
                </h3>
                <div className="space-y-5">
                  {levelSkills.map((skill, index) => (
                    <div key={index} className="space-y-2 skill-item">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`skill-bar-fill h-full rounded-full bg-gradient-to-r ${getSkillLevelColor(skill.level)}`} 
                          style={{ '--bar-width': getSkillLevelWidth(skill.level) }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Professional Skills Showcase */}
          <motion.div variants={skillCardVariants} className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Professional Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { name: 'Problem Solving', level: 90 },
                { name: 'Team Collaboration', level: 95 },
                { name: 'Communication', level: 85 },
                { name: 'Project Management', level: 80 },
                { name: 'Adaptability', level: 90 },
                { name: 'Attention to Detail', level: 85 },
                { name: 'Time Management', level: 80 },
                { name: 'Customer Focus', level: 90 }
              ].map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-[hsl(var(--dark-card))] rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center professional-skill-item"
                >
                  <div className="relative h-24 w-24 mx-auto mb-2">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle 
                        className="text-gray-200 dark:text-gray-700 stroke-current" 
                        strokeWidth="10" 
                        cx="50" 
                        cy="50" 
                        r="40" 
                        fill="transparent" 
                      />
                      <circle 
                        className="text-primary stroke-current" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        cx="50" 
                        cy="50" 
                        r="40" 
                        fill="transparent" 
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.level / 100)}`}
                        transform="rotate(-90 50 50)" 
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold">{skill.level}%</span>
                    </div>
                  </div>
                  <p className="font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;