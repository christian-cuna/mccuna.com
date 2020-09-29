import React, { FunctionComponent } from "react"
import { S_Container, S_Title, S_Excerpt, S_ReadLink } from "./index.styles"

export type Props = {}

const Article: FunctionComponent<Props> = ({}) => {
  return (
    <S_Container>
      <S_Title> Article works!</S_Title>
      <S_Excerpt>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </S_Excerpt>
      <S_ReadLink to="/dummy">Read -&gt; </S_ReadLink>
    </S_Container>
  )
}

export default Article
