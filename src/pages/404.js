import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import Footer from '../components/footer/footer';
import Navbar from '../components/navigation/navbar';
import SEO from '../components/seo';

export default () => {
  const data = useStaticQuery(graphql`
    {
      site: site {
        siteMetadata {
          title
          description
        }
      }
      hero: markdownRemark(fileAbsolutePath: { regex: "/hero.md/" }) {
        frontmatter {
          salute
          name
          micro_bio
          cta
        }
      }
      about: markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
        html
        frontmatter {
          image {
            childImageSharp {
              fixed(width: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          resume
        }
      }
      site: site {
        siteMetadata {
          social {
            name
            url
          }
          email
          lang
          title
          description
          author
          siteUrl
          imageShare
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <html lang="en" />
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <SEO data={data.site.siteMetadata} />
      <Navbar />
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
      <Footer data={data.site.siteMetadata} />
    </>
  );
};
