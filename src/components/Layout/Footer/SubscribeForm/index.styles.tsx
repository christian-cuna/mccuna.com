import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import {
  appBorderStyle,
  appColors,
  containerPadding,
} from '../../../../global/styles';

export const S_Container = styled.div`
  padding: ${containerPadding};
  border-left: ${appBorderStyle.containerBorder};
  border-right: ${appBorderStyle.containerBorder};
  width: 20%;
  margin-left: 50%;
  cursor: default;
`;

export const S_Header = styled.h2`
  margin-top: 0;
`;

export const SC_HeaderIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  color: ${appColors.primaryColor};
`;

export const S_Description = styled.p`
  margin-bottom: 0;
`;

export const S_FieldContainer = styled.div`
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const S_Label = styled.label`
  display: block;
  cursor: pointer;

  ${S_FieldContainer}:hover & {
    color: ${appColors.secondaryColor};
  }
`;

export const SC_LabelIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  color: ${appColors.primaryColor};
`;

export const S_Input = styled.input`
  width: 100%;
  cursor: pointer;

  ${S_FieldContainer}:hover & {
    color: ${appColors.primaryColor};
    border: 2px solid ${appColors.secondaryColor};
  }
`;

export const S_FilledInput = styled(S_Input)`
  color: ${appColors.primaryColor};
  border: 2px solid ${appColors.primaryColor};
`;

export const S_SubscribeBtn = styled.button`
  margin-top: 20px;
  padding: 5px 30px;
  color: #fff;
  background-color: ${appColors.primaryColor};
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: ${appColors.secondaryColor};
  }
`;

export const SC_SubscribeBtnIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;

  ${S_SubscribeBtn}:hover & {
    color: ${appColors.primaryColor};
  }
`;
