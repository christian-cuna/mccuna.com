import React from 'react';

import * as Gatsby from 'gatsby';
import { IArticleListItem } from '../models/IArticleListItem';
import useOtherArticles from './useOtherArticles';

import { render } from '@testing-library/react';

describe('useOtherArticles should', () => {
  test('return a random article', () => {
    const mockArticle = mockArticles[0];
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementationOnce(() => {
      return getInMDXFormat([mockArticle]);
    });

    let actualArticle: IArticleListItem;
    const MockComponent = () => {
      const { getRandomArticle } = useOtherArticles();
      actualArticle = getRandomArticle();
      return <></>;
    };

    render(<MockComponent />);

    expect(actualArticle.slug).toStrictEqual(mockArticle.slug);
  });

  test('return 2 random articles', () => {
    const [mockArticle0, mockArticle1] = mockArticles;

    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementationOnce(() => {
      return getInMDXFormat([mockArticle0, mockArticle1]);
    });

    let actualArticles: IArticleListItem[];

    const MockComponent = () => {
      const { getRandomArticles } = useOtherArticles();
      actualArticles = getRandomArticles(2);
      return <></>;
    };

    render(<MockComponent />);

    expect(actualArticles).toHaveLength(2);
    expect(
      actualArticles.some(article => mockArticle0.slug === article.slug)
    ).toBeTruthy();
    expect(
      actualArticles.some(article => mockArticle1.slug === article.slug)
    ).toBeTruthy();
  });

  test('NOT return duplicates if there are not enough articles to return ', () => {
    const [mockArticle0, mockArticle1] = mockArticles;

    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementationOnce(() => {
      return getInMDXFormat([mockArticle0, mockArticle1]);
    });

    let actualArticles: IArticleListItem[];

    const MockComponent = () => {
      const { getRandomArticles } = useOtherArticles();
      actualArticles = getRandomArticles(3);
      return <></>;
    };

    render(<MockComponent />);

    expect(actualArticles).toHaveLength(2);
    expect(
      actualArticles.some(article => mockArticle0.slug === article.slug)
    ).toBeTruthy();
    expect(
      actualArticles.some(article => mockArticle1.slug === article.slug)
    ).toBeTruthy();
  });
});

const getInMDXFormat = (articles: IArticleListItem[]) => {
  const data = {
    allMdx: {
      edges: articles.map((article: IArticleListItem) => ({
        node: {
          frontmatter: {
            title: article.title,
            date: article.date,
            description: article.excerpt,
            //  imageSrc: edge.node.frontmatter.imageSrc.childImageSharp.fluid,
            imageSrc: {
              childImageSharp: {
                fluid: [],
              },
            },
          },
          fields: {
            blogSlug: article.slug,
          },
        },
      })),
    },
  };

  return data;
};

const mockArticles: IArticleListItem[] = [
  {
    date: new Date(2020, 6, 1).toDateString(),
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: [],
    slug: 'Lorem-ipsum',
    title: 'Lorem ipsum',
  },
  {
    date: new Date(2020, 7, 1).toDateString(),
    excerpt:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageSrc: [],
    slug: 'dolor-sit',
    title: 'dolor sit',
  },
];
