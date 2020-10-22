import { Link } from 'gatsby';
import styled from 'styled-components';
import { appBorderStyle, containerPadding } from '../../global/styles';

export const S_Container = styled.div`
  width: 100%;
  /* height: 100%; */
  padding: ${containerPadding};
  margin-top: 40px;
  border-bottom: ${appBorderStyle.containerBorder};
`;

export const S_ReadAllLink = styled(Link)`
  padding-top: 20px;
  display: block;
`;
