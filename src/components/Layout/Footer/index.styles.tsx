import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import {
  appBorderStyle,
  brandColors,
  containerPadding,
  deviceSizes,
} from '../../../global/styles';

export const S_Container = styled.div`
  border-top: ${appBorderStyle.containerBorder};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 55%;
  padding-top: calc(${containerPadding.xs} / 2);
  padding-bottom: calc(${containerPadding.xs} / 2);
  width: 30%;
  margin-top: 25px;

  @media (min-width: ${deviceSizes.md}) {
    width: 15%;
    margin-left: 70%;
  }

  @media (min-width: ${deviceSizes.xl}) {
    width: 10%;
    margin-left: 70%;
  }
`;

export const SC_FontAwesomeIcon = styled(FontAwesomeIcon)`
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 10px;
  }
`;

export const SC_RssIcon = styled(SC_FontAwesomeIcon)`
  color: ${brandColors.rssOrange};
`;

export const SC_GitHub = styled(SC_FontAwesomeIcon)`
  color: ${brandColors.gitHubBlack};
`;
