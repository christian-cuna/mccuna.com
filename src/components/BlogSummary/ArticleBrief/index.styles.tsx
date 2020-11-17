import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import styled from 'styled-components';

import {
  appBorderStyle,
  appColors,
  containerPadding,
  deviceSizes,
} from '../../../global/styles';

const hoverBorderWidth = '15px';

export const S_Container = styled.div`
  padding: ${containerPadding.xs}
    calc(${containerPadding.xs} + ${hoverBorderWidth});
  border-top: ${appBorderStyle.containerBorder};
  cursor: pointer;

  &:nth-child(odd) {
    border-left: ${appBorderStyle.containerBorder};

    &:hover {
      border-right: ${hoverBorderWidth} solid ${appColors.secondaryColor};
      padding-right: ${containerPadding.xs};
    }
  }

  &:nth-child(even) {
    border-right: ${appBorderStyle.containerBorder};

    &:hover {
      border-left: ${hoverBorderWidth} solid ${appColors.secondaryColor};
      padding-left: ${containerPadding.xs};
    }
  }

  &:not(:first-child) {
    margin-top: 2px;
  }

  &:not(:last-child) {
    border-bottom: ${appBorderStyle.containerBorder};
  }
`;

export const S_ContainerLink = styled(Link)`
  color: ${appColors.darkGray};
  text-shadow: 0 0 #000;
  text-decoration: none;
`;

export const S_Header = styled.div`
  display: flex;
  align-items: center;
`;

export const S_Title = styled.h3`
  margin-bottom: 0;
  margin-top: 0;

  ${S_Container}:hover & {
    color: ${appColors.primaryColor};
  }
`;

export const SC_Img = styled(Img)<{ fixed: FixedObject | FixedObject[] }>`
  margin-left: 20px;
`;

export const S_DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  ${S_Container}:hover & {
    color: ${appColors.primaryColor};
  }
`;

export const SC_DateIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  display: inline-block;
`;

export const S_Date = styled.span`
  display: inline-block;
  font-size: 0.7rem;
`;

export const S_Excerpt = styled.p`
  margin-bottom: 10px;
  width: 100%;

  ${S_Container}:hover & {
    color: ${appColors.primaryColor};
  }

  @media (min-width: ${deviceSizes.xl}) {
    width: 75%;
  }
`;

export const S_Read = styled.span`
  color: ${appColors.primaryColor};
  text-shadow: 0 0 #000;
  text-decoration: none;

  ${S_Container}:hover & {
    color: ${appColors.secondaryColor};
  }
`;

export const SC_ReadLinkArrowICon = styled(FontAwesomeIcon)`
  margin-left: 5px;
`;
