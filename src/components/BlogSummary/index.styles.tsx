import { Link } from "gatsby"
import styled from "styled-components"

export const S_Container = styled.div`
  width: 50%;
  height: 70%;
  border: 3px solid #000;
  overflow-y: auto;
  padding: 20px;
`

export const S_Title = styled.h4`
  margin: 0;
`

export const S_ReadAllLink = styled(Link)`
  padding-top: 20px;
  display: block;
`
