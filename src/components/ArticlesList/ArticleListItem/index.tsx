import React, { FunctionComponent } from 'react';

import { IArticleListItem } from '../../../models/IArticleListItem';
import {
  S_Container,
  S_Details,
  S_Excerpt,
  S_Title,
  SC_Image,
  SC_Link,
} from './index.styles';

export type Props = {
  article: IArticleListItem;
  className?: string;
};

const ArticleListItem: FunctionComponent<Props> = ({ article, className }) => {
  return (
    <SC_Link
      to={article.blogSlug}
      className={className}
      aria-label='Article link'
    >
      <S_Container>
        <SC_Image fluid={article.imageSrc} />
        <S_Details>
          <S_Title>{article.title}</S_Title>
          <S_Excerpt>{article.excerpt}</S_Excerpt>
        </S_Details>
      </S_Container>
    </SC_Link>
  );
};

export default ArticleListItem;
