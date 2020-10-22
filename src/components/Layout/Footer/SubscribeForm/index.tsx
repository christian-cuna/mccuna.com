import React, { FunctionComponent } from 'react';
import {
  S_Container,
  S_FieldContainer,
  S_Header,
  S_Label,
  S_Input,
  S_SubscribeBtn,
  S_Description,
} from './index.styles';

export type Props = {};

const SubscribeForm: FunctionComponent<Props> = () => {
  return (
    <S_Container>
      <S_Header>Newsletter</S_Header>
      <S_Description>Get notified when a new article pops up</S_Description>
      <S_FieldContainer>
        <S_Label htmlFor='name'>Name</S_Label>
        <S_Input id='name' />
      </S_FieldContainer>
      <S_FieldContainer>
        <S_Label htmlFor='email'>Email</S_Label>
        <S_Input id='email' />
      </S_FieldContainer>
      <S_SubscribeBtn>Subscribe</S_SubscribeBtn>
    </S_Container>
  );
};

export default SubscribeForm;
