import styled, { css } from 'styled-components';

import { LayoutOrientation } from '../../enums/LayoutOrientation';
import { WrapStatus } from '../../enums/WrapStatus';
import { appBorderStyle, deviceSizes } from '../../global/styles';
import ArticleListItem from './ArticleListItem';

export type S_Props = {
  wrapItems: WrapStatus;
  itemsLayoutOrientation: LayoutOrientation;
};

const S_BaseContainer = styled.div<S_Props>`
  display: flex;
  justify-content: space-between;
  align-content: space-around;
  padding-bottom: 35px;

  @media (min-width: ${deviceSizes.md}) {
    flex-wrap: ${props => {
      return props.wrapItems === WrapStatus.wrap ? 'wrap' : 'nowrap';
    }};
  }
`;

const horizontalContainerCss = css`
  flex-direction: row;
`;

const verticalContainerCss = css`
  flex-direction: column;
`;

export const S_Container = styled(S_BaseContainer)`
  flex-direction: column;
  align-items: center;

  @media (min-width: ${deviceSizes.md}) {
    align-items: initial;
    ${props => {
      return props.itemsLayoutOrientation === LayoutOrientation.horizontal
        ? horizontalContainerCss
        : verticalContainerCss;
    }};
  }
`;

const SC_BaseArticleListItem = styled(ArticleListItem)``;

const horizontalArticleListItemCss = css`
  width: 47.5%;
  height: 14rem;
  margin-top: 20px;
`;

const verticalArticleListItemCss = css`
  height: 18rem;
  width: 100%;
  padding: 5px 0;
  margin-bottom: 2.5px;

  @media (min-width: ${deviceSizes.xl}) {
    width: 30%;
    border-bottom: ${appBorderStyle.containerBorder};
    border-top: ${appBorderStyle.containerBorder};
  }
`;

export const SC_ArticleListItem = styled(SC_BaseArticleListItem)`
  height: 22rem;
  width: 90%;
  padding: 5px 0;
  margin-bottom: 2.5px;

  @media (min-width: ${deviceSizes.md}) {
    width: 47.5%;
  }
  @media (min-width: ${deviceSizes.xl}) {
    ${props => {
      return props.layoutOrientation === LayoutOrientation.horizontal
        ? horizontalArticleListItemCss
        : verticalArticleListItemCss;
    }};
  }
`;
