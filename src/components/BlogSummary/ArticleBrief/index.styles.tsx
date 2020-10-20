import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { appColors } from '../../../global/styles';

export const S_Container = styled.div`
  background-color: ${appColors.veryLightGray};
  padding: 20px;

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const S_Title = styled.h3`
  margin-bottom: 0;
  margin-top: 0;
`;

export const S_DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const S_DateIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  display: inline-block;
  font-size: 0.7rem;
`;

export const S_Date = styled.span`
  display: inline-block;
  font-size: 0.7rem;
`;

export const S_Excerpt = styled.p`
  margin-bottom: 10px;
  width: 75%;
`;

export const S_ReadLink = styled(Link)``;
