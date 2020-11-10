import Img, { FluidObject } from 'gatsby-image';
import styled from 'styled-components';

export const imgHeight = '410px';

export const S_Container = styled.div``;

export const S_TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
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
  margin-bottom: 0;
`;

export const S_ImgCredits = styled.span`
  display: block;
  text-align: center;
  font-size: 0.8rem;
`;
