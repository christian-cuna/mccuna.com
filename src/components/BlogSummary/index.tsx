import React, { FunctionComponent } from 'react';
import { IArticleBrief } from '../../models/IArticleBrief';
import ArticleBrief from './ArticleBrief';
import { S_Container, S_ReadAllLink } from './index.styles';

export type Props = {
  articles: IArticleBrief[];
};

const BlogSummary: FunctionComponent<Props> = ({ articles }) => {
  return (
    <S_Container>
      {articles.map(article => (
        <ArticleBrief key={article.slug} article={article} />
      ))}
      <S_ReadAllLink to='/dummy'>Read all</S_ReadAllLink>
    </S_Container>
  );
};

export default BlogSummary;
