import React, { FunctionComponent } from 'react';

import { useArticleContext } from '../../../contexts/ArticleContext';
import { appColors } from '../../../global/styles';
import {
  S_Container,
  S_Date,
  S_ImgContainer,
  S_ImgCredits,
  S_Title,
  S_TitleContainer,
  SC_Img,
} from './index.styles';

const Header: FunctionComponent = () => {
  const { article } = useArticleContext();
  return (
    <S_Container>
      <S_TitleContainer>
        <S_Title>{article.title}</S_Title>
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
