import React from 'react';
import { Helmet } from 'react-helmet';
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
              imageShare
            }
          }
        }
      `}
      render={({ site }) => (
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{site.siteMetadata.title}</title>
            <html lang="en" />
            <meta name="description" content={site.siteMetadata.description} />
          </Helmet>

          <GlobalStyle />

          <SEO data={site.siteMetadata} />
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
  isPage: PropTypes.bool.isRequired,
};

export default Layout;
