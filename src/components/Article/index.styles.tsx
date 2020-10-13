import styled from "styled-components"
import ArticleIcons from "./ArticleIcons"
import { bannerContainerHeight } from "../Layout/index.styles"

export const imgHeight = "410px"

export const S_Container = styled.div`
  width: 100%;
`

export const S_HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

export const S_Date = styled.span`
  font-size: 0.7rem;
`

export const S_ImgContainer = styled.div`
  width: 100%;
`

export const S_Img = styled.img`
  width: 100%;
  height: ${imgHeight};
  margin-bottom: 0;
`

export const S_ImgCredits = styled.span`
  display: block;
  text-align: center;
  font-size: 0.8rem;
`

export const SC_ArticleIcons = styled(ArticleIcons)`
  position: fixed;
  right: 7.5%;
  top: calc(calc(${bannerContainerHeight} + ${imgHeight}) * 0.75);
`

export const S_BottomDate = styled(S_Date)`
  display: block;
  text-align: right;
`
