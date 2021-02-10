import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { animated, useSpring, config } from 'react-spring';
import DesktopMenu from './desktop-menu';
import MobileMenu from './mobile/mobile-menu';
import LogoNavbar from './nav-items/logo-navbar';

const StyledHeader = styled(animated.header)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 20;
  background: #041a3d;
  box-shadow: 0 0.5rem 0.5rem #041733b3;
  transition: background 0.2s ease-out;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  justify-content: space-between;
  transition: all 0.2s ease-out;
  user-select: none;
  height: ${({ isMobile }) => (isMobile ? '6rem' : '7rem')};
`;

const Contained = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0px 2rem;
`;

const Navbar = React.memo(() => {
  const [isMobile, setisMobile] = useState(null);
  const [menuOpened, setMenuOpened] = useState(false);

  // Animation
  const NavBarSpring = useSpring({
    config: config.wobbly,
    opacity: 1,
    height: isMobile ? '6rem' : '7rem',
    from: {
      opacity: 0,
      height: '0rem',
    },
  });

  // Change navbar content accordingly
  const changeMobile = () =>
    window.matchMedia('(max-width: 37.5em)').matches ? setisMobile(true) : setisMobile(false);

  // Event listener on resize, so when it change we check o remove desktop menu/mobile menu
  // Better than CSS media query because we dont keep both DOM nodes
  useEffect(() => {
    changeMobile();
    window.addEventListener('resize', changeMobile);
    return () => window.removeEventListener('resize', changeMobile);
  }, []);

  return (
    <StyledHeader style={NavBarSpring}>
      <Contained>
        <Wrapper isMobile={isMobile}>
          <LogoNavbar />
          {isMobile ? (
            <MobileMenu menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
          ) : (
            <DesktopMenu />
          )}
        </Wrapper>
      </Contained>
    </StyledHeader>
  );
});

export default Navbar;
