import React, { FunctionComponent } from 'react';
import { S_Container, S_Avatar, S_Description } from './index.styles';

export type Props = {};

const ThirdPersonDescription: FunctionComponent<Props> = () => {
  return (
    <S_Container>
      <S_Avatar src='https://via.placeholder.com/100' />
      <S_Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </S_Description>
    </S_Container>
  );
};

export default ThirdPersonDescription;
