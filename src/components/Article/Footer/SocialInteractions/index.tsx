import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import React, { FunctionComponent } from "react"
import { S_Container } from "./index.styles"
import SocialInteraction from "./SocialInteraction"

export type Props = {}

const SocialInteractions: FunctionComponent<Props> = ({}) => {
  return (
    <S_Container>
      <SocialInteraction
        icon={faTwitter}
        label="Share"
        url="javascript:void();"
      />
      <SocialInteraction
        icon={faLinkedin}
        label="Share"
        url="javascript:void();"
      />
      <SocialInteraction
        icon={faGithub}
        label="Edit on GitHub"
        url="javascript:void();"
      />
    </S_Container>
  )
}

export default SocialInteractions
