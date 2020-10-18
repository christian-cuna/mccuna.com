import styled from 'styled-components';

const containerWidth = '400px';

export const S_Container = styled.div`
  border: 1px solid blue;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: calc(calc(100% - ${containerWidth}) * 0.75);
  width: ${containerWidth};
`;

export const S_Header = styled.h3`
  margin-top: 0;
`;

export const S_Description = styled.p`
  margin-bottom: 0;
`;

export const S_InputContainer = styled.div`
  padding-top: 20px;
  width: 100%;
`;

export const S_Label = styled.label`
  display: block;
`;

export const S_Input = styled.input`
  display: block;
  width: 100%;
`;

export const S_SubscribeBtn = styled.button`
  margin-top: 20px;
  width: 100%;
`;
