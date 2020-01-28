import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { useTransition, animated } from 'react-spring';

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
    return <Img alt="Logo Dark" title="Logo Dark" fixed={darkLogo.childImageSharp.fixed} />;
  };

  // If is not a section from the index(no one page scroll link), render the gatsby link instead
  return (
    <StyledLink
      to="header"
      smooth={true}
      spy={true}
      // When header section is active, hide scroll to top When inactive, show scroll to top
      onSetActive={() => setShowScrollTop(false)}
      onSetInactive={() => setShowScrollTop(true)}
      onClick={() => setMenuOpened(false)}
    >
      {renderLogo()}
    </StyledLink>
  );
};

export default LogoNavBar;
