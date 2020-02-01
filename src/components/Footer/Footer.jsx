import React from 'react';
import { Container } from 'react-bootstrap';
import uuidv1 from 'uuid/v1';
import PropTypes from 'prop-types';

const Footer = ({ data }) => {
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <a href="#top" title="Go Back To Top" aria-label="Back To Top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </a>
        <div className="social-links">
          {data.social.map(entry => {
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
                <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
              </a>
            );
          })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Developed with{' '}
          <i
            className="fa fa-heart px-2"
            style={{ color: 'rgb(220, 53, 69)', fontSize: '1.8rem' }}
          ></i>{' '}
          by{' '}
          {data.social.map(entry => {
            const { name, url } = entry;
            if (name === 'github') {
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
            }
          })}
        </p>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Footer;
