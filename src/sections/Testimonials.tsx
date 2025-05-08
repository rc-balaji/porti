import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import portfolioData from '@/data/portfolio-data';

const Testimonials = () => {
  const { testimonials } = portfolioData;

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
    <section id="testimonials" className="py-16 md:py-24 reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Testimonials</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            What clients and colleagues say about working with me
          </p>
        </div>
        
        <motion.div 
          className="testimonial-slider max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap -mx-4">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="w-full md:w-1/2 px-4 mb-8"
                variants={itemVariants}
              >
                <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-md h-full hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <FaQuoteLeft className="text-primary text-3xl" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4 flex-shrink-0">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
