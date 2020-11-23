import styled from 'styled-components';

import ArticleIcons from '../ArticleIcons';
import { S_Date } from '../Header/index.styles';

export const S_Container = styled.div`
  margin-top: 75px;
`;

export const SC_ArticleIcons = styled(ArticleIcons)`
  position: fixed;
  right: 7.5%;
  top: 40%;
`;

export const S_BottomDate = styled(S_Date)`
  display: block;
  text-align: right;
`;
