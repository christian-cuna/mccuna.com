import styled from 'styled-components';

import { appBorderStyle } from '../../global/styles';
import { mainContainerWidths } from '../Layout/index.styles';

export const imgWidth = '220px';
export const imgHeight = '238px';

export const S_Container = styled.div`
  border-top: ${appBorderStyle.containerBorder};
  border-bottom: ${appBorderStyle.containerBorder};
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  top: 25%;

  @media (min-width: ${mainContainerWidths.md}) {
    right: calc(calc(100% - ${mainContainerWidths.md}) / 3);
    position: fixed;
    width: 250px;
    transform: translateX(50%);
  }
  @media (min-width: ${mainContainerWidths.lg}) {
    right: calc(calc(100% - ${mainContainerWidths.lg}) / 3);
  }
  @media (min-width: ${mainContainerWidths.xl}) {
    right: calc(calc(100% - ${mainContainerWidths.xl}) / 3);
  }
`;

export const S_Img = styled.img`
  width: ${imgWidth};
  height: ${imgHeight};
  border-radius: 50%;
`;

export const S_Description = styled.p`
  margin-bottom: 0;
  text-align: center;
`;
