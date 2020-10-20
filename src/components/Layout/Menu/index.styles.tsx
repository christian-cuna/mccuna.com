import {} from 'gatsby';
import styled from 'styled-components';
import colors from '../../../utils/colors';

export const S_Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 40%;
  padding: 20px 0;
  margin: 0 30%;
  position: relative;
  border-bottom: 1px solid ${colors.lightGray};
`;
