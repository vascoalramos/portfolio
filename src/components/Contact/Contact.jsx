import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import { graphql, useStaticQuery } from 'gatsby';

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
    }
  `);

  return (
    <section id="contact">
      <Container>
        <Title title="What's Next?" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">If you want to talk, you can find me at:</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              title="Send me an Email!"
              href={`mailto:${data.site.siteMetadata.email}`}
            >
              Get In Touch
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
