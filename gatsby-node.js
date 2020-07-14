/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
// eslint-disable-next-line no-unused-vars
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/templates/post.jsx');
  // const tagTemplate = path.resolve('src/templates/tag.jsx');

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create post detail pages
  const posts = result.data.postsRemark.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: postTemplate,
      context: {},
    });
  });

  /*
  // Extract tag data from query
  const tags = result.data.tagsGroup.group;
  // Make tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/pensieve/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
  */
};

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
          {
            test: /animejs/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
