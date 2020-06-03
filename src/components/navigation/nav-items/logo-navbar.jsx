import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { animated } from 'react-spring';

const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const LogoNavBar = () => {
  const { darkLogo } = useStaticQuery(graphql`
    query {
      darkLogo: file(relativePath: { eq: "logo-1.png" }) {
        childImageSharp {
          fixed(height: 50, quality: 100) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `);

  // Render dark or light logo
  const renderLogo = () => {
    return (
      <animated.div>
        <Img alt="logo" title="Home" fixed={darkLogo.childImageSharp.fixed} />
      </animated.div>
    );
  };

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
