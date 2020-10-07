import React, { FunctionComponent } from "react"
import { IArticle } from "../../models/IArticle"
import { S_Header, S_Date } from "./index.styles"

export type Props = IArticle

const Article: FunctionComponent<Props> = ({
  title,
  img,
  imgLabel,
  content,
  date,
}) => {
  return (
    <S_Header>
      <h1>{title}</h1>
      <S_Date>{date}</S_Date>
    </S_Header>
  )
}

export default Article
