import React from 'react';
import { motion } from 'framer-motion';
import { TrophyIcon, CalendarIcon } from 'lucide-react';
import portfolioData from '@/data/mydata';

const Achievements = () => {
  const { achievements } = portfolioData;

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

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-[hsl(var(--dark-bg))]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
            >
              Achievements & Recognition
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Milestones and recognitions that have marked my professional journey.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-[hsl(var(--dark-card))] p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <TrophyIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{achievement.year}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                  {achievement.description}
                </p>
                
                <div className="mt-4">
                  <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))]"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* More Achievements Button */}
          {achievements.length > 6 && (
            <motion.div variants={itemVariants} className="text-center mt-8">
              <a 
                href="#"
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-primary text-primary font-medium transition-colors hover:bg-primary hover:text-white"
              >
                View More Achievements
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;