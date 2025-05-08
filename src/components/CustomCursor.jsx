import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    
    let isPointer = false;
    
    // Create GSAP animation for cursor following
    const moveCursor = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Use GSAP for smooth cursor movement
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.15,
        ease: "power2.out"
      });
    };
    
    // Handle cursor state changes based on hover state
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target) {
        const cursorStyle = window.getComputedStyle(target).cursor;
        
        // Check if we're hovering over a clickable element
        if (cursorStyle === 'pointer' || cursorStyle.includes('grab')) {
          gsap.to(cursor, {
            width: 70,
            height: 70,
            opacity: 0.8,
            duration: 0.3,
            ease: "elastic.out(1, 0.3)"
          });
          isPointer = true;
        } else if (isPointer) {
          gsap.to(cursor, {
            width: 30,
            height: 30,
            opacity: 0.6,
            duration: 0.3,
            ease: "elastic.out(1, 0.3)"
          });
          isPointer = false;
        }
      }
    };
    
    // Show cursor when mouse enters viewport
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        opacity: 0.6,
        duration: 0.3
      });
    };
    
    // Hide cursor when mouse leaves viewport
    const handleMouseLeave = () => {
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.3
      });
    };
    
    // Add click animation
    const handleMouseDown = () => {
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.1
      });
    };
    
    const handleMouseUp = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
        ease: "elastic.out(1, 0.3)"
      });
    };
    
    // Add event listeners
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousemove', handleMouseOver);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Set initial position and styles with GSAP
    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
      width: 30,
      height: 30
    });
    
    // Clean up event listeners
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousemove', handleMouseOver);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  
  return (
    <div 
      ref={cursorRef} 
      className="hidden md:block fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference cursor-dot"
      style={{ background: 'rgba(255, 255, 255, 0.8)' }}
    ></div>
  );
};

export default CustomCursor;