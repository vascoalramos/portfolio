module.exports = {
  siteMetadata: {
    lang: 'en',
    title: 'Vasco Ramos | Junior Infrastructure Engineer',
    description: "I'm Vasco Ramos, a 23-year-old Infrastructure Engineer, from Portugal.",
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
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,
    'gatsby-plugin-image',
    'gatsby-plugin-sass',
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
  ],
};
