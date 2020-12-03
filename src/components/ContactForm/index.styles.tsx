import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import {
  appBorderStyle,
  appColors,
  containerPadding,
  deviceSizes,
} from '../../global/styles';

export const S_Container = styled.div`
  width: 100%;
  margin-bottom: 25px;
  padding-top: 20px;
  @media (min-width: ${deviceSizes.xl}) {
    width: 70%;
  }
`;

export const S_MyEmail = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
`;

export const S_MailAddress = styled.a`
  color: ${appColors.primaryColor};
  text-decoration: none;
  display: inline-block;
  margin-left: 5px;

  &:hover {
    color: ${appColors.secondaryColor};
  }
`;

export const S_SendMeAnEmail = styled.h1`
  margin-bottom: 0.4rem;
`;

export const S_FormContainer = styled.div`
  width: 100%;
  border-top: ${appBorderStyle.containerBorder};
  border-bottom: ${appBorderStyle.containerBorder};
  padding: ${containerPadding.xs};

  @media (min-width: ${deviceSizes.md}) {
    padding: ${containerPadding.md};
  }
`;

export const S_FieldContainer = styled.div`
  width: 100%;

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const S_Label = styled.label`
  display: block;
  margin-bottom: 10px;
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
    border: 2px solid ${appColors.secondaryColor};
  }

  @media (min-width: ${deviceSizes.xl}) {
    width: 300px;
  }
`;

export const S_TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  cursor: pointer;

  ${S_FieldContainer}:hover & {
    border: 2px solid ${appColors.secondaryColor};
  }
`;

export const S_SubmitBtn = styled.button`
  padding: 5px 30px;
  background-color: ${appColors.primaryColor};
  border: 0;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${appColors.secondaryColor};
  }
`;

export const SC_SubmitBtnIcon = styled(FontAwesomeIcon)`
  color: #fff;
  margin-right: 5px;

  ${S_SubmitBtn}:hover & {
    color: ${appColors.primaryColor};
  }
`;
