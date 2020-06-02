import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import NavItems from '../nav-items/nav-items';
// import DarkModeToggle from '../../UI/darkModeToggle';
import useLockBodyScroll from '../use-lock-scroll';

const BackgroundWrapper = styled(animated.div)`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  background: #041a3d;
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  height: 100%;
  display: flex;
  transition: background 0.2s ease-out;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 6rem;
  padding: 2rem 1rem;
`;

// eslint-disable-next-line react/prop-types
const SideDrawer = ({ setMenuOpened, ...rest }) => {
  useLockBodyScroll();
  return (
    <BackgroundWrapper {...rest}>
      <Wrapper>
        <NavItems mobile clicked={() => setMenuOpened(false)} />
      </Wrapper>
    </BackgroundWrapper>
  );
};

export default SideDrawer;
