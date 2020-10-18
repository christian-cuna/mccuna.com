import React, { FunctionComponent } from 'react';
import { IArticle } from '../../../models/IArticle';
import OtherArticles from './OtherArticles';
import PaginationLinks from './PaginationLinks';
import SocialInteractions from './SocialInteractions';

export type Props = {
  article: IArticle;
};

const Footer: FunctionComponent<Props> = () => {
  return (
    <div>
      <PaginationLinks />
      <SocialInteractions />
      <OtherArticles />
    </div>
  );
};
export default Footer;
