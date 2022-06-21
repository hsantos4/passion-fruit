
module.exports = {
  siteMetadata: {
    title: `Passion Fruit Media Clt`,
    description: `Helping insurance agencies reach the online audience`,
    siteUrl: `https://passionfruitmediaclt.com`,
    favicon: `src/images/favicon.png`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Darker Grotesque`,
          `sans-serif\:300,400,500,600,700`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Passion Fruit Media Clt`,
        short_name: `Passion Fruit Clt`,
        start_url: '/',
        display: `standalone`,
        icon: `src/images/favicon.png`
      },
    },
    `gatsby-plugin-offline`
  ]
};