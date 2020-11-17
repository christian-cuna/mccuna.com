import styled from 'styled-components';

import { deviceSizes } from '../../global/styles';

export const S_Container = styled.div`
  width: 95%;
  @media (min-width: ${deviceSizes.xl}) {
    width: 70%;
  }
`;
