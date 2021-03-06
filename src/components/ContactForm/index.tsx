import {
  faBullseye,
  faEnvelope,
  faPaperPlane,
  faScroll,
  faSignature,
} from '@fortawesome/free-solid-svg-icons';
import React, { FunctionComponent } from 'react';

import {
  S_Container,
  S_FieldContainer,
  S_FormContainer,
  S_Input,
  S_Label,
  S_MailAddress,
  S_MyEmail,
  S_SendMeAnEmail,
  S_SubmitBtn,
  S_TextArea,
  SC_LabelIcon,
  SC_SubmitBtnIcon,
} from './index.styles';

export type Props = {};

/* TODO: Add e2e testing? */
const ContactForm: FunctionComponent<Props> = () => (
  <S_Container>
    <S_MyEmail>
      My email:
      <S_MailAddress
        href='mailto:me@mccuna.com'
        target='_blank'
        rel='noreferrer'
      >
        me@mccuna.com
      </S_MailAddress>
    </S_MyEmail>
    <S_SendMeAnEmail>Send me an email</S_SendMeAnEmail>
    <S_FormContainer>
      <S_FieldContainer>
        <S_Label htmlFor='name'>
          <SC_LabelIcon icon={faSignature} />
          Name
        </S_Label>
        <S_Input id='name' />
      </S_FieldContainer>
      <S_FieldContainer>
        <S_Label htmlFor='email'>
          <SC_LabelIcon icon={faEnvelope} />
          Email
        </S_Label>
        <S_Input id='email' />
      </S_FieldContainer>
      <S_FieldContainer>
        <S_Label htmlFor='subject'>
          <SC_LabelIcon icon={faBullseye} />
          Subject
        </S_Label>
        <S_Input id='subject' />
      </S_FieldContainer>
      <S_FieldContainer>
        <S_Label htmlFor='body'>
          <SC_LabelIcon icon={faScroll} />
          Body
        </S_Label>
        <S_TextArea id='body' />
      </S_FieldContainer>
      <S_SubmitBtn>
        <SC_SubmitBtnIcon icon={faPaperPlane} />
        Submit
      </S_SubmitBtn>
    </S_FormContainer>
  </S_Container>
);

export default ContactForm;
