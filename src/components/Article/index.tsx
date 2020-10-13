import React, { FunctionComponent } from "react"

import { MDXProvider } from "@mdx-js/react"
import { IArticle } from "../../models/IArticle"
import {
  S_HeaderContainer,
  S_Date,
  S_Container,
  S_ImgContainer,
  S_Img,
  S_ImgCredits,
  SC_ArticleIcons,
  S_BottomDate,
} from "./index.styles"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import PaginationLinks from "./PaginationLinks"

export type Props = {
  article: IArticle
}

const Article: FunctionComponent<Props> = ({ article }) => {
  return (
    <S_Container>
      <S_HeaderContainer>
        <h1>{article.title}</h1>
        <S_Date>{article.date}</S_Date>
      </S_HeaderContainer>
      <S_ImgContainer>
        <S_Img src={article.img} />
        <S_ImgCredits>{article.imgLabel}</S_ImgCredits>
      </S_ImgContainer>
      <MDXProvider components={{ Link }}>
        <MDXRenderer>{article.content}</MDXRenderer>
      </MDXProvider>
      <SC_ArticleIcons />
      <S_BottomDate>{article.date}</S_BottomDate>
      <PaginationLinks />
    </S_Container>
  )
}

export default Article
