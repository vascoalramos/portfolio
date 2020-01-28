import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { graphql, useStaticQuery } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
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
      <App />
    </>
  );
};
