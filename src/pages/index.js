import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import { Layout } from '../templates';
import { Hero, About, Feature, Projects } from '../components';

export default () => {
  const data = useStaticQuery(
    graphql`
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
                    fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
                tech
                github
                gitlab
                external
                showInProjects
              }
              html
            }
          }
        }
        projects: allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "/projects/" }
            frontmatter: { showInProjects: { ne: false } }
          }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                title
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
      }
    `
  );

  return (
    <Layout isPage>
      <Hero data={data.hero.frontmatter} />
      <About data={data.about} />
      <Feature data={data.featured.edges} />
      <Projects data={data.projects.edges} />
    </Layout>
  );
};
