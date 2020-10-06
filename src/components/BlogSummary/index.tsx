import React, { FunctionComponent } from "react"
import ArticleBrief from "../ArticleBrief"
import { S_Container, S_ReadAllLink, S_Title } from "./index.styles"

export type Props = {}

const BlogSummary: FunctionComponent<Props> = ({}) => {
  return (
    <S_Container>
      <S_Title> BlogSummary works!</S_Title>
      <ArticleBrief />
      <ArticleBrief />
      <ArticleBrief />
      <ArticleBrief />
      <ArticleBrief />
      <S_ReadAllLink to="/dummy">Read all</S_ReadAllLink>
    </S_Container>
  )
}

export default BlogSummary
