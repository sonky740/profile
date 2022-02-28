module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-186465692-1',
        head: false,
        anonymize: true,
        respectDNT: true
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
        path: './src/images/',
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
        icon: 'src/images/favicon.svg',
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