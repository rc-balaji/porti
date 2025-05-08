import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from 'lucide-react';

// Create theme context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check for saved theme in localStorage
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  // Update HTML class when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// ThemeToggle component with animation
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  // Variants for animating the toggle
  const toggleVariants = {
    light: { rotate: 0 },
    dark: { rotate: 180 }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { type: 'spring', stiffness: 200, damping: 10 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.5, 
      rotate: 180,
      transition: { duration: 0.2 }
    }
  };
  
  const springTransition = {
    type: 'spring',
    stiffness: 300,
    damping: 25
  };

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      initial={false}
      animate={isDark ? 'dark' : 'light'}
      variants={toggleVariants}
      transition={springTransition}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {isDark ? (
        <motion.div
          key="moon"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={iconVariants}
        >
          <MoonIcon size={20} />
        </motion.div>
      ) : (
        <motion.div
          key="sun"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={iconVariants}
        >
          <SunIcon size={20} />
        </motion.div>
      )}
    </motion.button>
  );
};