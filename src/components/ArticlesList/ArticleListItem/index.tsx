import {
  faExternalLinkAlt,
  faExternalLinkSquareAlt,
} from '@fortawesome/free-solid-svg-icons';
import React, { FunctionComponent, useState } from 'react';

import { LayoutOrientation } from '../../../enums/LayoutOrientation';
import { IArticleListItem } from '../../../models/IArticleListItem';
import {
  S_Container,
  S_Corner,
  S_Details,
  S_Excerpt,
  S_Link,
  S_Props,
  S_Title,
  SC_Icon,
  SC_Img,
} from './index.styles';

export type Props = S_Props & {
  article: IArticleListItem;
  className?: string;
  layoutOrientation: LayoutOrientation;
};

const ArticleListItem: FunctionComponent<Props> = ({
  article,
  className,
  layoutOrientation,
}) => {
  const [detailsIcon, setDetailsIcon] = useState(faExternalLinkAlt);

  return (
    <S_Link
      to={article.blogSlug}
      className={className}
      aria-label='Article link'
    >
      <S_Container
        onMouseEnter={() => setDetailsIcon(faExternalLinkSquareAlt)}
        onMouseLeave={() => setDetailsIcon(faExternalLinkAlt)}
        layoutOrientation={layoutOrientation}
      >
        <SC_Img
          fluid={article.imageSrc}
          layoutOrientation={layoutOrientation}
        />
        <S_Details layoutOrientation={layoutOrientation}>
          <SC_Icon
            icon={detailsIcon}
            title='Article link icon'
            layoutOrientation={layoutOrientation}
          />
          <S_Corner />
          <S_Title>{article.title}</S_Title>
          <S_Excerpt>{article.excerpt}</S_Excerpt>
        </S_Details>
      </S_Container>
    </S_Link>
  );
};

export default ArticleListItem;
