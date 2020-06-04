import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';
import { v1 as uuidv1 } from 'uuid';
import PropTypes from 'prop-types';

const Footer = ({ data }) => {
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <a href="#top" title="Go Back To Top" aria-label="Back To Top" className="back-to-top">
          <FontAwesomeIcon icon="angle-up" size="2x" color="white" />
        </a>
        <div className="social-links">
          {data.social.map((entry) => {
            const { name, url } = entry;
            return (
              <a
                key={uuidv1()}
                href={url}
                title={name}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={name}
              >
                <FontAwesomeIcon icon={['fab', name]} />
              </a>
            );
          })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Developed with{' '}
          <FontAwesomeIcon
            icon="heart"
            size="2x"
            color="rgb(220, 53, 69)"
            style={{ fontSize: '1.8rem' }}
          />{' '}
          by{' '}
          {data.social
            .filter((entry) => entry.name === 'github')
            .map((entry) => {
              const { url } = entry;
              return (
                <a
                  key={uuidv1()}
                  href={url}
                  title="My Github Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vasco Ramos
                </a>
              );
            })}
        </p>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Footer;
