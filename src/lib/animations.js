import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize section scroll animations
 * @param {string} sectionId - The ID of the section to animate
 * @param {Object} options - Animation options
 */
export const initSectionAnimation = (sectionId, options = {}) => {
  const defaults = {
    titleSelector: 'h2, h3',
    contentSelectors: '.animate-item',
    staggerDelay: 0.1,
    duration: 0.8,
    triggerStart: 'top 80%',
    triggerEnd: 'bottom 20%',
    ease: 'power3.out',
    titleFrom: { y: 50, opacity: 0 },
    contentFrom: { y: 30, opacity: 0 },
  };

  const settings = { ...defaults, ...options };
  const section = document.getElementById(sectionId);
  
  if (!section) return;
  
  // Animate section title
  const titles = section.querySelectorAll(settings.titleSelector);
  if (titles.length) {
    gsap.fromTo(
      titles,
      settings.titleFrom,
      {
        y: 0,
        opacity: 1,
        duration: settings.duration,
        ease: settings.ease,
        scrollTrigger: {
          trigger: section,
          start: settings.triggerStart,
          end: settings.triggerEnd,
          toggleActions: 'play none none reset',
        }
      }
    );
  }
  
  // Animate section content with stagger
  const contentElements = section.querySelectorAll(settings.contentSelectors);
  if (contentElements.length) {
    gsap.fromTo(
      contentElements,
      settings.contentFrom,
      {
        y: 0,
        opacity: 1,
        stagger: settings.staggerDelay,
        duration: settings.duration,
        ease: settings.ease,
        scrollTrigger: {
          trigger: section,
          start: settings.triggerStart,
          end: settings.triggerEnd,
          toggleActions: 'play none none reset',
        }
      }
    );
  }
};

/**
 * Initialize staggered item animations
 * @param {string} containerSelector - The selector for the container
 * @param {string} itemSelector - The selector for the items to animate
 * @param {Object} options - Animation options
 */
export const initStaggerAnimation = (containerSelector, itemSelector, options = {}) => {
  const defaults = {
    staggerDelay: 0.1,
    duration: 0.5,
    triggerStart: 'top 80%',
    from: { y: 30, opacity: 0 },
    ease: 'power2.out',
  };
  
  const settings = { ...defaults, ...options };
  const container = document.querySelector(containerSelector);
  
  if (!container) return;
  
  const items = container.querySelectorAll(itemSelector);
  
  if (items.length) {
    gsap.fromTo(
      items,
      settings.from,
      {
        y: 0,
        opacity: 1,
        stagger: settings.staggerDelay,
        duration: settings.duration,
        ease: settings.ease,
        scrollTrigger: {
          trigger: container,
          start: settings.triggerStart,
          toggleActions: 'play none none reset',
        }
      }
    );
  }
};

/**
 * Initialize parallax scroll effect
 * @param {string} selector - The selector for elements to apply parallax to
 * @param {Object} options - Parallax options
 */
export const initParallaxEffect = (selector, options = {}) => {
  const defaults = {
    speed: 0.3,  // Parallax speed (higher = more movement)
    ease: 'none', // Linear movement
  };
  
  const settings = { ...defaults, ...options };
  const elements = document.querySelectorAll(selector);
  
  elements.forEach(element => {
    gsap.to(element, {
      y: `${settings.speed * 100}%`,
      ease: settings.ease,
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });
  });
};

/**
 * Initialize reveal animation for timeline items
 * @param {string} containerSelector - The selector for the timeline container
 * @param {string} itemSelector - The selector for timeline items
 */
export const initTimelineAnimation = (containerSelector, itemSelector) => {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  
  const items = container.querySelectorAll(itemSelector);
  
  items.forEach((item, index) => {
    // Animate timeline dot
    const dot = item.querySelector('.timeline-circle');
    if (dot) {
      gsap.fromTo(
        dot,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reset',
          }
        }
      );
    }
    
    // Animate timeline content
    gsap.fromTo(
      item,
      { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        }
      }
    );
  });
};

/**
 * Initialize scroll-triggered count up animation
 * @param {string} selector - The selector for number elements
 * @param {Object} options - Animation options
 */
export const initCountAnimation = (selector, options = {}) => {
  const defaults = {
    duration: 2,
    ease: 'power2.out',
  };
  
  const settings = { ...defaults, ...options };
  const elements = document.querySelectorAll(selector);
  
  elements.forEach(element => {
    const targetValue = parseInt(element.getAttribute('data-count') || element.textContent, 10);
    
    gsap.fromTo(
      element,
      { innerText: 0 },
      {
        innerText: targetValue,
        duration: settings.duration,
        ease: settings.ease,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
        onUpdate: function() {
          element.textContent = Math.round(this.targets()[0].innerText);
        }
      }
    );
  });
};