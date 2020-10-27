import React, { FunctionComponent } from 'react';
import {
  faArrowRight,
  faCalendar,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  S_Container,
  S_Title,
  S_Excerpt,
  S_Date,
  S_ReadLink,
  S_DateContainer,
  SC_DateIcon,
  S_Header,
  SC_Img,
  S_ContainerLink,
  SC_ReadLinkArrowICon,
} from './index.styles';
import { IArticleBrief } from '../../../models/IArticleBrief';

export type Props = {
  article: IArticleBrief;
};

const ArticleBrief: FunctionComponent<Props> = ({ article }) => {
  return (
    <S_Container>
      <S_ContainerLink to={article.slug}>
        <S_Header>
          <S_Title> {article.title}</S_Title>
          <SC_Img fixed={article.iconSrc} />
        </S_Header>
        <S_DateContainer>
          <SC_DateIcon icon={faCalendar} />
          <S_Date>{article.date}</S_Date>
        </S_DateContainer>
        <S_Excerpt>{article.description}</S_Excerpt>
        <S_ReadLink to={article.slug}>
          Read
          <SC_ReadLinkArrowICon icon={faSignInAlt} />
        </S_ReadLink>
      </S_ContainerLink>
    </S_Container>
  );
};

export default ArticleBrief;
