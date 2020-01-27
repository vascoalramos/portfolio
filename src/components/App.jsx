import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Navbar from './Navigation/Navbar';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects }}>
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
