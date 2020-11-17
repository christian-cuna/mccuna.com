import styled from 'styled-components';

import { deviceSizes } from '../../../global/styles';

export const S_Container = styled.div`
  display: none;

  @media (min-width: ${deviceSizes.xl}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 5rem;
    width: 6.5rem;
  }
`;
