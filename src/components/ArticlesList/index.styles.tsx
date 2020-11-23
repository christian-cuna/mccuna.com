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
  flex-wrap: ${props => {
    return props.wrapItems === WrapStatus.wrap ? 'wrap' : 'nowrap';
  }};
  align-content: space-around;
  padding-bottom: 35px;
`;

const horizontalContainerCss = css``;
const verticalContainerCss = css`
  flex-direction: column;
`;

export const S_Container = styled(S_BaseContainer)`
  ${props => {
    return props.itemsLayoutOrientation === LayoutOrientation.horizontal
      ? horizontalContainerCss
      : verticalContainerCss;
  }};
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
  border-top: ${appBorderStyle.containerBorder};
  border-bottom: ${appBorderStyle.containerBorder};
  padding: 5px 0;
  margin-bottom: 2.5px;

  @media (min-width: ${deviceSizes.xl}) {
    width: 30%;
  }
`;

export const SC_ArticleListItem = styled(SC_BaseArticleListItem)`
  ${props => {
    return props.layoutOrientation === LayoutOrientation.horizontal
      ? horizontalArticleListItemCss
      : verticalArticleListItemCss;
  }};
`;
