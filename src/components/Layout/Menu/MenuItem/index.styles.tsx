import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { appColors } from '../../../../global/styles';

const hoverBorderWidth = '5px';
const linkFontSize = '1.1rem';

export const S_Link = styled(Link)`
  /* padding-left: 25px; */
  padding-right: calc(2 * ${hoverBorderWidth});
  padding-top: calc(2 * ${hoverBorderWidth});
  display: flex;
  align-items: flex-end;
  /* justify-content: flex-end; */
  justify-content: center;
  /* height: calc(${linkFontSize} + calc(${hoverBorderWidth} * 2)); */
  height: 100%;
  text-decoration: none;

  &:hover {
    border-top: ${hoverBorderWidth} solid ${appColors.secondaryColor};
    border-right: ${hoverBorderWidth} solid ${appColors.secondaryColor};
    padding-right: ${hoverBorderWidth};
    padding-top: ${hoverBorderWidth};
  }
`;

export const S_Label = styled.span`
  color: ${appColors.veryDarkGray};
  font-size: ${linkFontSize};
  font-weight: 600;
  line-height: ${linkFontSize};

  ${S_Link}:hover & {
    color: ${appColors.secondaryColor};
  }

  ${S_Link}:active & {
    color: ${appColors.secondaryColor};
  }
`;

export const SC_FontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${appColors.primaryColor};
  margin-right: 5px;
`;
