import React from 'react';
import PropTypes from 'prop-types';
import { useTransition, config } from 'react-spring';
import HamburgerToggler from './hamburger-toggle';
import SideDrawer from './side-drawer';

const MobileMenu = ({ menuOpened, setMenuOpened }) => {
  // Animation for the side drawer
  const SideDrawerTransition = useTransition(menuOpened, null, {
    config: config.stiff,
    from: { opacity: 0, transform: 'translateX(-50%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(50%)' },
  });
  // If on 404 page, dont render menu, because menu links are from react-scroll, won't work there. Logo is prepared to be clicked and will work
  return (
    <>
      <HamburgerToggler menuOpened={menuOpened} toggleChange={() => setMenuOpened(!menuOpened)} />
      {SideDrawerTransition.map(
        ({ item, key, props }) =>
          item && <SideDrawer key={key} style={props} setMenuOpened={() => setMenuOpened(false)} />
      )}
    </>
  );
};

MobileMenu.propTypes = {
  menuOpened: PropTypes.bool.isRequired,
  setMenuOpened: PropTypes.func.isRequired,
};

export default MobileMenu;
