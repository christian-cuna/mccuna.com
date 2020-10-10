import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import styled from "styled-components"

const imgSize = "14rem"
const padding = "4%"

export const S_Link = styled(Link)`
  color: initial;
  text-decoration: none;
`

export const S_Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

export const S_Img = styled.img`
  width: ${imgSize};
  height: ${imgSize};
  margin: 0;
`

export const S_Details = styled.div`
  width: calc(100% - ${imgSize});
  height: 13rem;
  background-color: #efefef;
  padding: ${padding};
  position: relative;
  overflow: hidden;
`

export const S_Corner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translatex(50%) rotate(-45deg);
  display: inline-block;
  background-color: green;
  height: 120px;
  width: 100px;
  z-index: 0;
`

export const S_Title = styled.h5`
  margin-top: 0;
`

export const S_Excerpt = styled.p`
  margin-bottom: 0;
`

export const S_Icon = styled(FontAwesomeIcon)`
  position: absolute;
  right: ${padding};
  top: ${padding};
  z-index: 1;
`
