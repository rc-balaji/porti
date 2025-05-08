import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '@/data/mydata';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const { personal_info, contact } = portfolioData;
  const currentYear = new Date().getFullYear();
  
  const socialIcons = [
    { icon: <FaGithub />, href: personal_info.social_links.github, label: "GitHub" },
    { icon: <FaLinkedin />, href: personal_info.social_links.linkedin, label: "LinkedIn" },
    { icon: <FaFacebook />, href: personal_info.social_links.facebook, label: "Facebook" },
    { icon: <FaInstagram />, href: personal_info.social_links.instagram, label: "Instagram" }
  ];
  
  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <footer className="bg-white dark:bg-[hsl(var(--dark-bg))] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* About & Social Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-4 gradient-text">{personal_info.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {personal_info.tagline}
            </p>
            
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a 
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <FaEnvelope className="mr-3 text-primary" />
                <a href={`mailto:${contact.email}`} className="hover:text-primary dark:hover:text-primary transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <FaPhone className="mr-3 text-primary" />
                <a href={`tel:${contact.phone}`} className="hover:text-primary dark:hover:text-primary transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <FaMapMarkerAlt className="mr-3 text-primary" />
                <a 
                  href={contact.map_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {contact.address}
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} {personal_info.name}. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;