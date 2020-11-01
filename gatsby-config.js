/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-fontawesome-css',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-image',
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: './gatsby-graphql.ts',
        documentPaths: [
          './src/pages/*.{ts,tsx}',
          // './src/components/**/index.{ts,tsx}',
          './src/customHooks/**/*.{ts,tsx}',
          './src/templates/**/index.{ts,tsx}',
          './gatsby-node.js',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              backgroundColor: '#f00',
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-remark-images',
      options: {
        backgroundColor: '#f00',
        maxWidth: 1035,
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/Layout/index.tsx'),
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.ts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/content/articles`,
      },
    },
  ],
};
