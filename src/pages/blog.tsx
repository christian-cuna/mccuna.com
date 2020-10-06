import React, { FunctionComponent } from "react"
import { IArticleListItem } from "../models/ArticleListItem"
import ArticleListItem from "../components/ArticleListItem"
import ArticlesList from "../components/ArticlesList"

export type Props = {}

const Blog: FunctionComponent = ({}) => {
  return (
    <div>
      <ArticlesList articles={mockArticles} />
    </div>
  )
}

const mockArticles: IArticleListItem[] = [
  {
    title: "Article",
    immageSrc: "https://via.placeholder.com/160",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Article",
    immageSrc: "https://via.placeholder.com/160",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Article",
    immageSrc: "https://via.placeholder.com/160",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Article",
    immageSrc: "https://via.placeholder.com/160",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Article",
    immageSrc: "https://via.placeholder.com/160",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Article",
    immageSrc: "https://via.placeholder.com/160",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Article",
    immageSrc: "https://via.placeholder.com/160",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Article",
    immageSrc: "https://via.placeholder.com/160",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Article",
    immageSrc: "https://via.placeholder.com/160",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Article",
    immageSrc: "https://via.placeholder.com/160",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Article",
    immageSrc: "https://via.placeholder.com/160",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Article",
    immageSrc: "https://via.placeholder.com/160",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Article",
    immageSrc: "https://via.placeholder.com/160",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Article",
    immageSrc: "https://via.placeholder.com/160",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Article",
    immageSrc: "https://via.placeholder.com/160",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]

export default Blog
