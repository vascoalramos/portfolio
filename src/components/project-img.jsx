import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export const StyledFeaturedImg = styled(GatsbyImage)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: 5px;
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(90%);

  @media (max-width: 768px) {
    object-fit: cover;
    width: auto;
    height: 100%;
    filter: grayscale(100%) contrast(1) brightness(80%);
  }
`;

const ProjectImg = ({ filename, alt }) => {
  data = useStaticQuery(graphql`
    {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(
                width: 700
                quality: 90
                tracedSVGOptions: { color: "#64ffda" }
                placeholder: TRACED_SVG
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  `);
  
  render = (data) => {
    const image = data.images.edges.find((n) => {
      return n.node.relativePath.includes(filename);
    });

    if (!image) return null;

    const imageFluid = image.node.childImageSharp.gatsbyImageData;
    return <StyledFeaturedImg alt={alt} fluid={imageFluid} />;
  };
};

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
