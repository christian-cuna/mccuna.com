import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { appColors, containerPadding } from '../../../../global/styles';

export const S_Container = styled.div`
  display: flex;
  padding: ${containerPadding} 0;
  flex-direction: column;
`;

const SC_Link = styled(Link)`
  text-decoration: none;
  color: ${appColors.primaryColor};
  cursor: pointer;

  &:hover {
    color: ${appColors.secondaryColor};
  }
`;

export const SC_PrevLink = styled(SC_Link)`
  align-self: flex-start;
`;

export const SC_PrevLinkIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

export const SC_NextLink = styled(SC_Link)`
  align-self: flex-end;
`;

export const SC_NextLinkIcon = styled(FontAwesomeIcon)`
  margin-left: 5px;
`;
