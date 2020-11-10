import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { appColors, containerPadding } from '../../global/styles';

export const S_Container = styled.div`
  width: 100%;
  padding: ${containerPadding};
  margin-top: 40px;
`;

export const S_ReadAllLink = styled(Link)`
  padding-top: 20px;
  display: block;
  text-decoration: none;
  color: ${appColors.primaryColor};
  font-size: 1.2rem;
  text-align: right;

  &:hover {
    color: ${appColors.secondaryColor};
  }
`;

export const S_ReadAllLabel = styled.span``;

export const SC_ReadAllIcon = styled(FontAwesomeIcon)`
  margin-left: 5px;
`;
