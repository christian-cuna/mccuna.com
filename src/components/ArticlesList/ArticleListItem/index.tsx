import React, { FunctionComponent, useState } from 'react';
import {
  S_Props,
  S_Container,
  S_Details,
  SC_Img,
  S_Title,
  S_Excerpt,
  S_Icon,
  S_Corner,
  S_Link,
} from './index.styles';
import {
  faExternalLinkAlt,
  faExternalLinkSquareAlt,
} from '@fortawesome/free-solid-svg-icons';
import { IArticleListItem } from '../../../models/IArticleListItem';

export type Props = S_Props & {
  article: IArticleListItem;
  className?: string;
};

const ArticleListItem: FunctionComponent<Props> = ({
  article,
  className,
  ...styleProps
}) => {
  const [detailsIcon, setDetailsIcon] = useState(faExternalLinkAlt);

  return (
    <S_Link to={article.slug} className={className}>
      <S_Container
        onMouseEnter={() => setDetailsIcon(faExternalLinkSquareAlt)}
        onMouseLeave={() => setDetailsIcon(faExternalLinkAlt)}
        {...styleProps}
      >
        <SC_Img fluid={article.imageSrc} {...styleProps} />
        <S_Details {...styleProps}>
          <S_Icon icon={detailsIcon} {...styleProps} />
          <S_Corner />
          <S_Title>{article.title}</S_Title>
          <S_Excerpt>{article.excerpt}</S_Excerpt>
        </S_Details>
      </S_Container>
    </S_Link>
  );
};

export default ArticleListItem;
