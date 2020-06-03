import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { v1 as uuidv1 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from '../title/title';
import { ProjectImg, StyledFeaturedImg } from '../image/project-img';

const StyledContainer = styled.section`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledContent = styled.div`
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
`;

const StyledLabel = styled.h4`
  font-size: 12px,
  font-weight: normal;
  color: #4ddbff;
  font-family: Space Mono;
  padding-top: 0;
  font-size: 13px;
`;

const StyledProjectName = styled.h5`
  margin: 0 0 20px;

  a {
    color: white;
    font-size: 28px;
    font-weight: bold;
  }
`;

const StyledDescription = styled.div`
  box-shadow: 0 10px 30px -15px #041a3d;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-color: #1b3763;

  position: relative;
  z-index: 2;
  padding: 25px;
  p {
    margin: 0;
    font-size: 15px;
    color: #a8b2d1;
  }

  &:hover,
  &:focus {
    box-shadow: 0 20px 30px -15px #020c1b;
  }
`;

const StyledTechList = styled.ul`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 25px 0 0 10px;
  list-style: none;
  li {
    font-family: Space Mono;
    margin-bottom: 7px;
    white-space: nowrap;
    font-size: 13px;
    color: #8892b0;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  a {
    padding: 10px;
  }
`;

const StyledImgContainer = styled.a`
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  background-color: #4ddbff;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover,
  &:focus {
    background: transparent;
    &: before;
    ${StyledFeaturedImg} {
      background: transparent;
      filter: none;
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    mix-blend-mode: screen;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

const StyledProject = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;
  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(odd) {
    ${StyledContent} {
      grid-column: 7 / -1;
      text-align: right;
    }
    ${StyledTechList} {
      justify-content: flex-end;
      margin-left: 53px;
      margin-right: 0;
      li {
        margin-right: 0;
        margin-left: 20px;
      }
    }
    ${StyledLinkWrapper} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    ${StyledImgContainer} {
      grid-column: 1 / 8;
    }
  }
  &:nth-of-type(even) {
    ${StyledContent} {
      text-align: left;
    }

    ${StyledTechList} {
      margin-right: 53px;
      margin-left: 0;
      li {
        margin-right: 20px;
      }
    }
  }
`;

const Featured = ({ data }) => {
  const revealProjects = useRef([]);

  return (
    <StyledContainer id="projects">
      <Title title="Featured Projects" />

      <div className="container">
        {data &&
          data.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { external, title, tech, github, image } = frontmatter;

            return (
              <StyledProject
                key={uuidv1()}
                ref={(el) => {
                  revealProjects.current[i] = el;
                }}
              >
                <StyledContent>
                  <StyledLabel>Featured Project</StyledLabel>
                  <StyledProjectName>
                    {external ? (
                      <a
                        href={external}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link"
                      >
                        {title}
                      </a>
                    ) : (
                      title
                    )}
                  </StyledProjectName>
                  <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
                  {tech && (
                    <StyledTechList>
                      {tech.map((entry) => (
                        <li key={uuidv1()}>{entry}</li>
                      ))}
                    </StyledTechList>
                  )}
                  <StyledLinkWrapper>
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="GitHub Link"
                      >
                        <FontAwesomeIcon
                          icon={['fab', 'github']}
                          size="2x"
                          inverse
                          style={{ fontSize: '2.5rem' }}
                        />
                      </a>
                    )}
                    {external && (
                      <a
                        href={external}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link"
                      >
                        <FontAwesomeIcon
                          icon="globe"
                          inverse
                          size="2x"
                          style={{ fontSize: '2.5rem' }}
                        />
                      </a>
                    )}
                  </StyledLinkWrapper>
                </StyledContent>

                <StyledImgContainer
                  href={external || github || '#'}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <ProjectImg alt={`${title} picture`} filename={image.relativePath} />
                </StyledImgContainer>
              </StyledProject>
            );
          })}
      </div>
    </StyledContainer>
  );
};

Featured.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default Featured;
