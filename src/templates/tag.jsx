import React from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { v1 as uuidv1 } from 'uuid';
import styled from 'styled-components';
import { Layout } from '.';
import { theme, mixins, Main } from '../styles';

const { colors, fonts, fontSizes } = theme;

const StyledTagsContainer = styled(Main)`
  max-width: 1000px;
  a {
    ${mixins.inlineLink};
  }

  h1 {
    color: ${colors.lightSlate};
    ${mixins.flexBetween};
    margin-bottom: 50px;
    a {
      font-size: ${fontSizes.lg};
      font-weight: 400;
    }
  }

  ul {
    li {
      font-size: 24px;
      h2 {
        font-size: inherit;
        margin: 0;
        a {
          color: ${colors.lightestSlate};
        }
      }
      .subtitle {
        color: ${colors.slate};
        font-size: ${fontSizes.sm};
        .tag {
          font: ${fonts.SpaceMono};
          margin-right: 10px;
        }
        a {
          font: ${fonts.SpaceMono};
          font-size: 15px;
        }
      }
    }
  }
`;

const TagTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <StyledTagsContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/blog">Blog</Link>
        </span>

        <h1>
          <span>#{tag}</span>
          <span>
            <Link to="/blog/tags">View all tags</Link>
          </span>
        </h1>

        <ul className="fancy-list">
          {edges.map(({ node }) => {
            const { title, slug, date, tags } = node.frontmatter;
            return (
              <li key={slug}>
                <h2>
                  <Link to={slug}>{title}</Link>
                </h2>
                <p className="subtitle">
                  <time>
                    {new Date(date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span>&nbsp;&mdash;&nbsp;</span>
                  {tags &&
                    tags.length > 0 &&
                    tags.map((tagName) => (
                      <Link
                        key={uuidv1()}
                        to={`/pensieve/tags/${kebabCase(tagName)}/`}
                        className="tagName"
                      >
                        #{tag}
                      </Link>
                    ))}
                </p>
              </li>
            );
          })}
        </ul>
      </StyledTagsContainer>
    </Layout>
  );
};

export default TagTemplate;

TagTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const pageQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            description
            date
            slug
            tags
          }
        }
      }
    }
  }
`;
