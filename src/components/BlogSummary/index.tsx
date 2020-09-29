import React, { FunctionComponent } from "react"
import Article from "../Article"
import { S_Container, S_ReadAllLink, S_Title } from "./index.styles"

export type Props = {}

const BlogSummary: FunctionComponent<Props> = ({}) => {
  return (
    <S_Container>
      <S_Title> BlogSummary works!</S_Title>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <S_ReadAllLink to="/dummy">Read all</S_ReadAllLink>
    </S_Container>
  )
}

export default BlogSummary
