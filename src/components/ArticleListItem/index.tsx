import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FunctionComponent, useState } from "react"
import { IArticleListItem } from "../../models/ArticleListItem"
import {
  S_Container,
  S_Details,
  S_Img,
  S_Title,
  S_Excerpt,
  S_Icon,
  S_Corner,
} from "./index.styles"
import { faDoorClosed, faDoorOpen } from "@fortawesome/free-solid-svg-icons"

export type Props = {
  article: IArticleListItem
}

const ArticleListItem: FunctionComponent<Props> = ({ article }) => {
  const [detailsIcon, setDetailsIcon] = useState(faDoorClosed)

  return (
    <S_Container>
      <S_Img src={article.immageSrc} />
      <S_Details
        onMouseEnter={() => setDetailsIcon(faDoorOpen)}
        onMouseLeave={() => setDetailsIcon(faDoorClosed)}
      >
        <S_Icon icon={detailsIcon} />
        <S_Corner />
        <S_Title>{article.title}</S_Title>
        <S_Excerpt>{article.excerpt}</S_Excerpt>
      </S_Details>
    </S_Container>
  )
}

export default ArticleListItem
