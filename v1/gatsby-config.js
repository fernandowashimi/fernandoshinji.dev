module.exports = {
  siteMetadata: {
    title: 'Fernando Shinji',
    /** Pensar em algo melhor */
    description: 'My personal website',
    author: 'Fernando Shinji Washimi',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.ts',
      },
    },
  ],
};
