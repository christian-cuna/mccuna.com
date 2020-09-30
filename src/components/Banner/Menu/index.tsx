import React from "react"
import routes from "../../../utils/routes"
import { S_Link, S_Menu } from "./index.styles"

const Menu = () => {
  return (
    <S_Menu>
      <S_Link to={routes.home}>MC Cuna</S_Link>
      <S_Link to={routes.blog}>Blog</S_Link>
      <S_Link to={routes.about}>About</S_Link>
      <S_Link to={routes.contact}>Contact</S_Link>
    </S_Menu>
  )
}

export default Menu
