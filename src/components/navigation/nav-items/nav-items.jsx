import React from 'react';
import styled from 'styled-components';
import { useTrail, animated, config } from 'react-spring';
import PropTypes from 'prop-types';
import NavItem from './nav-item';
import { navLinks } from '../../../config';

const StyledNav = styled.nav`
  display: flex;
  overflow: hidden;
  flex: 1;
  flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
  justify-content: ${({ mobile }) => (mobile ? 'center' : 'flex-end')};
  align-items: center;
`;

const NavItems = ({ mobile, clicked }) => {
  // Animation
  const navItemsTrail = useTrail(navLinks.length, {
    config: config.wobbly,
    delay: 300,
    opacity: 1,
    transform: 'translateY(0px)',
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
      display: 'flex',
      cursor: 'pointer',
    },
  });

  return (
    <StyledNav mobile={mobile ? 1 : 0}>
      {navItemsTrail.map((propStyles, index) => (
        <animated.div key={navLinks[index].name} style={propStyles}>
          <NavItem to={navLinks[index].url} clicked={clicked}>
            <span style={{ color: '#4ddbff' }}>
              {0}
              {index + 1}.{' '}
            </span>
            {navLinks[index].name}
          </NavItem>
        </animated.div>
      ))}
      <a
        className="cta-btn cta-btn--resume"
        style={{ marginLeft: mobile ? '0' : '3.5em', marginTop: mobile ? '1em' : 0 }}
        href="/resume.pdf"
        target="_blank"
        title="Download my resume"
        rel="nofollow noopener noreferrer"
      >
        Resume
      </a>
    </StyledNav>
  );
};

NavItems.propTypes = {
  mobile: PropTypes.bool,
  clicked: PropTypes.bool,
};

export default NavItems;
