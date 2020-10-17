import React, { FunctionComponent } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { LayoutOrientation } from "../../../enums/LayoutOrientation"

export const imgSize = "14rem"
const padding = "4%"

export type S_Props = {
  layoutOrientation: LayoutOrientation;
}

export const S_Link = styled(Link)`
  display: block;
  height: 100%;
  color: initial;
  text-decoration: none;
`
const S_BaseContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

const containerHorizontalCss = css``

const containerVerticalCss = css`
  flex-direction: column;
  position: relative;
  overflow: hidden;
`

export const S_Container = styled(S_BaseContainer)<S_Props>` 
  ${props => props.layoutOrientation === LayoutOrientation.horizontal ? containerHorizontalCss : containerVerticalCss }
`

const S_BaseImg = styled.img`
  height: ${imgSize};
  margin: 0;
`

const imgHorizontalCss = css`
width: ${imgSize};
`

const imgVerticalCss = css`
width: 100%;
`

export const S_Img = styled(S_BaseImg)<S_Props>`
  ${props => props.layoutOrientation === LayoutOrientation.horizontal ? imgHorizontalCss : imgVerticalCss}
`

const S_BaseDetails = styled.div`
  background-color: #efefef;
  padding: ${padding};
`

const detailsHorizontalCss = css`
  width: calc(100% - ${imgSize});
  position: relative;
  overflow: hidden;
  height: 13rem;
`
const detailsVerticalCss = css`
  width: 100%;
  height: 100%;
`

export const S_Details = styled(S_BaseDetails)<S_Props>`
  ${props => props.layoutOrientation === LayoutOrientation.horizontal ? detailsHorizontalCss : detailsVerticalCss}
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

const S_BaseIcon = styled(FontAwesomeIcon)`
position: absolute;
  z-index: 1;
`

const horizontalIconCss = css`

right: ${padding};
top: ${padding};
`
  


const verticalIconCss = css`
  top: 4%;
  right: 2%;
`

export const S_Icon = styled(S_BaseIcon)<S_Props>`
  ${props => props.layoutOrientation === LayoutOrientation.horizontal ? horizontalIconCss : verticalIconCss}
`
