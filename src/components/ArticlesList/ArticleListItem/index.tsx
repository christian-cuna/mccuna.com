import {
  faExternalLinkAlt,
  faExternalLinkSquareAlt,
} from '@fortawesome/free-solid-svg-icons';
import React, { FunctionComponent, useState } from 'react';

import { IArticleListItem } from '../../../models/IArticleListItem';
import {
  S_Container,
  S_Corner,
  S_Details,
  S_Excerpt,
  S_Title,
  SC_Icon,
  SC_Image,
  SC_Link,
} from './index.styles';

export type Props = {
  article: IArticleListItem;
  className?: string;
};

const ArticleListItem: FunctionComponent<Props> = ({ article, className }) => {
  const [detailsIcon, setDetailsIcon] = useState(faExternalLinkAlt);

  return (
    <SC_Link
      to={article.blogSlug}
      className={className}
      aria-label='Article link'
    >
      <S_Container
        onMouseEnter={() => setDetailsIcon(faExternalLinkSquareAlt)}
        onMouseLeave={() => setDetailsIcon(faExternalLinkAlt)}
      >
        <SC_Image fluid={article.imageSrc} />
        <S_Details>
          <S_Corner>
            <SC_Icon icon={detailsIcon} title='Article link icon' />
          </S_Corner>
          <S_Title>{article.title}</S_Title>
          <S_Excerpt>{article.excerpt}</S_Excerpt>
        </S_Details>
      </S_Container>
    </SC_Link>
  );
};

export default ArticleListItem;
