import styled from 'styled-components';
import { bannerContainerHeight } from '../../Layout/index.styles';
import { imgHeight, S_Date } from '../Header/index.styles';
import ArticleIcons from './ArticleIcons';

export const S_Container = styled.div``;

export const SC_ArticleIcons = styled(ArticleIcons)`
  position: fixed;
  right: 7.5%;
  top: calc(calc(${bannerContainerHeight} + ${imgHeight}) * 0.75);
`;

export const S_BottomDate = styled(S_Date)`
  display: block;
  text-align: right;
`;
