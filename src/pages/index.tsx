import React from "react"
import ThirdPersonDescription from "../components/3rdPersonDescription"
import BlogSummary from "../components/BlogSummary"
import Footer from "../components/Footer"
import IndexBanner from "../components/IndexBanner"
import {
  S_Container,
  S_BannerContainer,
  S_FooterContainer,
  S_MainContainer,
} from "./index.styles"

export default function Home() {
  return (
    <S_Container>
      <S_BannerContainer>
        <IndexBanner />
      </S_BannerContainer>
      <S_MainContainer>
        <BlogSummary />
        <ThirdPersonDescription />
      </S_MainContainer>
      <S_FooterContainer>
        <Footer />
      </S_FooterContainer>
    </S_Container>
  )
}
