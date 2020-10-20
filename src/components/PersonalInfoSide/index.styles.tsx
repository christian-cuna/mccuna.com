import styled from 'styled-components';
import { appBorderStyle } from '../../global/styles';
import { mainContainerWidth } from '../Layout/index.styles';

export const S_Container = styled.div`
  border-top: ${appBorderStyle.containerBorder};
  border-bottom: ${appBorderStyle.containerBorder};
  padding: 15px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: calc(calc(calc(100% - ${mainContainerWidth}) / 2) / 2);
  top: 25%;
  transform: translateX(50%);
`;

export const S_Description = styled.p`
  margin-top: 15px;
  margin-bottom: 0;
  text-align: center;
`;
