module.exports = {
  siteMetadata: {
    lang: 'en',
    title: 'Vasco Ramos | Computer Science Student',
    description:
      "I'm Vasco Ramos, a 20-year-old Computer Science and Software Engineering student at the University of Aveiro, from Portugal.",
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
    'gatsby-transformer-remark',
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
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects`,
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
