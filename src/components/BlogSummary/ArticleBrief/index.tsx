import { faCalendar, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import React, { FunctionComponent } from 'react';

import { IArticleBrief } from '../../../models/IArticleBrief';
import {
  S_Container,
  S_ContainerLink,
  S_Date,
  S_DateContainer,
  S_Excerpt,
  S_Header,
  S_Read,
  S_Title,
  SC_DateIcon,
  SC_Img,
  SC_ReadLinkArrowICon,
} from './index.styles';

export type Props = {
  article: IArticleBrief;
};

const ArticleBrief: FunctionComponent<Props> = ({ article }) => (
  <S_Container>
    <S_ContainerLink to={article.blogSlug}>
      <S_Header>
        <S_Title>{article.title}</S_Title>
        <SC_Img fixed={article.iconSrc} alt='Article Icon' />
      </S_Header>
      <S_DateContainer>
        <SC_DateIcon icon={faCalendar} />
        <S_Date>{article.date}</S_Date>
      </S_DateContainer>
      <S_Excerpt>{article.description}</S_Excerpt>
      <S_Read>
        Read
        <SC_ReadLinkArrowICon icon={faSignInAlt} />
      </S_Read>
    </S_ContainerLink>
  </S_Container>
);

export default ArticleBrief;
