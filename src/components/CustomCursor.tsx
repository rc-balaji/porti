import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Don't show custom cursor on mobile devices
    if (isMobile) return;

    // Show cursor when mouse moves
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Track mouse position for cursor
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Check if hovering over clickable elements
    const updateCursorType = () => {
      const target = document.elementFromPoint(position.x, position.y);
      
      // Check if element or its parent is clickable
      const isClickable = (element: Element | null): boolean => {
        if (!element) return false;
        
        const clickableTags = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'];
        const isClickableElement = clickableTags.includes(element.tagName);
        const hasClickEvent = element.hasAttribute('onclick') || 
                             element.getAttribute('role') === 'button';
        const isCardElement = element.classList.contains('project-card') || 
                             element.classList.contains('service-card');
                             
        return isClickableElement || hasClickEvent || isCardElement || 
               (element.parentElement ? isClickable(element.parentElement) : false);
      };
      
      setIsPointer(isClickable(target));
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', updateCursorType);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', updateCursorType);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', checkMobile);
    };
  }, [position.x, position.y, isMobile]);

  if (isMobile || !isVisible) {
    return null;
  }

  return (
    <motion.div
      className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference ${
        isPointer ? 'w-12 h-12 bg-primary/10 border-2 border-primary' : 'w-6 h-6 border-2 border-primary'
      }`}
      animate={{
        x: position.x,
        y: position.y,
        transition: {
          type: "spring",
          damping: 20,
          stiffness: 300,
          restDelta: 0.001
        }
      }}
      style={{
        left: -15,
        top: -15,
        translateX: "0%",
        translateY: "0%",
      }}
    />
  );
};

export default CustomCursor;
