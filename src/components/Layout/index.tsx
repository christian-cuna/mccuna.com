import React, { FunctionComponent } from "react"
import { GlobalStyles } from "./GlobalStyles/index.styles"
import {
  S_Container,
  S_BannerContainer,
  S_FooterContainer,
  S_MainContainer,
} from "./index.styles"
import Banner from "./Banner"
import Footer from "./Footer"

export type Props = {}

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <S_Container>
        <S_BannerContainer>
          <Banner />
        </S_BannerContainer>
        <S_MainContainer>{children}</S_MainContainer>
        <S_FooterContainer>
          <Footer />
        </S_FooterContainer>
      </S_Container>
    </>
  )
}

export default Layout
