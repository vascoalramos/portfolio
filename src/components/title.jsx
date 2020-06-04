import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Heading = styled.h3`
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Title = ({ title }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <Heading className="section-title">{title}</Heading>
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
