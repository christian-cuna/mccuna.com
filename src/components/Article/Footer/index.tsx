import React, { FunctionComponent } from "react"
import { LayoutOrientation } from "../../../enums/LayoutOrientation"
import { WrapStatus } from "../../../enums/WrapStatus"
import { IArticle } from "../../../models/IArticle"
import { IArticleListItem } from "../../../models/IArticleListItem"
import ArticlesList from "../../ArticlesList"
import { SC_ArticlesList } from "./index.styles"
import PaginationLinks from "./PaginationLinks"
import SocialInteractions from "./SocialInteractions"

export type Props = {
  article: IArticle
}

const Footer: FunctionComponent<Props> = ({ article }) => {
  return (
    <div>
      <PaginationLinks />
      <SocialInteractions />
      <SC_ArticlesList
        articles={mockArticles}
        wrapItems={WrapStatus.noWrap}
        itemLayoutOrientation={LayoutOrientation.vertical}
      />
    </div>
  )
}

const mockArticles: IArticleListItem[] = [
  {
    title: "Dummy article",
    date: "Oct 07 2020",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae lectus in turpis vehicula facilisis sit amet ultrices sem.",
    imageSrc: "https://via.placeholder.com/160",
    slug: "/dummy-0",
  },
  {
    title: "Dummy article",
    date: "Oct 07 2020",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae lectus in turpis vehicula facilisis sit amet ultrices sem.",
    imageSrc: "https://via.placeholder.com/160",
    slug: "/dummy-1",
  },
  {
    title: "Dummy article",
    date: "Oct 07 2020",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae lectus in turpis vehicula facilisis sit amet ultrices sem.",
    imageSrc: "https://via.placeholder.com/160",
    slug: "/dummy-2",
  },
]

export default Footer
