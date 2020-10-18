import React, { FunctionComponent, useLayoutEffect, useState } from 'react';
import {
  S_Container,
  S_Label,
  S_Header,
  S_Description,
  S_InputContainer,
  S_Input,
  S_SubscribeBtn,
} from './index.styles';

export type Props = {};

const Subscription: FunctionComponent<Props> = () => {
  return (
    <S_Container>
      <S_Header>Newsletter</S_Header>
      <S_Description>
        Get notified when the weekly article pops up
      </S_Description>
      <S_InputContainer>
        <S_Label htmlFor='name'>Name</S_Label>
        <S_Input type='text' id='name' />
      </S_InputContainer>
      <S_InputContainer>
        <S_Label htmlFor='email'>Email</S_Label>
        <S_Input type='text' id='email' />
      </S_InputContainer>
      <S_SubscribeBtn>Subscribe</S_SubscribeBtn>
    </S_Container>
  );
};

const getScrollPercent = (): number => {
  const documentElement = document.documentElement;
  const body = document.body;

  const scrollTop = documentElement.scrollTop || body.scrollTop;
  const scrollHeight = documentElement.scrollHeight || body.scrollHeight;

  return (scrollTop / (scrollHeight - documentElement.clientHeight)) * 100;
};

export default Subscription;
