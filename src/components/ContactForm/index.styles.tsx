import styled from 'styled-components';
import { appBorderStyle, containerPadding } from '../../global/styles';

export const S_Container = styled.div`
  width: 60%;
`;

export const S_YouCanFindMeParagraph = styled.p`
  border-left: ${appBorderStyle.containerBorder};
  padding: 10px;
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
`;

export const S_Input = styled.input`
  width: 300px;
`;

export const S_TextArea = styled.textarea`
  width: 100%;
  height: 300px;
`;

export const S_SubmitBtn = styled.button`
  padding: 5px 20px;
`;
