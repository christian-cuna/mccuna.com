import styled from 'styled-components';

import { deviceSizes } from '../../global/styles';

export const S_Container = styled.div`
  margin-top: 20px;
`;

export const S_Header = styled.h1`
  margin-top: 0;
`;

export const S_Description = styled.h2`
  margin-top: 1.2rem;
  width: 100%;

  @media (min-width: ${deviceSizes.md}) {
    width: 75%;
  }
`;
