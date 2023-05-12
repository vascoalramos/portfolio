import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v1 as uuidv1 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { theme, mixins, media } from '../../styles';
import { srConfig } from '../../config';

const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled.section`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const StyledTitle = styled.h4`
  margin: 0 auto 1.75rem auto;
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  a {
    display: block;
  }
`;
const StyledArchiveLink = styled(Link)`
  ${mixins.inlineLink};
  text-align: center;
  margin: 0 auto;
  font-family: ${fonts.SpaceMono};
  font-size: ${fontSizes.sm};
  &:after {
    bottom: 0.1em;
  }
`;
const StyledGrid = styled.div`
  margin-top: 50px;
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;
const StyledProjectInner = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${colors.lightNavy};
`;
const StyledProject = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledProjectInner} {
      transform: translateY(-5px);
    }
  }
`;
const StyledProjectHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;
const StyledFolder = styled.div`
  color: ${colors.green};
  svg {
    width: 40px;
    height: 40px;
  }
`;
const StyledProjectLinks = styled.div`
  margin-right: -10px;
  color: ${colors.lightSlate};
`;
const StyledIconLink = styled.a`
  position: relative;
  top: -10px;
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const StyledProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xl};
  color: ${colors.lightestSlate};
`;
const StyledProjectDescription = styled.div`
  font-size: ${fontSizes.sm};
  color: ${colors.lightSlate};
  a {
    font-size: ${fontSizes.sm};
    ${mixins.inlineLink};
  }
  p {
    font-size: ${fontSizes.sm};
  }
`;
const StyledTechList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
  li {
    font-family: ${fonts.SpaceMono};
    font-size: ${fontSizes.xs};
    color: ${colors.slate};
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
const StyledMoreButton = styled.button`
  margin: 80px auto 0;
  display: block;
  background-color: transparent;
`;

const Projects = ({ data }) => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    import('scrollreveal').then(({ default: ScrollReveal }) => {
      const sr = ScrollReveal();
      sr.reveal(revealTitle.current, srConfig());
      sr.reveal(revealArchiveLink.current, srConfig());
      revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
    });
  }, []);

  const GRID_LIMIT = 6;
  const projects = data.filter(({ node }) => node);
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  return (
    <StyledContainer>
      <StyledTitle ref={revealTitle}>Other Noteworthy Projects</StyledTitle>
      <StyledArchiveLink to="/archive" ref={revealArchiveLink}>
        view the archive
      </StyledArchiveLink>
      <div className="container">
        <StyledGrid>
          <TransitionGroup className="projects">
            {projectsToShow &&
              projectsToShow.map(({ node }, i) => {
                const { frontmatter, html } = node;
                const { github, gitlab, external, title, tech } = frontmatter;
                return (
                  <CSSTransition
                    key={uuidv1()}
                    classNames="fadeup"
                    timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                    exit={false}
                  >
                    <StyledProject
                      key={uuidv1()}
                      ref={(el) => {
                        revealProjects.current[i] = el;
                      }}
                      tabIndex="0"
                      style={{
                        transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                      }}
                    >
                      <StyledProjectInner>
                        <header>
                          <StyledProjectHeader>
                            <StyledFolder>
                              <FontAwesomeIcon
                                icon="folder"
                                size="2x"
                                inverse
                                style={{ fontSize: '2.5rem' }}
                              />
                            </StyledFolder>
                            <StyledProjectLinks>
                              {external && (
                                <StyledIconLink
                                  href={external}
                                  target="_blank"
                                  rel="nofollow noopener noreferrer"
                                  aria-label="External Link"
                                >
                                  <FontAwesomeIcon
                                    icon="globe"
                                    size="2x"
                                    inverse
                                    style={{ fontSize: '2.5rem' }}
                                  />
                                </StyledIconLink>
                              )}
                              {github && (
                                <StyledIconLink
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
                                </StyledIconLink>
                              )}
                              {gitlab && (
                                <StyledIconLink
                                  href={gitlab}
                                  target="_blank"
                                  rel="nofollow noopener noreferrer"
                                  aria-label="GitLab Link"
                                >
                                  <FontAwesomeIcon
                                    icon={['fab', 'gitlab']}
                                    size="2x"
                                    inverse
                                    style={{ fontSize: '2.5rem' }}
                                  />
                                </StyledIconLink>
                              )}
                            </StyledProjectLinks>
                          </StyledProjectHeader>
                          <StyledProjectName>{title}</StyledProjectName>
                          <StyledProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                        </header>
                        <footer>
                          {tech && (
                            <StyledTechList>
                              {tech.map((_tech) => (
                                <li key={uuidv1()}>{_tech}</li>
                              ))}
                            </StyledTechList>
                          )}
                        </footer>
                      </StyledProjectInner>
                    </StyledProject>
                  </CSSTransition>
                );
              })}
          </TransitionGroup>
        </StyledGrid>

        <StyledMoreButton onClick={() => setShowMore(!showMore)} className="cta-btn cta-btn--hero">
          Show {showMore ? 'Less' : 'More'}
        </StyledMoreButton>
      </div>
    </StyledContainer>
  );
};

Projects.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Projects;
