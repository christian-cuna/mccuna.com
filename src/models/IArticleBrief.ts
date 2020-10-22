import { FixedObject } from 'gatsby-image';

export interface IArticleBrief {
  slug: string;
  title: string;
  description: string;
  date: string;
  iconSrc: FixedObject | FixedObject[];
}
