import { FluidObject } from 'gatsby-image';

export interface IArticleListItem {
  imageSrc: FluidObject | FluidObject[];
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}
