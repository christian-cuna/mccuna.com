import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import styled from 'styled-components';

import { appColors } from '../../../global/styles';

export const SC_Link = styled(Link)`
  width: 100%;
  height: 500px;
  text-decoration: none;
  color: initial;
`;

export const S_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const SC_Image = styled(Img)<{ fluid: FluidObject | FluidObject[] }>`
  width: 100%;
  height: 300px;

  ${S_Container}:hover & {
    filter: contrast(120%);
  }
`;

const detailsYPadding = '20px';
const detailsYBorderWidth = '3px';
const detailsXPadding = '5px';
const detailsXBorderWidth = '3px';

export const S_Details = styled.div`
  height: auto;
  width: 100%;
  border-right: 1px solid ${appColors.primaryColor};
  border-bottom: 1px solid ${appColors.primaryColor};
  padding: ${detailsYPadding} ${detailsXPadding};

  ${S_Container}:hover & {
    padding-right: calc(${detailsXPadding} - ${detailsXBorderWidth});
    border-right: ${detailsXBorderWidth} solid ${appColors.secondaryColor};
    padding-bottom: calc(${detailsYPadding} - ${detailsYBorderWidth});
    border-bottom: ${detailsYBorderWidth} solid ${appColors.secondaryColor};
  }
`;

export const S_Title = styled.h3`
  margin-bottom: 0.6rem;

  ${S_Container}:hover & {
    color: ${appColors.primaryColor};
  }
`;

export const S_Excerpt = styled.p`
  margin-bottom: 0;
  ${S_Container}:hover & {
    color: ${appColors.primaryColor};
  }
`;
