const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    // /dummy-0/dummy-0/
    const value = createFilePath({ node, getNode }).split('/')[1];

    createNodeField({
      name: 'blogSlug',
      node,
      value: `/blog/${value}`,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query ArticleSlugs {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              blogSlug
            }
          }
        }
      }
    }
  `);

  const edges = result.data.allMdx.edges;
  edges.forEach(({ node }, idx) => {
    const prev = idx === 0 ? null : edges[idx - 1].node;
    const next = idx === edges.length - 1 ? null : edges[idx + 1].node;

    createPage({
      path: node.fields.blogSlug,
      component: path.resolve('./src/templates/BlogArticle/index.tsx'),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.blogSlug,
        prev,
        next,
      },
    });
  });
};
