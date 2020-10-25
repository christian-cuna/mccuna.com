import React, { FunctionComponent } from 'react';
import {
  S_Container,
  S_FieldContainer,
  S_FormContainer,
  S_Input,
  S_Label,
  S_SubmitBtn,
  S_TextArea,
  S_YouCanFindMeParagraph,
} from './index.styles';

export type Props = {};

const ContactForm: FunctionComponent<Props> = () => {
  return (
    <S_Container>
      <S_YouCanFindMeParagraph>
        You can find me here:
        <a href='mailto:me@mccuna.com' target='_blank' rel='noreferrer'>
          me@mccuna.com
        </a>
      </S_YouCanFindMeParagraph>
      <S_FormContainer>
        <S_FieldContainer>
          <S_Label htmlFor='name'> Name </S_Label>
          <S_Input id='name' />
        </S_FieldContainer>
        <S_FieldContainer>
          <S_Label htmlFor='email'>Email</S_Label>
          <S_Input id='email' />
        </S_FieldContainer>
        <S_FieldContainer>
          <S_Label htmlFor='subject'>Subject</S_Label>
          <S_Input id='subject' />
        </S_FieldContainer>
        <S_FieldContainer>
          <S_Label htmlFor='body'>Body</S_Label>
          <S_TextArea id='body'></S_TextArea>
        </S_FieldContainer>
        <S_SubmitBtn>Submit</S_SubmitBtn>
      </S_FormContainer>
    </S_Container>
  );
};

export default ContactForm;
