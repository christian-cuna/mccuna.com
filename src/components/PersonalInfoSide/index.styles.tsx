import styled from 'styled-components';

import { appBorderStyle, deviceSizes } from '../../global/styles';
import { mainContainerWidths } from '../Layout/index.styles';

export const imgWidth = '220px';
export const imgHeight = '238px';

export const S_Container = styled.div`
  border-top: ${appBorderStyle.containerBorder};
  border-bottom: ${appBorderStyle.containerBorder};
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;

  @media (min-width: ${deviceSizes.xl}) {
    right: calc(calc(100% - ${mainContainerWidths.xl}) / 3);
    position: fixed;
    width: 250px;
    top: 20%;
    padding: 10px;
    transform: translateX(50%);
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
