import React, { FunctionComponent } from 'react';
import { GlobalStyles } from './GlobalStyles/index.styles';
import {
  S_Container,
  S_MenuContainer,
  S_FooterContainer,
  S_MainContainer,
} from './index.styles';
import Footer from './Footer';
import Menu from './Menu';

export type Props = {};

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <S_Container>
        <S_MenuContainer>
          <Menu />
        </S_MenuContainer>
        <S_MainContainer>{children}</S_MainContainer>
        <S_FooterContainer>
          <Footer />
        </S_FooterContainer>
      </S_Container>
    </>
  );
};

export default Layout;
