import { Link } from 'gatsby';
import styled from 'styled-components';
import { appColors, containerPadding } from '../../../../global/styles';

export const S_Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${containerPadding} 0;
`;

export const SC_Link = styled(Link)`
  text-decoration: none;
  color: ${appColors.primaryColor};

  &:hover {
    color: ${appColors.secondaryColor};
  }
`;
