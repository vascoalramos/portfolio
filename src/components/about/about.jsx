import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Title from '../title/title';

const About = ({ data }) => {
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
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={4} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <Img
                  className="rounded shadow-lg"
                  alt="profile picture"
                  fixed={data.frontmatter.image.childImageSharp.fixed}
                />
              </div>
            </Fade>
          </Col>
          <Col md={8} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div>
                <div
                  className="about-wrapper__info-text"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: data.html }}
                  style={{ textAlign: 'justify' }}
                />
                <span className={isMobile ? '' : 'd-flex mt-5'}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    title="Download my resume"
                    href={data.frontmatter.resume}
                  >
                    Resume
                  </a>
                </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

About.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default About;
