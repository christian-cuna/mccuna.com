import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import {
  S_1Description,
  S_Container,
  S_LeftContent,
  S_RightContent,
} from './index.styles';
import Menu from '../Menu';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { faCopy } from '@fortawesome/free-regular-svg-icons';

export type Props = {};

const IndexBanner: FunctionComponent<Props> = () => {
  return (
    <S_Container>
      <S_LeftContent>
        <Menu />
        <S_1Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </S_1Description>
      </S_LeftContent>
      <S_RightContent>
        <FontAwesomeIcon icon={faUser} size='9x' />
      </S_RightContent>
    </S_Container>
  );
};

export default IndexBanner;
