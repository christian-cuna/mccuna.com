import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FunctionComponent } from "react"
import ArticleIcon from "./ArticleIcon"
import { S_Container } from "./index.styles"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { faBell, faCopy } from "@fortawesome/free-regular-svg-icons"

export type Props = {
  className?: string
}

const ArticleIcons: FunctionComponent<Props> = ({ className }) => {
  return (
    <S_Container className={className}>
      <ArticleIcon
        icon={faArrowUp}
        label="To the top"
        onClick={() => alert("not implemented!")}
      />
      <ArticleIcon
        icon={faCopy}
        label="Copy article URL"
        onClick={() => alert("not implemented!")}
      />
      <ArticleIcon
        icon={faBell}
        label="Subscribe"
        onClick={() => alert("not implemented!")}
      />
    </S_Container>
  )
}

export default ArticleIcons
