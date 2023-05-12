import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SEO, Contact, Footer, Navbar } from '../components';
import { GlobalStyle } from '../styles';

library.add(fab, fas);

const Layout = ({ children, isPage }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
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
        }
      }
    }
  `);
  return (
    <>
      <Head data={data.site.siteMetadata} />

      <GlobalStyle />

      <Navbar />
      {children}
      {isPage && <Contact data={data.site.siteMetadata.email} />}
      <Footer data={data.site.siteMetadata} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isPage: PropTypes.bool,
};

export const Head = ({ data }) => {
  return (
    <>
      <meta charSet="utf-8" />
      <html lang={data.lang} />
      <meta name="description" content={data.description} />
      <SEO data={data} />
    </>
  );
};

export default Layout;
