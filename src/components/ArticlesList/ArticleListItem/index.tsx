import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FunctionComponent, useState } from "react"
import {
  S_Container,
  S_Details,
  S_Img,
  S_Title,
  S_Excerpt,
  S_Icon,
  S_Corner,
  S_Link,
} from "./index.styles"
import { faDoorClosed, faDoorOpen } from "@fortawesome/free-solid-svg-icons"
import { IArticleListItem } from "../../../models/IArticleListItem"

export type Props = {
  article: IArticleListItem
}

const ArticleListItem: FunctionComponent<Props> = ({ article }) => {
  const [detailsIcon, setDetailsIcon] = useState(faDoorClosed)
  debugger
  return (
    <S_Link to={article.slug}>
      <S_Container>
        <S_Img src={article.imageSrc} />
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
    </S_Link>
  )
}

export default ArticleListItem
