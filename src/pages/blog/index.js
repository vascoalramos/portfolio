import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Link } from 'gatsby';
import { v1 as uuidv1 } from 'uuid';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '../../templates';
import { theme, mixins, media, Main } from '../../styles';

const { colors, fontSizes, fonts } = theme;

const StyledMainContainer = styled(Main)`
  & > header {
    text-align: center;
    margin-bottom: 80px;
    a {
      &:hover,
      &:focus {
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>")
            20 0,
          auto;
      }
    }
  }

  footer {
    ${mixins.flexBetween};
    margin-top: 20px;
    width: 100%;
  }
`;

const StyledGrid = styled.div`
  margin-top: 50px;
  .posts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;

const StyledPostInner = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 3rem 2.5rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${colors.lightNavy};
  header,
  a {
    width: 100%;
  }
`;

const StyledPost = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledPostInner} {
      transform: translateY(-5px);
    }
  }
`;

const StyledPostHeader = styled.div`
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

const StyledPostName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xl};
  color: ${colors.white};
`;

const StyledPostDescription = styled.div`
  font-size: ${fontSizes.sm};
  color: ${colors.lightSlate};
`;

const StyledDate = styled.span`
  text-transform: uppercase;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  color: ${colors.lightSlate};
`;

const StyledTags = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xs};
    color: ${colors.green};
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
    a {
      font-size: ${fontSizes.xs};
      ${mixins.inlineLink};
    }
  }
`;

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <StyledMainContainer>
        <header>
          <h1 className="big-title">Blog</h1>
          <p className="subtitle">my journey of thoughts</p>
        </header>

        <StyledGrid>
          <div className="posts">
            {posts.length > 0 &&
              posts.map(({ node }) => {
                const { frontmatter } = node;
                const { title, description, slug, date, tags } = frontmatter;
                const d = new Date(date);

                return (
                  <StyledPost key={uuidv1()} tabIndex="0">
                    <StyledPostInner>
                      <header>
                        <Link to={slug}>
                          <StyledPostHeader>
                            <StyledFolder>
                              <FontAwesomeIcon icon="pen" size="2x" />
                            </StyledFolder>
                          </StyledPostHeader>
                          <StyledPostName>{title}</StyledPostName>
                          <StyledPostDescription>{description}</StyledPostDescription>
                        </Link>
                      </header>
                      <footer>
                        <StyledDate>{`${d.toLocaleDateString()}`}</StyledDate>
                        <StyledTags>
                          {tags.map((tag) => (
                            <li key={uuidv1()}>
                              <Link to={`/blog/tags/${kebabCase(tag)}/`}>#{tag}</Link>
                            </li>
                          ))}
                        </StyledTags>
                      </footer>
                    </StyledPostInner>
                  </StyledPost>
                );
              })}
          </div>
        </StyledGrid>
      </StyledMainContainer>
    </Layout>
  );
};

BlogPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default BlogPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" }, frontmatter: { draft: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            slug
            date
            tags
            draft
          }
          html
        }
      }
    }
  }
`;
