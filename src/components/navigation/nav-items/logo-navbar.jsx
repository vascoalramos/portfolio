import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { animated } from 'react-spring';

const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const LogoNavBar = () => {
  const { darkLogo } = useStaticQuery(graphql`
    {
      darkLogo: file(relativePath: { eq: "logo-1.png" }) {
        childImageSharp {
          gatsbyImageData(height: 35, quality: 80, placeholder: BLURRED, layout: FIXED)
        }
      }
    }
  `);

  // Render dark or light logo
  const renderLogo = () => (
    <animated.div>
      <GatsbyImage image={darkLogo.childImageSharp.gatsbyImageData} alt="logo" title="Home" />
    </animated.div>
  );

  // If is not a section from the index(no one page scroll link), render the gatsby link instead
  return (
    <StyledLink
      to="/"
      smooth="true"
      spy="true"
      title="Home"
      // When header section is active, hide scroll to top. When inactive, show scroll to top
      // onClick={() => setMenuOpened(false)}
    >
      {renderLogo()}
    </StyledLink>
  );
};

export default LogoNavBar;
