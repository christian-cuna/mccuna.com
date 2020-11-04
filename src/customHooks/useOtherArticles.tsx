import { graphql, useStaticQuery } from 'gatsby';
import { useState } from 'react';
import { OtherArticlesQuery } from '../../gatsby-graphql';
import { IArticleListItem } from '../models/IArticleListItem';
import { randomIntFromInterval } from '../utils/math';

export type UseOtherArticles = {
  getRandomArticle: () => IArticleListItem;
  getRandomArticles: (noOfArticles: number) => IArticleListItem[];
};

export default function useOtherArticles(): UseOtherArticles {
  const data: OtherArticlesQuery = useStaticQuery(graphql`
    query OtherArticles {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              date
              description
              imageSrc {
                childImageSharp {
                  fluid(
                    fit: FILL
                    maxWidth: 260
                    maxHeight: 260
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
            }
            fields {
              blogSlug
            }
          }
        }
      }
    }
  `);

  // Go through the edges a single time by using state lazy init
  const [articles] = useState<IArticleListItem[]>(() =>
    data.allMdx.edges.map(edge => {
      return {
        title: edge.node.frontmatter.title,
        date: new Date(edge.node.frontmatter.date).toDateString(),
        slug: edge.node.fields.blogSlug,
        excerpt: edge.node.frontmatter.description,
        imageSrc: edge.node.frontmatter.imageSrc.childImageSharp.fluid,
      };
    })
  );

  const getRandomArticle = (
    selectedArticles?: IArticleListItem[]
  ): IArticleListItem => {
    if (!articles.length) {
      return null;
    }

    const intervalMax = selectedArticles
      ? articles.length - 1 - selectedArticles.length
      : articles.length - 1;
    const index = randomIntFromInterval(0, intervalMax);

    let collection: IArticleListItem[] = articles;
    // filter selected articles
    if (selectedArticles) {
      collection = articles.filter(
        (article: IArticleListItem) =>
          !selectedArticles.some(
            (selectedArticle: IArticleListItem) =>
              selectedArticle.slug === article.slug
          )
      );
    }

    return collection[index];
  };

  const getRandomArticles = (noOfArticles: number) => {
    const randomArticles: IArticleListItem[] = [];
    for (let cnt = 0; cnt < noOfArticles; cnt += 1) {
      const randomArticle = getRandomArticle(randomArticles);
      if (randomArticle) {
        randomArticles.push(randomArticle);
      }
    }

    return randomArticles;
  };

  return {
    getRandomArticle,
    getRandomArticles,
  };
}
