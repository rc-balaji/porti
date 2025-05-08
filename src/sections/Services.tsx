import { motion } from 'framer-motion';
import { FaLaptopCode, FaPaintBrush, FaServer, FaHandshake } from 'react-icons/fa';
import portfolioData from '@/data/portfolio-data';

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'laptop-code':
      return <FaLaptopCode className="text-2xl" />;
    case 'paint-brush':
      return <FaPaintBrush className="text-2xl" />;
    case 'server':
      return <FaServer className="text-2xl" />;
    case 'handshake':
      return <FaHandshake className="text-2xl" />;
    default:
      return <FaLaptopCode className="text-2xl" />;
  }
};

const Services = () => {
  const { services } = portfolioData;

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
    <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">My Services</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Specialized services I offer to bring your ideas to life
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 group"
              variants={itemVariants}
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {getIconComponent(service.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
