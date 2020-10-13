import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FunctionComponent } from "react"
import { S_ContainerLink } from "./index.styles"

export type Props = {
  icon: IconProp
  label: string
  url: string
}

const SocialInteraction: FunctionComponent<Props> = ({ icon, label, url }) => {
  return (
    <S_ContainerLink href={url}>
      <FontAwesomeIcon icon={icon} size="3x" />
      {label}
    </S_ContainerLink>
  )
}

export default SocialInteraction
