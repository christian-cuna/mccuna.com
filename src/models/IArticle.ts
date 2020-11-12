import { FluidObject } from 'gatsby-image';

export interface IArticle {
  title: string;
  date: string;
  img: FluidObject | FluidObject[];
  imageLabel: string;
  content: string;
  blogSlug: string;
  excerpt: string;
  prevArticleLink?: IArticleNavigationLink;
  nextArticleLink?: IArticleNavigationLink;
  editLink: string;
}

export interface IArticleNavigationLink {
  title: string;
  blogSlug: string;
}
