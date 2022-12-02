import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SEO, Contact, Footer, Navbar } from '../components';
import { GlobalStyle } from '../styles';

library.add(fab, fas);

const Layout = ({ children, isPage }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
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
      `}
      render={({ site }) => (
        <div>
          <Head data={site.siteMetadata} />

          <GlobalStyle />

          <Navbar />
          {children}
          {isPage && <Contact data={site.siteMetadata.email} />}
          <Footer data={site.siteMetadata} />
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isPage: PropTypes.bool,
};

export const Head = (data) => {
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
