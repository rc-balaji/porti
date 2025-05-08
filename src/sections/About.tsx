import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaBriefcase, FaLanguage, FaMapMarkerAlt, FaDownload, FaCode, FaStar } from 'react-icons/fa';
import gsap from 'gsap';
import portfolioData from '@/data/portfolio-data';

const About = () => {
  const { personal_info, interests } = portfolioData;
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // GSAP animation for the image parallax effect
  useEffect(() => {
    if (!imageRef.current || !isInView) return;
    
    const image = imageRef.current;
    
    gsap.fromTo(image, 
      { 
        scale: 1.1,
        boxShadow: "0px 0px 0px rgba(0,0,0,0.1)" 
      },
      { 
        scale: 1,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
        duration: 1.2,
        ease: "power2.out"
      }
    );
    
    return () => {
      gsap.killTweensOf(image);
    };
  }, [isInView]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const infoItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5 + (i * 0.1),
        duration: 0.4
      }
    })
  };
  
  const interestVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.8 + (i * 0.05)
      }
    })
  };
  
  // Floating shapes
  const shapes = [
    { top: '15%', left: '10%', size: '80px', delay: 0, rotation: 45 },
    { top: '80%', left: '15%', size: '60px', delay: 2, rotation: 135 },
    { top: '30%', right: '10%', size: '70px', delay: 1, rotation: 225 },
    { top: '70%', right: '15%', size: '50px', delay: 3, rotation: 315 }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-[hsl(var(--light-bg))] dark:bg-[hsl(var(--dark-bg))] overflow-hidden"
    >
      {/* Background decorative elements */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:block opacity-[0.03] dark:opacity-[0.04] rounded-lg bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))]"
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            width: shape.size,
            height: shape.size,
            rotate: `${shape.rotation}deg`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [`${shape.rotation}deg`, `${shape.rotation + 10}deg`, `${shape.rotation}deg`],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4 gradient-text">About Me</h2>
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : { width: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Decorative background elements */}
              <motion.div 
                className="absolute -top-5 -left-5 w-24 h-24 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--accent))] rounded-md opacity-20 dark:opacity-10"
                initial={{ scale: 0, rotate: -10 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
              
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] rounded-full opacity-20 dark:opacity-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              />
              
              {/* Main image */}
              <img 
                ref={imageRef}
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=450" 
                alt="Balaji working on code" 
                className="relative rounded-lg shadow-lg z-10 hover-lift glass-card p-2" 
              />
              
              {/* Location badge */}
              <motion.div 
                className="absolute -bottom-6 -right-2 z-20 py-3 px-6 glass-card rounded-lg shadow-lg dark-glow"
                initial={{ opacity: 0, y: 20, x: 20 }}
                animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 20, x: 20 }}
                transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
              >
                <p className="text-primary dark:text-white font-medium flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-[hsl(var(--accent))]" />
                  {personal_info.location}
                </p>
              </motion.div>
              
              {/* Code snippet decoration */}
              <motion.div
                className="absolute -top-2 -right-10 bg-[hsl(var(--gradient-start))] text-white p-3 rounded-full shadow-lg hidden md:flex items-center justify-center"
                initial={{ opacity: 0, scale: 0, rotate: -20 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -20 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <FaCode className="text-xl" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            ref={infoRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="space-y-6">
              <motion.div 
                className="inline-block px-5 py-2.5 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-white rounded-full font-medium"
                variants={itemVariants}
              >
                <FaUser className="inline mr-2" /> {personal_info.title}
              </motion.div>
              
              <motion.h3 
                className="text-2xl md:text-3xl font-semibold font-poppins gradient-text"
                variants={itemVariants}
              >
                Building digital solutions that make a difference
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 dark:text-gray-300"
                variants={itemVariants}
              >
                {personal_info.bio}
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={itemVariants}
              >
                {[
                  { icon: <FaEnvelope className="text-[hsl(var(--accent))]" />, content: portfolioData.contact.email, index: 0 },
                  { icon: <FaPhone className="text-[hsl(var(--accent))]" />, content: portfolioData.contact.phone, index: 1 },
                  { icon: <FaBriefcase className="text-[hsl(var(--accent))]" />, content: personal_info.availability, index: 2 },
                  { icon: <FaLanguage className="text-[hsl(var(--accent))]" />, content: personal_info.languages.join(', '), index: 3 }
                ].map((item) => (
                  <motion.div 
                    key={item.index}
                    custom={item.index}
                    variants={infoItemVariants}
                    className="flex items-center p-3 rounded-lg hover:bg-white/60 dark:hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className="p-2 mr-3 bg-blue-100/80 dark:bg-blue-900/20 rounded-full">
                      {item.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item.content}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <p className="font-medium mb-3 flex items-center">
                  <FaStar className="mr-2 text-[hsl(var(--accent))]" /> 
                  Interests:
                </p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <motion.span 
                      key={index}
                      custom={index}
                      variants={interestVariants}
                      className="px-4 py-1.5 bg-gradient-to-r from-[hsl(var(--gradient-start))/10] to-[hsl(var(--gradient-end))/10] dark:from-[hsl(var(--gradient-start))/20] dark:to-[hsl(var(--gradient-end))/20] border border-[hsl(var(--gradient-start))/20] dark:border-[hsl(var(--gradient-start))/30] rounded-full text-sm hover:scale-105 transition-transform duration-300"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
              <motion.a 
                href={personal_info.resume} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-white rounded-md font-medium shadow-md"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="inline mr-2" /> Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
