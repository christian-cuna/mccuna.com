import styled from 'styled-components';

import { menuContainerHeight } from '../../Layout/index.styles';
import ArticleIcons from '../ArticleIcons';
import { imgHeight, S_Date } from '../Header/index.styles';

export const S_Container = styled.div``;

export const SC_ArticleIcons = styled(ArticleIcons)`
  position: fixed;
  right: 7.5%;
  top: calc(calc(${menuContainerHeight} + ${imgHeight}) * 0.75);
`;

export const S_BottomDate = styled(S_Date)`
  display: block;
  text-align: right;
`;
