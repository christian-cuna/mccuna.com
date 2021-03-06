/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'McCuna',
    description: "McCuna's personal website",
    author: 'Mihai-Cristian Cuna-Mic',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-fontawesome-css',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: './gatsby-graphql.ts',
        documentPaths: [
          './src/pages/*.{ts,tsx}',
          './src/components/**/index.{ts,tsx}',
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
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              // className: 'header-link-icon',
              // icon:
              //   '<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
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
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1200,
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'McCuna',
        short_name: 'McCuna',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#07a7cf',
        display: 'standalone',
        icon: './static/favicon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
