import React, { FunctionComponent } from 'react';
import { useArticleContext } from '../../../contexts/ArticleContext';
import { appColors } from '../../../global/styles';
import {
  S_Date,
  S_ImgCredits,
  S_ImgContainer,
  SC_Img,
  S_TitleContainer,
  S_Container,
} from './index.styles';

const Header: FunctionComponent = () => {
  const { article } = useArticleContext();
  return (
    <S_Container>
      <S_TitleContainer>
        <h1>{article.title}</h1>
        <S_Date>{article.date}</S_Date>
      </S_TitleContainer>
      <S_ImgContainer>
        <SC_Img fluid={article.img} backgroundColor={appColors.primaryColor} />
        <S_ImgCredits>{article.imageLabel}</S_ImgCredits>
      </S_ImgContainer>
    </S_Container>
  );
};

export default Header;
