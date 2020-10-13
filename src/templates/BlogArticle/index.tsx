import { graphql } from "gatsby"
import React, { FunctionComponent } from "react"
import { ArticleQuery } from "../../../gatsby-graphql"
import Article from "../../components/Article"
import { IArticle } from "../../models/IArticle"
import {} from "./index.styles"

export type Props = {
  data: ArticleQuery
}

const BlogArticle: FunctionComponent<Props> = ({ data }) => {
  const article: IArticle = {
    title: data.mdx.frontmatter.title,
    content: data.mdx.body,
    date: new Date(data.mdx.frontmatter.date).toDateString(),
    img: data.mdx.frontmatter.imgSrc,
    imgLabel: data.mdx.frontmatter.imgLabel,
  }
  return <Article article={article} />
}

export const query = graphql`
  query Article($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        imgSrc
        imgLabel
      }
      body
    }
  }
`

export default BlogArticle
