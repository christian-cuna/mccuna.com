import React, { FunctionComponent } from "react"
import { IArticleListItem } from "../../models/ArticleListItem"
import {
  S_Container,
  S_Details,
  S_Img,
  S_Title,
  S_Excerpt,
} from "./index.styles"

export type Props = {
  article: IArticleListItem
}

const ArticleListItem: FunctionComponent<Props> = ({ article }) => {
  return (
    <S_Container>
      <S_Img src={article.immageSrc} />
      <S_Details>
        <S_Title>{article.title}</S_Title>
        <S_Excerpt>{article.excerpt}</S_Excerpt>
      </S_Details>
    </S_Container>
  )
}

export default ArticleListItem
