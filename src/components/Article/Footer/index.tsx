import React, { FunctionComponent } from 'react';
import { useArticleContext } from '../../../contexts/ArticleContext';
import OtherArticles from './OtherArticles';
import PaginationLinks from './PaginationLinks';
import SocialInteractions from './SocialInteractions';

const Footer: FunctionComponent = () => {
  const { article } = useArticleContext();
  return (
    <div>
      <PaginationLinks />
      <SocialInteractions />
      <OtherArticles currentArticleBlogSlug={article.blogSlug} />
    </div>
  );
};
export default Footer;
