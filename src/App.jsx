import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'wouter';
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import Home from '@/pages/Home.jsx';
import NotFound from '@/pages/not-found.jsx';
import CustomCursor from '@/components/CustomCursor.jsx';
import { 
  initSectionAnimation, 
  initStaggerAnimation, 
  initParallaxEffect, 
  initTimelineAnimation 
} from '@/lib/animations';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './index.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Implement basic routing
function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize GSAP ScrollTrigger animations
  useEffect(() => {
    // Set a slight delay to ensure all DOM elements are fully loaded
    const timer = setTimeout(() => {
      // Initialize animations for each section
      initSectionAnimation('hero', {
        contentSelectors: '.hero-content > *',
        staggerDelay: 0.2,
        duration: 1,
        titleFrom: { y: 80, opacity: 0 },
        contentFrom: { y: 50, opacity: 0 },
      });
      
      initSectionAnimation('about', {
        contentSelectors: '.about-content > *',
        staggerDelay: 0.15
      });
      
      initStaggerAnimation('#skills', '.skill-item', {
        staggerDelay: 0.1,
        from: { y: 30, opacity: 0, scale: 0.9 }
      });
      
      initStaggerAnimation('#services', '.service-card', {
        staggerDelay: 0.15,
        from: { y: 50, opacity: 0 }
      });
      
      initTimelineAnimation('#experience', '.timeline-item');
      
      initParallaxEffect('.parallax-element', { speed: 0.2 });
      
      // Initialize animations for testimonials, achievements, and blogs
      initStaggerAnimation('#testimonials', '.testimonial-card', {
        staggerDelay: 0.2,
        from: { y: 30, opacity: 0, scale: 0.95 }
      });
      
      initStaggerAnimation('#achievements', '.achievement-item', {
        staggerDelay: 0.15,
        from: { y: 40, opacity: 0 }
      });
      
      initStaggerAnimation('#blog', '.blog-card', {
        staggerDelay: 0.15,
        from: { y: 40, opacity: 0 }
      });
      
      // Initialize contact section animation
      initSectionAnimation('contact', {
        contentSelectors: '.contact-content > *',
        staggerDelay: 0.15
      });
    }, 500);
    
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <Router>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AppRouter />
          </main>
          <Footer />
          <CustomCursor />
          <Toaster />
        </div>
      </TooltipProvider>
    </Router>
  );
}

export default App;