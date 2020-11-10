import styled from 'styled-components';

import { appColors } from '../../../../../global/styles';

export const S_ContainerLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  color: ${appColors.primaryColor};
`;

export const S_Label = styled.span`
  ${S_ContainerLink}:hover & {
    color: ${appColors.secondaryColor};
  }
`;
