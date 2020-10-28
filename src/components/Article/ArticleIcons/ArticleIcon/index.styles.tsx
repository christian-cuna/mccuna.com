import styled from 'styled-components';
import { appColors } from '../../../../global/styles';

export const S_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 100%;

  :hover {
    font-weight: 600;
    color: ${appColors.secondaryColor};
  }
`;

export const S_Label = styled.span`
  font-size: 0.75rem;
`;
