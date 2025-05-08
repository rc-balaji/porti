import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import portfolioData from '@/data/mydata';

const Blog = () => {
  const { blogs } = portfolioData;

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
    <section id="blog" className="py-20 bg-white dark:bg-[hsl(var(--dark-bg))]">
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
              Latest Articles
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Insights, tutorials, and thoughts on web development and technology.
            </motion.p>
          </div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogs.map((blog, index) => (
              <motion.a
                key={index}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden bg-white dark:bg-[hsl(var(--dark-card))] rounded-xl shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48 overflow-hidden image-container loading">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "/assets/images/placeholder.svg";
                      e.target.parentNode.classList.remove("loading");
                    }}
                    onLoad={(e) => {
                      e.target.parentNode.classList.remove("loading");
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <div className="flex items-center text-primary mt-4">
                    <span className="font-medium mr-2">Read Article</span>
                    <FaArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="text-center mt-10"
          >
            <a
              href="https://blog.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-primary text-primary font-medium transition-colors hover:bg-primary hover:text-white"
            >
              View All Articles
              <FaArrowRight className="ml-2" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;