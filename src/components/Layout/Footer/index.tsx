import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faRssSquare } from '@fortawesome/free-solid-svg-icons';
import React, { FunctionComponent } from 'react';
import {
  S_IconsContainer,
  S_Container,
  SC_FontAwesomeIcon,
} from './index.styles';
import SubscribeForm from './SubscribeForm';

export type Props = {};

const Footer: FunctionComponent<Props> = () => {
  return (
    <S_Container>
      <SubscribeForm />
      <S_IconsContainer>
        <SC_FontAwesomeIcon icon={faRssSquare} size={'2x'} />
        <SC_FontAwesomeIcon icon={faGithub} size={'2x'} />
      </S_IconsContainer>
    </S_Container>
  );
};

export default Footer;
