import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faRssSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import { S_IconsContainer, S_Container } from './index.styles';
import SubscribeForm from './SubscribeForm';

export type Props = {};

const Footer: FunctionComponent<Props> = () => {
  return (
    <S_Container>
      <SubscribeForm />
      <S_IconsContainer>
        <FontAwesomeIcon icon={faRssSquare} size={'2x'} />
        <FontAwesomeIcon icon={faGithub} size={'2x'} />
      </S_IconsContainer>
    </S_Container>
  );
};

export default Footer;
