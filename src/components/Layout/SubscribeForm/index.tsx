import { faEnvelope, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faSignature, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import React, { ChangeEvent, FunctionComponent, useState } from 'react';

import {
  S_Container,
  S_Description,
  S_FieldContainer,
  S_Header,
  S_Input,
  S_Label,
  S_SubscribeBtn,
  SC_HeaderIcon,
  SC_LabelIcon,
  SC_SubscribeBtnIcon,
} from './index.styles';

export type Props = {};

type State = {
  name: string;
  email: string;
};

/* TODO: Add e2e testing? */
const SubscribeForm: FunctionComponent<Props> = () => {
  const [state, setState] = useState<State>({
    name: '',
    email: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <S_Container>
      <S_Header>
        <SC_HeaderIcon icon={faNewspaper} />
        Newsletter
      </S_Header>
      <S_Description>Get notified when a new article pops up</S_Description>
      <S_FieldContainer>
        <S_Label htmlFor='name'>
          <SC_LabelIcon icon={faSignature} />
          Name
        </S_Label>
        <S_Input
          id='name'
          name='name'
          value={state.name}
          onChange={handleChange}
          required
        />
      </S_FieldContainer>
      <S_FieldContainer>
        <S_Label htmlFor='email'>
          <SC_LabelIcon icon={faEnvelope} />
          Email
        </S_Label>
        <S_Input
          id='email'
          name='email'
          value={state.email}
          onChange={handleChange}
          type='email'
          required
        />
      </S_FieldContainer>
      <S_SubscribeBtn>
        <SC_SubscribeBtnIcon icon={faUserCheck} />
        Subscribe
      </S_SubscribeBtn>
    </S_Container>
  );
};

export default SubscribeForm;
