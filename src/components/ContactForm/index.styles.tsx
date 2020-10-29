import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {
  appBorderStyle,
  appColors,
  containerPadding,
} from '../../global/styles';

export const S_Container = styled.div`
  width: 60%;
`;

export const S_YouCanFindMeParagraph = styled.p`
  font-size: 1.1rem;
`;

export const S_MailAddress = styled.a`
  color: ${appColors.primaryColor};
  text-decoration: none;
  margin-left: 5px;

  &:hover {
    color: ${appColors.secondaryColor};
  }
`;

export const S_FormContainer = styled.div`
  width: 100%;
  border-top: ${appBorderStyle.containerBorder};
  border-bottom: ${appBorderStyle.containerBorder};
  padding: ${containerPadding};
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
  width: 300px;
  cursor: pointer;

  ${S_FieldContainer}:hover & {
    border: 2px solid ${appColors.secondaryColor};
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
