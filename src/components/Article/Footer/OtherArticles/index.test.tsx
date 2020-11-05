// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import * as Gatsby from 'gatsby';
import useOtherArticles from '../../../../customHooks/useOtherArticles';
import { IArticleListItem } from '../../../../models/IArticleListItem';
import { getInMDXFormat } from '../../../../utils/testing';
import OtherArticles, { Props } from './index';

describe('OtherArticles should', () => {
  afterEach(() => jest.clearAllMocks());

  test('render a single article when there is a single other article', () => {
    const mockArticle = mockArticles[0];
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementationOnce(() => {
      return getInMDXFormat([mockArticle]);
    });

    const props: Props = {
      currentArticleBlogSlug: '',
    };

    render(<OtherArticles {...props} />);

    const titleElement = screen.queryByRole('heading', {
      name: mockArticle.title,
    });
    expect(titleElement).not.toBeNull();

    const excerptElement = screen.queryByText(mockArticle.excerpt);
    expect(excerptElement).not.toBeNull();

    const linkIcon = screen.queryByRole('img', {
      name: 'Article link icon',
      hidden: true,
    });
    expect(linkIcon).not.toBeNull();

    const articleLink = screen.queryByRole('link', { name: 'Article link' });
    expect(articleLink).not.toBeNull();
  });

  test('render 3 random articles if more are available', () => {
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementationOnce(() => {
      return getInMDXFormat(mockArticles);
    });

    const props: Props = {
      currentArticleBlogSlug: '',
    };

    render(<OtherArticles {...props} />);

    const articleLinks = screen.queryAllByRole('link', {
      name: 'Article link',
    });
    expect(articleLinks).toHaveLength(3);
  });

  test('NOT render duplicates if there are not enough articles to return ', () => {
    const [mockArticle0, mockArticle1] = mockArticles;

    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementationOnce(() => {
      return getInMDXFormat([mockArticle0, mockArticle1]);
    });

    const props: Props = {
      currentArticleBlogSlug: '',
    };

    render(<OtherArticles {...props} />);

    const articleLinks = screen.queryAllByRole('link', {
      name: 'Article link',
    });
    expect(articleLinks).toHaveLength(2);
  });

  test('NOT render the current selected article', () => {
    const [mockArticle0, mockArticle1] = mockArticles;

    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementationOnce(() => {
      return getInMDXFormat([mockArticle0, mockArticle1]);
    });

    const props: Props = {
      currentArticleBlogSlug: mockArticle0.blogSlug,
    };

    render(<OtherArticles {...props} />);

    const articleLinks = screen.queryAllByRole('link', {
      name: 'Article link',
    });
    expect(articleLinks).toHaveLength(1);
  });
});

const mockArticles: IArticleListItem[] = [
  {
    date: new Date(2020, 6, 1).toDateString(),
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: [],
    blogSlug: 'Lorem-ipsum',
    title: 'Lorem ipsum',
  },
  {
    date: new Date(2020, 7, 1).toDateString(),
    excerpt:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageSrc: [],
    blogSlug: 'dolor-sit',
    title: 'dolor sit',
  },
  {
    date: new Date(2020, 8, 1).toDateString(),
    excerpt:
      'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat',
    imageSrc: [],
    blogSlug: 'Itaque-earum',
    title: 'Itaque earum',
  },
  {
    date: new Date(2020, 9, 1).toDateString(),
    excerpt:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus',
    imageSrc: [],
    blogSlug: 'libero-tempore',
    title: 'libero tempore',
  },
];
