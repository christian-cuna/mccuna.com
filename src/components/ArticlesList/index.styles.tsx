import styled from 'styled-components';

import ArticleListItem from './ArticleListItem';

export const S_Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const SC_ArticleListItem = styled(ArticleListItem)`
  margin-bottom: 25px;
`;
