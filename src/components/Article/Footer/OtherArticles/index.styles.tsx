import styled from 'styled-components';

import { deviceSizes } from '../../../../global/styles';
import ArticlesList from '../../../ArticlesList';
import { SC_ArticleListItem } from '../../../ArticlesList/index.styles';

export const SC_ArticlesList = styled(ArticlesList)`
  > ${SC_ArticleListItem} {
    width: 100%;

    @media (min-width: ${deviceSizes.xl}) {
      width: 32%;
    }
  }
`;
