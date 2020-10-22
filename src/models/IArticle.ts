import { FluidObject } from 'gatsby-image';

export interface IArticle {
  title: string;
  date: string;
  img: FluidObject | FluidObject[];
  imageLabel: string;
  content: string;
}
