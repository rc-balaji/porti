import { useEffect } from 'react';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Services from '@/sections/Services';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Experience';
import Testimonials from '@/sections/Testimonials';
import Achievements from '@/sections/Achievements';
import Blog from '@/sections/Blog';
import Contact from '@/sections/Contact';

const Home = () => {
  useEffect(() => {
    // Reveal animations on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <main className="font-inter">
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Testimonials />
      <Achievements />
      <Blog />
      <Contact />
    </main>
  );
};

export default Home;
