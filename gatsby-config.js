module.exports = {
  siteMetadata: {
    siteTitle: 'Gatsby Starter Portfolio Overview by LekoArts',
    siteUrl: 'https://gatsby-starter-portfolio.netlify.com',
    siteDescription: 'Gatsby.js Starters by LekoArts. Primarily aimed at Designers & Photographers. Minimalistic & fast websites!'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-transformer-yaml',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/sites/`,
        name: 'sites',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-47519312-2',
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Starter Portfolio Overview by LekoArts',
        short_name: 'Gatsby Starter Portfolio',
        description:
          'Gatsby.js starters by LekoArts. Primarily aimed at Designers & Photographers. Minimalistic & fast websites!',
        start_url: '/',
        background_color: '#191e38',
        theme_color: '#6574cd',
        display: 'standalone',
        icon: 'src/favicon.png',
      },
    },
    /* Must be placed at the end */
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
