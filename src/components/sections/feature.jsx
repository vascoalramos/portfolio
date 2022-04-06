import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { v1 as uuidv1 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GatsbyImage } from 'gatsby-plugin-image';
import Title from '../title';
import { srConfig } from '../../config';

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

  @media (max-width: 600px) {
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
  }

  @media (max-width: 480px) {
    padding: 30px 25px 20px;
  }
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
  margin: 15px 0 30px;
  color: white;
  font-size: 28px;
  font-weight: bold;

  a {
    color: white;
    font-size: 28px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    color: white;
  }

  a {
    @media (max-width: 768px) {
      display: block;
      font-size: 24px;
    }
  }
`;

const StyledDescription = styled.div`
  box-shadow: 0 10px 30px -15px #041a3d;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-color: #1b3763;
  border-radius: 4px;
  position: relative;
  z-index: 2;
  padding: 25px;
  p {
    margin: 0;
    font-size: 15px;
    color: #a8b2d1;
  }
  a {
    font-size: 15px;
  }

  &:hover,
  &:focus {
    box-shadow: 0 20px 30px -15px #020c1b;
  }

  @media (max-width: 480px) {
    background-color: transparent;
    padding: 20px 0;
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
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
    @media (max-width: 480px) {
      margin-right: 10px;
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

const StyledFeaturedImg = styled(GatsbyImage)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: 5px;
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(90%);

  @media (max-width: 768px) {
    object-fit: cover;
    width: auto;
    height: 100%;
    filter: grayscale(100%) contrast(1) brightness(80%);
  }
`;

const StyledImgContainer = styled.a`
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  background-color: #4ddbff;
  border-radius: 6px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media (max-width: 768px) {
    height: 100%;
  }

  @media (max-width: 600px) {
    grid-column: 1 / -1;
    opacity: 0.25;
  }

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

  @media (max-width: 600px) {
    margin-bottom: 70px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(odd) {
    ${StyledContent} {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 600px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      }

      @media (max-width: 480px) {
        padding: 30px 25px 20px;
      }
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

      @media (max-width: 768px) {
        height: 100%;
      }

      @media (max-width: 600px) {
        grid-column: 1 / -1;
        opacity: 0.25;
      }
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
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    import('scrollreveal').then(({ default: ScrollReveal }) => {
      const sr = ScrollReveal();
      sr.reveal(revealTitle.current, srConfig());
      revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
    });
  }, []);

  return (
    <StyledContainer id="work">
      <Title ref={revealTitle} title="Some Projects I've Built" />

      <div className="container">
        {data &&
          data.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { external, title, tech, github, gitlab, image } = frontmatter;

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
                    {gitlab && (
                      <a
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
                      </a>
                    )}
                  </StyledLinkWrapper>
                </StyledContent>

                <StyledImgContainer
                  href={external || github || '#'}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <StyledFeaturedImg
                    alt={`${title} picture`}
                    image={image.childImageSharp.gatsbyImageData}
                  />
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
