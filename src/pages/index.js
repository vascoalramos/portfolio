import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import Layout from '../templates/layout';
import { Hero, About, Feature, Projects } from '../components';

const Index = () => {
  const data = useStaticQuery(
    graphql`
      {
        featured: allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "/featured/" }
            frontmatter: { showInProjects: { eq: true } }
          }
          sort: { frontmatter: { date: DESC } }
        ) {
          edges {
            node {
              frontmatter {
                title
                image {
                  childImageSharp {
                    gatsbyImageData(
                      quality: 90
                      placeholder: BLURRED
                      tracedSVGOptions: { color: "#64ffda" }
                      layout: CONSTRAINED
                    )
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
            frontmatter: { showInProjects: { eq: true } }
          }
          sort: { frontmatter: { date: DESC } }
        ) {
          edges {
            node {
              frontmatter {
                title
                tech
                github
                gitlab
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
                gatsbyImageData(width: 300, layout: FIXED)
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

export default Index;
