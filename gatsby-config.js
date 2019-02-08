const proxy = require('http-proxy-middleware')

module.exports = {
  siteMetadata: {
    title: `Battle Exchange`,
    description: `A battle in between Stack Exchange Sites`,
    author: `Pritish Vaidya`,
    siteUrl: `https://battleexchange.com`,
    canonicalUrl: 'https://battlexchange.com',
  },
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    )
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `battle-exchange`,
        short_name: `battle`,
        start_url: `/`,
        background_color: `#FF6B63`,
        theme_color: `#FF6B63`,
        display: `minimal-ui`,
        icon: `src/images/battle-exchange-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pure: true,
      },
    },
    'gatsby-plugin-sitemap',
    /* {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://battleexchange.com',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },*/
    // 'gatsby-plugin-offline',
  ],
}
