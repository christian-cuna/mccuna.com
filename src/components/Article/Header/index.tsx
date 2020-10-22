import React, { FunctionComponent } from 'react';
import { IArticle } from '../../../models/IArticle';
import {
  S_Date,
  S_ImgCredits,
  S_ImgContainer,
  S_Img,
  S_TitleContainer,
  S_Container,
} from './index.styles';

export type Props = {
  article: IArticle;
};

const Header: FunctionComponent<Props> = ({ article }) => {
  return (
    <S_Container>
      <S_TitleContainer>
        <h1>{article.title}</h1>
        <S_Date>{article.date}</S_Date>
      </S_TitleContainer>
      <S_ImgContainer>
        <S_Img fluid={article.img} />
        <S_ImgCredits>{article.imageLabel}</S_ImgCredits>
      </S_ImgContainer>
    </S_Container>
  );
};

export default Header;
