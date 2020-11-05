import { FixedObject } from 'gatsby-image';

export interface IArticleBrief {
  blogSlug: string;
  title: string;
  description: string;
  date: string;
  iconSrc: FixedObject | FixedObject[];
}
