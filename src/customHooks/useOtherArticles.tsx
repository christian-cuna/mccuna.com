import { graphql, useStaticQuery } from 'gatsby';
import { useState } from 'react';
import { IArticleListItem } from '../models/IArticleListItem';
import { randomIntFromInterval } from '../utils/math';

export type UseOtherArticles = {
  getRandomArticle: () => IArticleListItem;
  getRandomArticles: (noOfArticles: number) => IArticleListItem[];
};

export default function useOtherArticles(): UseOtherArticles {
  const data = useStaticQuery(graphql`
    query OtherArticles {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              date
              description
              imageSrc
            }
            fields {
              blogSlug
            }
          }
        }
      }
    }
  `);

  const [articles] = useState<IArticleListItem[]>(() =>
    data.allMdx.edges.map(edge => ({
      title: edge.node.frontmatter.title,
      date: new Date(edge.node.frontmatter.date).toDateString(),
      slug: edge.node.fields.blogSlug,
      excerpt: edge.node.frontmatter.description,
      imageSrc: edge.node.frontmatter.imageSrc,
    }))
  );

  const getRandomArticle = (): IArticleListItem => {
    if (!articles.length) {
      return null;
    }

    const index = randomIntFromInterval(0, articles.length - 1);
    return articles[index];
  };

  const getRandomArticles = (noOfArticles: number) => {
    return [...Array(noOfArticles)].map(() => getRandomArticle());
  };

  return {
    getRandomArticle,
    getRandomArticles,
  };
}
