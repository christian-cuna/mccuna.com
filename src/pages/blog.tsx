import React, { FunctionComponent } from "react"
import ArticlesList from "../components/ArticlesList"
import { graphql } from "gatsby"
import { BlogIndexQuery } from "../../gatsby-graphql"
import { IArticleListItem } from "../models/IArticleListItem"
import { WrapStatus } from "../enums/WrapStatus"

export type Props = {
  data: BlogIndexQuery
  // data: BlogIndexQuery
}

const Blog: FunctionComponent<Props> = ({ data }) => {
  const articles: IArticleListItem[] = data.allMdx.edges.map(edge => ({
    title: edge.node.frontmatter.title,
    date: edge.node.frontmatter.date,
    excerpt: edge.node.excerpt,
    imageSrc: edge.node.frontmatter.imgSrc,
    slug: edge.node.slug,
  }))
  return (
    <div>
      <ArticlesList articles={articles}  />
    </div>
  )
}

export const query = graphql`
  query BlogIndex {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            date
            imgSrc
          }
          excerpt
          slug
        }
      }
    }
  }
`

export default Blog
