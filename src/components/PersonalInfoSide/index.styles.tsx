import styled from 'styled-components';
import { appBorderStyle, appColors } from '../../global/styles';
import { mainContainerWidth } from '../Layout/index.styles';

export const S_Container = styled.div`
  border-top: ${appBorderStyle.containerBorder};
  border-bottom: ${appBorderStyle.containerBorder};
  padding: 15px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: calc(calc(100% - ${mainContainerWidth}) / 3);
  top: 25%;
  transform: translateX(50%);
`;

export const S_Img = styled.img`
  width: 220px;
  height: 225px;
  border-radius: 50%;
  background-color: ${appColors.secondaryColor};
`;

export const S_Description = styled.p`
  margin-bottom: 0;
  text-align: center;
`;
