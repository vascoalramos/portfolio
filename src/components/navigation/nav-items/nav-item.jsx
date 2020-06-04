import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: 'Space Mono';
  font-weight: 700;
  color: white;
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  transition: color 0.2s ease-out;
  &:hover {
    color: #4ddbff;
  }
  &.active {
    color: #4ddbff;
  }
`;

const NavItem = ({ children, clicked, ...rest }) => (
  <StyledLink activeClassName="active" onClick={clicked} {...rest}>
    {children}
  </StyledLink>
);

NavItem.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
  clicked: PropTypes.func,
};

export default NavItem;
