import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Hero from './hero/hero';
import About from './about/about';
// import Projects from './Projects/Projects';
import Contact from './contact/contact';
import Footer from './footer/footer';
import Navbar from './navigation/navbar';
// import Feature from './featured/feature';
import SEO from './seo';

library.add(fab, fas);

const App = () => {
  const data = useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/featured/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              image {
                childImageSharp {
                  fixed(width: 300) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              tech
              github
              external
            }
            html
          }
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
      <SEO data={data.site.siteMetadata} />
      <Navbar />
      <Hero data={data.hero.frontmatter} />
      <About data={data.about} />
      {/* <Feature data={data.featured.edges} /> */}
      {/* <Projects /> */}
      <Contact data={data.site.siteMetadata.email} />
      <Footer data={data.site.siteMetadata} />
    </>
  );
};

export default App;
