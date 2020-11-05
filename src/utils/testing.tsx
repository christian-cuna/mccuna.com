import { IArticleListItem } from '../models/IArticleListItem';

export const getInMDXFormat = (articles: IArticleListItem[]) => {
  const data = {
    allMdx: {
      edges: articles.map((article: IArticleListItem) => ({
        node: {
          frontmatter: {
            title: article.title,
            date: article.date,
            description: article.excerpt,
            imageSrc: {
              childImageSharp: {
                fluid: {
                  aspectRatio: 0,
                  src: '',
                  srcSet: '',
                  sizes: '',
                  base64: '',
                  tracedSVG: '',
                  srcWebp: '',
                  srcSetWebp: '',
                },
              },
            },
          },
          fields: {
            blogSlug: article.blogSlug,
          },
        },
      })),
    },
  };

  return data;
};
