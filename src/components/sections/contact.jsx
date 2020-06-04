import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Title from '../title';

const Contact = ({ data }) => {
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
              href={`mailto:${data}`}
            >
              Get In Touch
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

Contact.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Contact;
