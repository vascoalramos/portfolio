import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, mixins, Main } from '../../styles';
import { Layout } from '../../templates';

const { colors, fontSizes, fonts } = theme;

const StyledTagsContainer = styled(Main)`
  max-width: 1000px;
  h1 {
    color: ${colors.lightSlate};
    margin-bottom: 50px;
  }
  ul {
    color: ${colors.lig};
    li {
      font-size: ${fontSizes.xxl};
      a {
        ${mixins.inlineLink};
        color: ${colors.lightestSlate};
        .count {
          color: ${colors.slate};
          font-family: ${fonts.SpaceMono};
          font-size: ${fontSizes.md};
        }
      }
    }
  }
`;

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Helmet title={title} />

    <StyledTagsContainer>
      <span className="breadcrumb">
        <span className="arrow">&larr;</span>
        <Link to="/blog">Blog</Link>
      </span>

      <h1>Tags</h1>
      <ul className="fancy-list">
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} <span className="count">({tag.totalCount})</span>
            </Link>
          </li>
        ))}
      </ul>
    </StyledTagsContainer>
  </Layout>
);

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000, filter: { frontmatter: { draft: { ne: true } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
