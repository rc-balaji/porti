import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import portfolioData from '@/data/portfolio-data';

const Experience = () => {
  const { experience, education, certifications } = portfolioData;

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
    <section id="experience" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Experience & Education</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            My professional journey and educational background
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <FaBriefcase className="text-primary mr-3" /> Work Experience
            </h3>
            
            <div className="space-y-10">
              {experience.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="relative pl-8 pb-8 border-l-2 border-primary"
                  variants={itemVariants}
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full"></div>
                  <div className="bg-white dark:bg-dark-card p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-semibold">{exp.role}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{exp.duration}</p>
                    <p className="text-gray-600 dark:text-gray-400">
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
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <FaGraduationCap className="text-primary mr-3" /> Education & Certifications
            </h3>
            
            <div className="space-y-10">
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="relative pl-8 pb-8 border-l-2 border-primary"
                  variants={itemVariants}
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full"></div>
                  <div className="bg-white dark:bg-dark-card p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">{edu.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{edu.year}</p>
                  </div>
                </motion.div>
              ))}
              
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="relative pl-8 pb-8 border-l-2 border-primary"
                  variants={itemVariants}
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full"></div>
                  <div className="bg-white dark:bg-dark-card p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-semibold">{cert.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">{cert.issued_by}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{cert.year}</p>
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
