import styled from 'styled-components';
import { appBorderStyle } from '../../../global/styles';

export const S_Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const S_IconsContainer = styled.div`
  border-top: ${appBorderStyle.containerBorder};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  margin-left: 70%;
`;
