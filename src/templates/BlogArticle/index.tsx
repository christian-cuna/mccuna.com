import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { ArticleQuery } from '../../../gatsby-graphql';
import Article from '../../components/Article';
import { IArticle } from '../../models/IArticle';

export type Props = {
  data: ArticleQuery;
};

const BlogArticle: FunctionComponent<Props> = ({ data }) => {
  const article: IArticle = {
    title: data.mdx.frontmatter.title,
    content: data.mdx.body,
    date: new Date(data.mdx.frontmatter.date).toDateString(),
    img: data.mdx.frontmatter.imageSrc.childImageSharp.fluid,
    imageLabel: data.mdx.frontmatter.imageLabel,
  };
  return <Article article={article} />;
};

export const query = graphql`
  query Article($slug: String!) {
    mdx(fields: { blogSlug: { eq: $slug } }) {
      frontmatter {
        title
        date
        imageSrc {
          childImageSharp {
            fluid(
              fit: FILL
              maxWidth: 260
              maxHeight: 260
              traceSVG: { color: "$appPrimaryColor", background: "#fff" }
            ) {
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
        imageLabel
      }
      body
    }
  }
`;

export default BlogArticle;
