import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, { FunctionComponent } from 'react';

import { useArticleContext } from '../../../../contexts/ArticleContext';
import {
  S_Container,
  SC_NextLink,
  SC_NextLinkIcon,
  SC_PrevLink,
  SC_PrevLinkIcon,
} from './index.styles';

const PaginationLinks: FunctionComponent = () => {
  const { article } = useArticleContext();
  return (
    <S_Container>
      {article.nextArticleLink && (
        <SC_PrevLink to={article.nextArticleLink.blogSlug}>
          <SC_PrevLinkIcon icon={faArrowLeft} />
          {article.nextArticleLink.title}
        </SC_PrevLink>
      )}
      {article.prevArticleLink && (
        <SC_NextLink to={article.prevArticleLink.blogSlug}>
          {article.prevArticleLink.title}
          <SC_NextLinkIcon icon={faArrowRight} />
        </SC_NextLink>
      )}
    </S_Container>
  );
};

export default PaginationLinks;
