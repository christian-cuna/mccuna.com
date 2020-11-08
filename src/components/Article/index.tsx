import React, { FunctionComponent } from 'react';

import { S_Container } from './index.styles';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { SC_ArticleIcons } from './Body/index.styles';

const Article: FunctionComponent = () => {
  return (
    <S_Container>
      <Header />
      <SC_ArticleIcons />
      <Body />
      <Footer />
    </S_Container>
  );
};

export default Article;
