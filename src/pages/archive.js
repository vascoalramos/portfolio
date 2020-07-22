import React, { useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { v1 as uuidv1 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Layout } from '../templates';
import { theme, mixins, media, Main } from '../styles';
import { srConfig } from '../config';

const { colors, fonts, fontSizes } = theme;

const StyledMainContainer = styled(Main)`
  padding-bottom: 100px;
`;

const StyledTableContainer = styled.div`
  margin: 100px -20px;
  ${media.tablet`
    margin: 100px -10px;
  `};
`;
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  .hide-on-mobile {
    ${media.tablet`
      display: none;
    `};
  }
  tbody tr {
    transition: ${theme.transition};
    &:hover,
    &:focus {
      background-color: ${colors.lightNavy};
    }
  }
  th,
  td {
    cursor: default;
    line-height: 1.5;
    padding: 10px 20px;
    ${media.tablet`
      padding: 10px;
    `};
  }
  th {
    text-align: left;
    color: ${colors.lightestSlate};
  }
  td {
    &.year {
      width: 10%;
      ${media.tablet`
        font-size: ${fontSizes.sm};
      `};
    }
    &.title {
      padding-top: 15px;
      color: ${colors.lightSlate};
      font-size: ${fontSizes.lg};
      font-weight: 700;
    }
    &.company {
      width: 15%;
      padding-top: 15px;
      font-size: ${fontSizes.md};
    }
    &.tech {
      width: 30%;
      font-size: ${fontSizes.xs};
      font-family: ${fonts.SpaceMono};
      .separator {
        margin: 0 5px;
      }
    }
    &.links {
      span {
        display: flex;
        align-items: center;
        a {
          ${mixins.flexCenter};
        }
        a + a {
          margin-left: 10px;
        }
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

const ArchivePage = ({ data }) => {
  const projects = data.allMarkdownRemark.edges;

  const revealTitle = useRef(null);
  const revealTable = useRef(null);

  const revealProjects = useRef([]);

  useEffect(() => {
    import('scrollreveal').then(({ default: ScrollReveal }) => {
      const sr = ScrollReveal();
      sr.reveal(revealTitle.current, srConfig());
      sr.reveal(revealTable.current, srConfig());
      revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
    });
  }, []);

  return (
    <Layout isPage>
      <StyledMainContainer>
        <header ref={revealTitle}>
          <h1 className="big-title">Archive</h1>
          <p className="subtitle">A big list of things I’ve worked on</p>
        </header>

        <StyledTableContainer ref={revealTable}>
          <StyledTable>
            <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th className="hide-on-mobile">Made at</th>
                <th className="hide-on-mobile">Built with</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 &&
                projects.map(({ node }, i) => {
                  const { date, github, gitlab, external, title, tech, company } = node.frontmatter;
                  return (
                    <tr
                      key={uuidv1()}
                      ref={(el) => {
                        revealProjects.current[i] = el;
                      }}
                    >
                      <td className="overline year">{`${new Date(date).getFullYear()}`}</td>

                      <td className="title">{title}</td>

                      <td className="company hide-on-mobile">
                        {company ? <span>{company}</span> : <span>—</span>}
                      </td>

                      <td className="tech hide-on-mobile">
                        {tech.length > 0 &&
                          tech.map((item, _i) => (
                            <span key={uuidv1()}>
                              {item}
                              {''}
                              {_i !== tech.length - 1 && (
                                <span className="separator">&middot;</span>
                              )}
                            </span>
                          ))}
                      </td>

                      <td className="links">
                        <span>
                          {external && (
                            <a
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
                              />{' '}
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
                              />{' '}
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
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </StyledTable>
        </StyledTableContainer>
      </StyledMainContainer>
    </Layout>
  );
};
ArchivePage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ArchivePage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            tech
            github
            gitlab
            external
            company
          }
          html
        }
      }
    }
  }
`;
