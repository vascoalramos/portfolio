import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Layout from '../templates/layout';

library.add(fab, fas);

const Page404 = () => (
  <Layout>
    <section id="hero" className="jumbotron" style={{ borderRadius: 0 }}>
      <Container>
        <Fade duration={1000} delay={500} distance="30px">
          <h1 className="hero-title text-color-main">Page not found</h1>
          <p className="hero-salute">
            Oops! The page you are looking for has been removed or relocated.
          </p>
        </Fade>
        <Fade duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <Link to="/" title="Go Back" aria-label="Go Back">
              <FontAwesomeIcon icon="arrow-left" size="2x" color="white" />
            </Link>
          </p>
        </Fade>
      </Container>
    </section>
  </Layout>
);

export default Page404;
