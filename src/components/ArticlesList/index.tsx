import React, { FunctionComponent } from "react"
import { IArticleListItem } from "../../models/IArticleListItem"
import ArticleListItem from "../ArticleListItem"
import { S_Container, S_Item } from "./index.styles"

export type Props = {
  articles: IArticleListItem[]
}

const ArticlesList: FunctionComponent<Props> = ({ articles }) => {
  return (
    <S_Container>
      {articles.map(article => (
        <S_Item>
          <ArticleListItem article={article} />
        </S_Item>
      ))}
    </S_Container>
  )
}

export default ArticlesList
