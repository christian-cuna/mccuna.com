import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import styled from 'styled-components';

export const S_Container = styled.div``;

export const S_Title = styled.h5`
  margin-bottom: 0;
`;

export const S_DateContainer = styled.div``;

export const S_DateIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  display: inline-block;
  font-size: 0.6rem;
`;

export const S_Date = styled.span`
  display: inline-block;
  font-size: 0.6rem;
  margin-bottom: 10px;
`;

export const S_Excerpt = styled.p`
  margin-bottom: 10px;
`;

export const S_ReadLink = styled(Link)``;
