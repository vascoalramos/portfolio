import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const Header = ({ data }) => {
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
    <section id="hero" className="jumbotron" style={{ borderRadius: 0 }}>
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <p className="hero-salute">{data.salute}</p>
          <h1 className="hero-title text-color-main">{data.name}</h1>
          <h1 className="hero-title">{data.micro_bio}</h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <a className="cta-btn cta-btn--hero" href="/#about" title="About Me">
              {data.cta}
            </a>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

Header.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Header;
