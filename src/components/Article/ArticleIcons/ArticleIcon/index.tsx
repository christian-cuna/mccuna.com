import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FunctionComponent } from "react"
import { S_Container, S_Label } from "./index.styles"

export type Props = {
  icon: IconProp
  label: string
  onClick: () => void
}

const ArticleIcon: FunctionComponent<Props> = ({ icon, label, onClick }) => {
  return (
    <S_Container onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
      <S_Label>{label}</S_Label>
    </S_Container>
  )
}

export default ArticleIcon
