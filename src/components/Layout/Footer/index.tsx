import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faRssSquare } from '@fortawesome/free-solid-svg-icons';
import React, { FunctionComponent } from 'react';

import {
  S_Container,
  S_IconsContainer,
  SC_GitHub,
  SC_RssIcon,
} from './index.styles';
import SubscribeForm from './SubscribeForm';

export type Props = {};

const Footer: FunctionComponent<Props> = () => {
  return (
    <S_Container>
      <SubscribeForm />
      <S_IconsContainer>
        <SC_RssIcon icon={faRssSquare} size='2x' />
        <SC_GitHub icon={faGithub} size='2x' />
      </S_IconsContainer>
    </S_Container>
  );
};

export default Footer;
