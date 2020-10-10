import React, { FunctionComponent } from "react"

import { MDXProvider } from "@mdx-js/react"
import { IArticle } from "../../models/IArticle"
import {
  $HeaderContainer,
  $Date,
  $Container,
  $ImgContainer,
  $ContentContainer,
} from "./index.styles"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

export type Props = IArticle

const Article: FunctionComponent<Props> = ({
  title,
  img,
  imgLabel,
  content,
  date,
}) => {
  debugger
  return (
    <$Container>
      <$HeaderContainer>
        <h1>{title}</h1>
        <$Date>{date}</$Date>
      </$HeaderContainer>
      <$ImgContainer>
        <img src={img} />
        <span>{imgLabel}</span>
      </$ImgContainer>
      <$ContentContainer>
        <MDXProvider components={{ Link }}>
          <MDXRenderer>{content}</MDXRenderer>
        </MDXProvider>
      </$ContentContainer>
    </$Container>
  )
}

export default Article
