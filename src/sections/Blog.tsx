import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio-data';

const Blog = () => {
  const { blogs } = portfolioData;

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
    <section id="blog" className="py-16 md:py-24 reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Latest Articles</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Thoughts, tutorials and insights about web development
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogs.map((blog, index) => (
            <motion.a 
              key={index}
              href={blog.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-dark-card rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 group"
              variants={itemVariants}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-xl font-semibold text-white p-6">{blog.title}</h3>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
        
        <div className="text-center mt-10">
          <a 
            href="https://yourblog.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border-2 border-primary text-primary dark:text-primary rounded-md hover:bg-primary hover:text-white transition-colors font-medium hover:scale-105 transform transition-transform duration-300"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
