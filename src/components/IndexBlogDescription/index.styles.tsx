import styled from 'styled-components';
import { appColors, appBorderStyle } from '../../global/styles';

export const S_Container = styled.div`
  border-bottom: ${appBorderStyle.containerBorder};
`;

export const S_Header = styled.h1`
  margin-top: 0;
`;

export const S_Description = styled.h2`
  margin-top: 1.2rem;
  width: 75%;
`;
