import styled from 'styled-components';
import colors from '../../../utils/colors';

export const S_Container = styled.div`
  border-top: 1px solid ${colors.lightGray};
  border-bottom: 1px solid ${colors.lightGray};
  padding: 15px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const S_Description = styled.p`
  margin-top: 15px;
  margin-bottom: 0;
  text-align: center;
`;
