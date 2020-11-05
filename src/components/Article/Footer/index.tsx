import React, { FunctionComponent } from 'react';
import { IArticle } from '../../../models/IArticle';
import OtherArticles from './OtherArticles';
import PaginationLinks from './PaginationLinks';
import SocialInteractions from './SocialInteractions';

export type Props = {
  currentArticleBlogSlug: string;
};

const Footer: FunctionComponent<Props> = ({ currentArticleBlogSlug }) => {
  return (
    <div>
      <PaginationLinks />
      <SocialInteractions />
      <OtherArticles currentArticleBlogSlug={currentArticleBlogSlug} />
    </div>
  );
};
export default Footer;
