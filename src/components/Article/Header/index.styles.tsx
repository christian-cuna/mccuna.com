import Img, { FluidObject } from 'gatsby-image';
import styled from 'styled-components';

import { deviceSizes } from '../../../global/styles';

export const imgHeight = '410px';

export const S_Container = styled.div`
  margin-bottom: 20px;
`;

export const S_TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  padding-bottom: 8px;

  @media (min-width: ${deviceSizes.md}) {
    justify-content: space-between;
  }
`;

export const S_Title = styled.h1`
  margin-bottom: 0.6rem;
`;

export const S_Date = styled.span`
  font-size: 0.7rem;
`;

export const S_ImgContainer = styled.div`
  width: 100%;
`;

export const SC_Img = styled(Img)<{ fluid: FluidObject | FluidObject[] }>`
  width: 100%;
  height: ${imgHeight};
  margin-bottom: 0.6rem;
`;

export const S_ImgCredits = styled.span`
  display: block;
  text-align: center;
  font-size: 0.8rem;
`;
