import React, { FunctionComponent } from 'react';
import ArticlesList from '../components/ArticlesList';
import { graphql } from 'gatsby';
import { BlogIndexQuery } from '../../gatsby-graphql';
import { IArticleListItem } from '../models/IArticleListItem';
import SEO from '../components/SEO';

export type Props = {
  data: BlogIndexQuery;
};

const Blog: FunctionComponent<Props> = ({ data }) => {
  const articles: IArticleListItem[] = data.allMdx.edges.map(edge => ({
    title: edge.node.frontmatter.title,
    date: edge.node.frontmatter.date,
    excerpt: edge.node.excerpt,
    imageSrc: edge.node.frontmatter.imageSrc.childImageSharp.fluid,
    blogSlug: edge.node.fields.blogSlug,
  }));
  return (
    <>
      <SEO title='Blog' description="McCuna's blog posts" />
      <ArticlesList articles={articles} />
    </>
  );
};

export const query = graphql`
  query BlogIndex {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            date
            imageSrc {
              childImageSharp {
                fluid(fit: FILL, maxWidth: 260, maxHeight: 260) {
                  aspectRatio
                  src
                  srcSet
                  sizes
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                }
              }
            }
          }
          excerpt
          fields {
            blogSlug
          }
        }
      }
    }
  }
`;

export default Blog;
