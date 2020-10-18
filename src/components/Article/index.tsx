import React, { FunctionComponent } from 'react';

import { IArticle } from '../../models/IArticle';
import { S_Container } from './index.styles';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { SC_ArticleIcons } from './Body/index.styles';

export type Props = {
  article: IArticle;
};

const Article: FunctionComponent<Props> = ({ article }) => {
  return (
    <S_Container>
      <Header article={article} />
      <SC_ArticleIcons />
      <Body article={article} />
      <Footer article={article} />
    </S_Container>
  );
};

export default Article;
