import styled from 'styled-components';
import { appBorderStyle, containerPadding } from '../../global/styles';

export const S_Container = styled.div`
  padding: ${containerPadding};
  border-left: ${appBorderStyle.containerBorder};
  border-right: ${appBorderStyle.containerBorder};
  width: 40%;
  margin-left: 30%;
  margin-bottom: 5%;
`;

export const S_Header = styled.h2`
  margin-top: 0;
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
`;

export const S_Input = styled.input`
  width: 100%;
`;

export const S_SubscribeBtn = styled.button`
  width: 100%;
  margin-top: 20px;
`;
