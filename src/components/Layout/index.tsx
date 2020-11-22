import React, { FunctionComponent } from 'react';

import Footer from './Footer';
import { GlobalStyles } from './GlobalStyles/index.styles';
import {
  S_Container,
  S_FooterContainer,
  S_MainContainer,
  S_MenuContainer,
} from './index.styles';
import Menu from './Menu';
import SubscribeForm from './SubscribeForm';

export type Props = {};

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <S_Container>
        <S_MenuContainer>
          <Menu />
        </S_MenuContainer>
        <S_MainContainer>
          {children}
          <SubscribeForm />
        </S_MainContainer>
        <S_FooterContainer>
          <Footer />
        </S_FooterContainer>
      </S_Container>
    </>
  );
};

export default Layout;
