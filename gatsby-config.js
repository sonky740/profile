module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingId: 'G-1C1PPJFX4H',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/resources/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sonky_PortFolio',
        short_name: 'Sonky_PF',
        start_url: '/',
        background_color: '#1a1b1e',
        theme_color: '#1a1b1e',
        display: 'standalone',
        icon: 'src/resources/images/favicon.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        jsxPragma: 'jsx',
        allExtensions: true,
      },
    }
  ],
  pathPrefix: '/PF',
};