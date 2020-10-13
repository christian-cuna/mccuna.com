import React, { FunctionComponent } from "react"
import { IArticleBrief } from "../../models/IArticleBrief"
import ArticleBrief from "./ArticleBrief"
import { S_Container, S_ReadAllLink, S_Title } from "./index.styles"

export type Props = {
  articles: IArticleBrief[]
}

const BlogSummary: FunctionComponent<Props> = ({ articles }) => {
  return (
    <S_Container>
      <S_Title> BlogSummary works!</S_Title>
      {articles.map(article => (
        <ArticleBrief article={article} />
      ))}
      <S_ReadAllLink to="/dummy">Read all</S_ReadAllLink>
    </S_Container>
  )
}

export default BlogSummary
