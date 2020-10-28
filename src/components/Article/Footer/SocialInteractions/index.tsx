import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import React, { FunctionComponent } from 'react';
import {
  SC_GitHub,
  SC_LinkedIn,
  SC_Twitter,
  S_Container,
} from './index.styles';

export type Props = {};

const SocialInteractions: FunctionComponent<Props> = () => {
  return (
    <S_Container>
      <SC_Twitter icon={faTwitter} label='Share' url='dummy' />
      <SC_LinkedIn icon={faLinkedin} label='Share' url='dummy' />
      <SC_GitHub icon={faGithub} label='Edit on GitHub' url='dummy' />
    </S_Container>
  );
};

export default SocialInteractions;
