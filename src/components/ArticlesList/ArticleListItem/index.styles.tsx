import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled, { css } from 'styled-components';

import { LayoutOrientation } from '../../../enums/LayoutOrientation';
import { appBorderStyle, appColors, deviceSizes } from '../../../global/styles';

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

const containerHorizontalCss = css`
  flex-direction: row;
`;

const containerVerticalCss = css`
  flex-direction: column;
  position: relative;
  overflow: hidden;
  &:hover {
    border-right: 5px solid ${appColors.secondaryColor};
    border-bottom: 5px solid ${appColors.secondaryColor};
  }

  border-bottom: ${appBorderStyle.containerBorder};
`;

export const S_Container = styled(S_BaseContainer)<S_Props>`
  flex-direction: column;
  position: relative;
  overflow: hidden;
  &:hover {
    border-right: 5px solid ${appColors.secondaryColor};
    border-bottom: 5px solid ${appColors.secondaryColor};
  }
  @media (min-width: ${deviceSizes.xl}) {
    ${props => {
      return props.layoutOrientation === LayoutOrientation.horizontal
        ? containerHorizontalCss
        : containerVerticalCss;
    }}
  }
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
  ${imgVerticalCss};
  @media (min-width: ${deviceSizes.xl}) {
    ${props => {
      return props.layoutOrientation === LayoutOrientation.horizontal
        ? imgHorizontalCss
        : imgVerticalCss;
    }}
  }
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
`;

export const S_Details = styled(S_BaseDetails)<S_Props>`
  width: 100%;
  height: 200px;
  @media (min-width: ${deviceSizes.xl}) {
    ${props => {
      return props.layoutOrientation === LayoutOrientation.horizontal
        ? detailsHorizontalCss
        : detailsVerticalCss;
    }}
  }
`;

export const S_Corner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translatex(50%) rotate(-45deg);
  display: inline-block;
  background-color: ${appColors.primaryColor};
  height: 70px;
  width: 70px;
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
  top: 2%;
`;

const horizontalIconCss = css`
  right: 1.5%;
`;

const verticalIconCss = css`
  right: 1.75%;
`;

// Prevent passing layoutOrientation to the FontAwesomeIcon
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SC_Icon = styled(({ layoutOrientation, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <S_BaseIcon {...props} />
))<S_Props>`
  ${verticalIconCss};
  @media (min-width: ${deviceSizes.xl}) {
    ${props => {
      return props.layoutOrientation === LayoutOrientation.horizontal
        ? horizontalIconCss
        : verticalIconCss;
    }}
  }
`;
