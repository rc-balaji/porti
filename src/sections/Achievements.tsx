import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';
import portfolioData from '@/data/portfolio-data';

const getAchievementIcon = (index: number) => {
  const icons = [
    <FaTrophy key="trophy" className="text-2xl" />,
    <FaMedal key="medal" className="text-2xl" />,
    <FaAward key="award" className="text-2xl" />
  ];
  return icons[index % icons.length];
};

const Achievements = () => {
  const { achievements, awards } = portfolioData;
  const allAchievements = [...achievements, ...awards];

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
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="achievements" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Achievements</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto"></div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {allAchievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
            >
              <div className="inline-block p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary mb-4">
                {getAchievementIcon(index)}
              </div>
              <h3 className="text-xl font-semibold mb-2">{achievement.title || achievement.name}</h3>
              <p className="text-gray-500 dark:text-gray-500 mb-3">{achievement.year}</p>
              <p className="text-gray-600 dark:text-gray-400">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
