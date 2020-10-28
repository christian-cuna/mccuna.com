import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {
  appBorderStyle,
  appColors,
  brandColors,
  containerPadding,
} from '../../../global/styles';

export const S_Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const S_IconsContainer = styled.div`
  border-top: ${appBorderStyle.containerBorder};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  margin-left: 70%;
  padding-top: calc(${containerPadding} / 2);
  padding-bottom: calc(${containerPadding} / 2);
`;

export const SC_FontAwesomeIcon = styled(FontAwesomeIcon)`
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 10px;
  }
`;

export const SC_RssIcon = styled(SC_FontAwesomeIcon)`
  &:hover {
    color: ${brandColors.rssOrange};
  }
`;

export const SC_GitHub = styled(SC_FontAwesomeIcon)`
  &:hover {
    color: ${brandColors.gitHubBlack};
  }
`;
