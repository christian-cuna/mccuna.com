import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import styled from 'styled-components';

import { appColors } from '../../../global/styles';

export const SC_Link = styled(Link)`
  width: 600px;
  height: 250px;
  text-decoration: none;
  color: initial;
`;

export const S_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const SC_Image = styled(Img)<{ fluid: FluidObject | FluidObject[] }>`
  width: 250px;
  height: 250px;
`;

const cornerWidth = '80px';
const cornerHeight = '100px';

export const S_Corner = styled.div`
  background-color: ${appColors.primaryColor};
  width: ${cornerWidth};
  height: ${cornerHeight};
  transform: rotate(45deg);
  position: absolute;
  top: calc(calc(calc(${cornerHeight} / 2) + 0.5rem) * -1);
  right: calc(calc(calc(${cornerWidth} / 2) + 0.5rem) * -1);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 5px;

  ${S_Container}:hover & {
    background-color: ${appColors.secondaryColor};
  }
`;

export const SC_Icon = styled(FontAwesomeIcon)`
  color: #fff;
`;

const detailsYPadding = '20px';
const detailsYBorderWidth = '3px';
const detailsXPadding = '5px';
const detailsXBorderWidth = '3px';

export const S_Details = styled.div`
  height: auto;
  width: 350px;
  border-right: 1px solid ${appColors.primaryColor};
  padding: ${detailsYPadding} ${detailsXPadding};
  position: relative;
  overflow: hidden;

  ${S_Container}:hover & {
    padding-right: calc(${detailsXPadding} - ${detailsXBorderWidth});
    border-right: ${detailsXBorderWidth} solid ${appColors.secondaryColor};
    padding-bottom: calc(${detailsYPadding} - ${detailsYBorderWidth});
    border-bottom: ${detailsYBorderWidth} solid ${appColors.secondaryColor};
    padding-top: calc(${detailsYPadding} - ${detailsYBorderWidth});
    border-top: ${detailsYBorderWidth} solid ${appColors.secondaryColor};
  }
`;

export const S_Title = styled.h3`
  margin-bottom: 0.6rem;
`;

export const S_Excerpt = styled.p`
  margin-bottom: 0;
`;
