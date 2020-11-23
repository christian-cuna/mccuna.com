import styled from 'styled-components';

import { deviceSizes } from '../../global/styles';

export const S_Container = styled.div`
  width: 95%;
  margin-top: 25px;
  @media (min-width: ${deviceSizes.xl}) {
    width: 70%;
  }
`;
