import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron" style={{borderRadius: 0}}>
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <p className="hero-salute">{title || 'Hi, my name is'}</p>
          <h1 className="hero-title text-color-main">{name || 'Your Name'}</h1>
          <h1 className="hero-title">{subtitle || "I'm the Unknown Developer."}</h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <a className="cta-btn cta-btn--hero" href="#about">
              {cta || 'Know more'}
            </a>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
