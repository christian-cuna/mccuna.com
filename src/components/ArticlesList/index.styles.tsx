import styled from 'styled-components';

import { deviceSizes } from '../../global/styles';
import ArticleListItem from './ArticleListItem';

export const S_Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const SC_ArticleListItem = styled(ArticleListItem)`
  margin-bottom: 25px;
  width: 100%;

  @media (min-width: ${deviceSizes.md}) {
    width: 47.5%;
  }

  @media (min-width: ${deviceSizes.xl}) {
    width: 32%;
  }
`;
