import styled from 'styled-components';

import { deviceSizes } from '../../global/styles';

export const mainContainerWidths = {
  xs: '95%',
  sm: '90%',
  md: '85%',
  lg: '80%',
  xl: '70%',
};

export const S_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const S_MenuContainer = styled.div`
  width: 100%;
`;

export const S_MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 2.5%;
  width: ${mainContainerWidths.xs};

  @media (min-width: ${deviceSizes.sm}) {
    width: ${mainContainerWidths.sm};
  }

  @media (min-width: ${deviceSizes.md}) {
    width: ${mainContainerWidths.md};
  }

  @media (min-width: ${deviceSizes.lg}) {
    width: ${mainContainerWidths.lg};
  }
  @media (min-width: ${deviceSizes.xl}) {
    width: ${mainContainerWidths.xl};
  }
  @media (min-width: ${deviceSizes.xxl}) {
    width: ${mainContainerWidths.xxl};
  }
`;

export const S_FooterContainer = styled.div`
  width: 100%;
  align-self: flex-end;
`;
