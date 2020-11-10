import React, { FunctionComponent } from 'react';

import { LayoutOrientation } from '../../enums/LayoutOrientation';
import { WrapStatus } from '../../enums/WrapStatus';
import { IArticleListItem } from '../../models/IArticleListItem';
import { S_Container, SC_ArticleListItem } from './index.styles';

export type Props = {
  articles: IArticleListItem[];
  className?: string;
  wrapItems?: WrapStatus;
  itemLayoutOrientation?: LayoutOrientation;
};

const ArticlesList: FunctionComponent<Props> = ({
  articles,
  className,
  itemLayoutOrientation = LayoutOrientation.horizontal,
  wrapItems = WrapStatus.wrap,
}) => {
  return (
    <S_Container className={className} wrapItems={wrapItems}>
      {articles.map(article => (
        <SC_ArticleListItem
          key={article.blogSlug}
          article={article}
          layoutOrientation={itemLayoutOrientation}
        />
      ))}
    </S_Container>
  );
};

export default ArticlesList;
