import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        width: 100%;
        height: 100%;
    }

    body {
        width: 100%;
        height: 100%;
        margin: 0;
    }
`

export default function ({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
