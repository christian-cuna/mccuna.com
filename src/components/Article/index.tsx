import React, { FunctionComponent } from "react"

import { MDXProvider } from "@mdx-js/react"
import { IArticle } from "../../models/IArticle"
import {
  $HeaderContainer,
  $Date,
  $Container,
  $ImgContainer,
  $Img,
  $ContentContainer,
} from "./index.styles"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

export type Props = {
  article: IArticle
}

const Article: FunctionComponent<Props> = ({ article }) => {
  return (
    <$Container>
      <$HeaderContainer>
        <h1>{article.title}</h1>
        <$Date>{article.date}</$Date>
      </$HeaderContainer>
      <$ImgContainer>
        <$Img src={article.img} />
        <span>{article.imgLabel}</span>
      </$ImgContainer>
      <$ContentContainer>
        <MDXProvider components={{ Link }}>
          <MDXRenderer>{article.content}</MDXRenderer>
        </MDXProvider>
      </$ContentContainer>
    </$Container>
  )
}

export default Article
