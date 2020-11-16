import styled from 'styled-components';

import { deviceSizes } from '../../global/styles';

export const menuContainerHeight = '200px';
export const footerContainerHeight = {
  xs: '430px',
  md: '475px',
};

export const mainContainerWidths = {
  xs: '95%',
  sm: '90%',
  md: '80%',
  lg: '70%',
  xl: '60%',
};

export const S_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const S_MenuContainer = styled.div`
  height: ${menuContainerHeight};
  width: 100%;
`;

export const S_MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 2.5%;
  flex: 1 0
    calc(calc(100% - ${menuContainerHeight}) - ${footerContainerHeight.xs});
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
`;

export const S_FooterContainer = styled.div`
  width: 100%;
  padding-top: 35px;
  align-self: flex-end;
  height: ${footerContainerHeight.xs};
  min-height: ${footerContainerHeight.xs};
`;
