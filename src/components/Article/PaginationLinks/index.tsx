import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React, { FunctionComponent } from "react"
import { S_Container } from "./index.styles"
import PaginationLink from "./PaginationLink"

export type Props = {}

const PaginationLinks: FunctionComponent<Props> = ({}) => {
  return (
    <S_Container>
      <Link to="/dummy-2">
        <FontAwesomeIcon icon={faArrowLeft} />
        To dynamically fetch previous article name
      </Link>
      <Link to="/dummy-0">
        To dynamically fetch next article name
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </S_Container>
  )
}

export default PaginationLinks
