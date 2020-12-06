import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';

import { ArticleQuery } from '../../../gatsby-graphql';
import Article from '../../components/Article';
import SEO from '../../components/SEO';
import { ArticleContextProvder } from '../../contexts/ArticleContext';
import { IArticle } from '../../models/IArticle';
import { IPageContext } from '../../models/PageContext';

export type Props = {
  data: ArticleQuery;
  pageContext: IPageContext;
};

const BlogArticle: FunctionComponent<Props> = ({ data, pageContext }) => {
  const article: IArticle = {
    title: data.mdx.frontmatter.title,
    content: data.mdx.body,
    date: new Date(data.mdx.frontmatter.date).toDateString(),
    img: data.mdx.frontmatter.imageSrc.childImageSharp.fluid,
    imageLabel: data.mdx.frontmatter.imageLabel,
    blogSlug: data.mdx.fields.blogSlug,
    nextArticleLink: pageContext.next && {
      title: pageContext.next.frontmatter.title,
      blogSlug: pageContext.next.fields.blogSlug,
    },
    prevArticleLink: pageContext.prev && {
      title: pageContext.prev.frontmatter.title,
      blogSlug: pageContext.prev.fields.blogSlug,
    },
    excerpt: data.mdx.excerpt,
    editLink: `https://github.com/christian-cuna/mccuna.com/tree/master${data.mdx.fields.gitHubRelativeFilePath}`,
  };

  return (
    <>
      <SEO title={article.title} description={article.excerpt} />
      <ArticleContextProvder article={article}>
        <Article />
      </ArticleContextProvder>
    </>
  );
};

// TODO: Find a way to use appColors.primaryColor instead of the color code
export const query = graphql`
  query Article($slug: String!) {
    mdx(fields: { blogSlug: { eq: $slug } }) {
      excerpt
      frontmatter {
        title
        date
        imageSrc {
          childImageSharp {
            fluid(
              fit: COVER
              maxWidth: 1250
              traceSVG: { color: "#07a7cf", background: "#fff" }
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
      fields {
        blogSlug
        gitHubRelativeFilePath
      }
      body
    }
  }
`;

export default BlogArticle;
