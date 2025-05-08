import React from 'react';
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
  return (
    <div>
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
    </div>
  );
};

export default Home;