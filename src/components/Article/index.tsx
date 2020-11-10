import React, { FunctionComponent } from 'react';

import Body from './Body';
import { SC_ArticleIcons } from './Body/index.styles';
import Footer from './Footer';
import Header from './Header';
import { S_Container } from './index.styles';

const Article: FunctionComponent = () => (
  <S_Container>
    <Header />
    <SC_ArticleIcons />
    <Body />
    <Footer />
  </S_Container>
);

export default Article;
