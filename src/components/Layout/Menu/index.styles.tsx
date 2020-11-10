import styled from 'styled-components';

import { appBorderStyle, containerPadding } from '../../../global/styles';
import MenuItem from './MenuItem';

export const S_Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 40%;
  padding: ${containerPadding} 0;
  margin: 0 30%;
  position: relative;
  border-bottom: ${appBorderStyle.containerBorder};
  border-bottom-width: 3px;
`;

export const SC_MenuItem = styled(MenuItem)`
  width: 20%;
  margin-left: 4%;
  &:last-child {
    margin-right: 4%;
  }
`;
