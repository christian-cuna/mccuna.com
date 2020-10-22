import {} from 'gatsby';
import styled from 'styled-components';
import { appBorderStyle, containerPadding } from '../../../global/styles';

export const S_Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 40%;
  padding: ${containerPadding} 0;
  margin: 0 30%;
  position: relative;
  border-bottom: ${appBorderStyle.containerBorder};
`;
