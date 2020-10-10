import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FunctionComponent } from "react"
import { IArticleBrief } from "../../models/IArticleBrief"
import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import {
  S_Container,
  S_Title,
  S_Excerpt,
  S_Date,
  S_ReadLink,
  S_DateContainer,
  S_DateIcon,
} from "./index.styles"

export type Props = {
  article: IArticleBrief
}

const ArticleBrief: FunctionComponent<Props> = ({ article }) => {
  return (
    <S_Container>
      <S_Title> {article.title}</S_Title>
      <S_DateContainer>
        <S_DateIcon icon={faCalendar} />
        <S_Date>{article.date}</S_Date>
      </S_DateContainer>
      <S_Excerpt>{article.description}</S_Excerpt>
      <S_ReadLink to={article.slug}>Read -&gt; </S_ReadLink>
    </S_Container>
  )
}

export default ArticleBrief
