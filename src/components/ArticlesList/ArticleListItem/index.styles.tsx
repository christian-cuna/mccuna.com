import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { LayoutOrientation } from '../../../enums/LayoutOrientation';
import { appBorderStyle, appColors } from '../../../global/styles';
import Img, { FluidObject } from 'gatsby-image';

export const imgSize = '260px';
const padding = '4%';

export type S_Props = {
  layoutOrientation: LayoutOrientation;
};

export const S_Link = styled(Link)`
  display: block;
  height: 100%;
  color: initial;
  text-decoration: none;
`;
const S_BaseContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const containerHorizontalCss = css``;

const containerVerticalCss = css`
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const S_Container = styled(S_BaseContainer)<S_Props>`
  ${props =>
    props.layoutOrientation === LayoutOrientation.horizontal
      ? containerHorizontalCss
      : containerVerticalCss}
`;

const S_BaseImg = styled(Img)<{ fluid: FluidObject | FluidObject[] }>`
  height: ${imgSize};
  margin: 0;
`;

const imgHorizontalCss = css`
  width: ${imgSize};
`;

const imgVerticalCss = css`
  width: 100%;
`;

export const SC_Img = styled(S_BaseImg)<S_Props>`
  ${props =>
    props.layoutOrientation === LayoutOrientation.horizontal
      ? imgHorizontalCss
      : imgVerticalCss}
`;

const S_BaseDetails = styled.div`
  padding: ${padding};
`;

const detailsHorizontalCss = css`
  width: calc(100% - ${imgSize});
  position: relative;
  overflow: hidden;
  height: 13rem;
  border-right: ${appBorderStyle.containerBorder};

  ${S_Container}:hover & {
    padding-right: calc(${padding} - 5px);
    border-right: 5px solid ${appColors.secondaryColor};
    border-bottom: 5px solid ${appColors.secondaryColor};
  }
`;
const detailsVerticalCss = css`
  width: 100%;
  height: 100%;
  border-bottom: ${appBorderStyle.containerBorder};
`;

export const S_Details = styled(S_BaseDetails)<S_Props>`
  ${props =>
    props.layoutOrientation === LayoutOrientation.horizontal
      ? detailsHorizontalCss
      : detailsVerticalCss}
`;

export const S_Corner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translatex(50%) rotate(-45deg);
  display: inline-block;
  background-color: ${appColors.primaryColor};
  height: 65px;
  width: 65px;
  z-index: 0;

  ${S_Container}:hover & {
    background-color: ${appColors.secondaryColor};
  }
`;

export const S_Title = styled.h5`
  margin-top: 0;
`;

export const S_Excerpt = styled.p`
  margin-bottom: 0;
`;

const S_BaseIcon = styled(FontAwesomeIcon)`
  position: absolute;
  z-index: 1;
  color: #fff;
`;

const horizontalIconCss = css`
  top: 1%;
  right: 1%;
`;

const verticalIconCss = css`
  top: 4%;
  right: 2%;
`;

// Prevent passing layoutOrientation to the FontAwesomeIcon
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const S_Icon = styled(({ layoutOrientation, ...props }) => (
  <S_BaseIcon {...props} />
))<S_Props>`
  ${props =>
    props.layoutOrientation === LayoutOrientation.horizontal
      ? horizontalIconCss
      : verticalIconCss}
`;
