module.exports = {
  siteMetadata: {
    lang: 'en',
    title: 'Vasco Ramos | Computer Science Student',
    description:
      "I'm Vasco Ramos, a 21-year-old Computer Science and Software Engineering student at the University of Minho, from Portugal.",
    author: 'Vasco Ramos',
    siteUrl: 'https://vascoalramos.me',
    imageShare: 'share.png',
    email: 'hello@vascoalramos.me',
    social: [
      { name: 'linkedin', url: 'https://linkedin.com/in/vascoalramos' },
      { name: 'github', url: 'https://github.com/vascoalramos' },
      { name: 'gitlab', url: 'https://gitlab.com/vascoalramos' },
      { name: 'dev', url: 'https://dev.to/vascoalramos' },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-external-links
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-images
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
            },
          },
          {
            resolve: 'gatsby-remark-code-titles',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-156556339-1`,
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Vasco Ramos | Computer Science Student',
        short_name: 'Vasco Ramos',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#02aab0',
        display: 'standalone',
        icon: 'static/favicon.png',
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return {
                  title: edge.node.frontmatter.title,
                  date: edge.node.frontmatter.date,
                  description: edge.node.frontmatter.description,
                  url: `${site.siteMetadata.siteUrl}/${edge.node.frontmatter.slug}`,
                  custom_elements: [
                    { 'content:encoded': edge.node.rawMarkdownBody },
                    { tags: edge.node.frontmatter.tags.join(',') },
                  ],
                };
              });
            },
            query: `
              {
                site {
                  siteMetadata {
                    siteUrl
                  }
                }
                allMarkdownRemark(
                  filter: { fileAbsolutePath: { regex: "/blog/" } }
                ) {
                  edges {
                    node {
                      frontmatter {
                        description
                        slug
                        title
                        date
                        tags
                      }
                      rawMarkdownBody
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'My feed',
          },
        ],
      },
    },
  ],
};
