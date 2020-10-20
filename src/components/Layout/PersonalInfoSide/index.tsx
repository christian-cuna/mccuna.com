import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import { S_Container, S_Description } from './index.styles';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export type Props = {
  className: string;
};

const PersonalInfoSide: FunctionComponent<Props> = ({ className }) => {
  return (
    <S_Container className={className}>
      <FontAwesomeIcon icon={faUser} size='9x' />
      <S_Description>
        Short 1st person description in 2-3 lines lorem ipsum dolor sit amet,
        consectetur
      </S_Description>
    </S_Container>
  );
};

export default PersonalInfoSide;
