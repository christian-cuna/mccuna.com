import React, { FunctionComponent } from "react"
import { IArticle } from "../../../models/IArticle"
import { S_Container } from "./index.styles"
import PaginationLinks from "./PaginationLinks"
import SocialInteractions from "./SocialInteractions"

export type Props = {
  article: IArticle
}

const Footer: FunctionComponent<Props> = ({ article }) => {
  return (
    <S_Container>
      <PaginationLinks />
      <SocialInteractions />
    </S_Container>
  )
}

export default Footer
