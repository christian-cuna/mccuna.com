import React, { FunctionComponent } from 'react';

import { IArticleListItem } from '../../models/IArticleListItem';
import { S_Container, SC_ArticleListItem } from './index.styles';

export type Props = {
  articles: IArticleListItem[];
  className?: string;
};

const ArticlesList: FunctionComponent<Props> = ({ articles, className }) => {
  return (
    <S_Container className={className}>
      {articles.map(article => (
        <SC_ArticleListItem key={article.blogSlug} article={article} />
      ))}
    </S_Container>
  );
};

export default ArticlesList;
