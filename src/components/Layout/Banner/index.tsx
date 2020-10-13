import React, { FunctionComponent } from "react"
import {
  S_1Description,
  S_Container,
  S_LeftContent,
  S_RightContent,
} from "./index.styles"
import Menu from "./Menu"

export type Props = {}

const IndexBanner: FunctionComponent<Props> = ({}) => {
  return (
    <S_Container>
      <S_LeftContent>
        <Menu />
        <S_1Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </S_1Description>
      </S_LeftContent>
      <S_RightContent>
        <img src="https://via.placeholder.com/150" />
      </S_RightContent>
    </S_Container>
  )
}

export default IndexBanner
