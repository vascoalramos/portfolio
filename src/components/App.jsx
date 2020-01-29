import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Navbar from './Navigation/Navbar';
import SEO from './SEO';

import { PortfolioProvider } from '../context/context';

import { projectsData } from '../mock/data';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([...projectsData]);
  }, []);

  return (
    <PortfolioProvider value={{ projects }}>
      <SEO />
      <Navbar />
      <Hero />
      <About />
      {/* <Projects /> */} 
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
