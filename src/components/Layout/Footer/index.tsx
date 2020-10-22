import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faRssSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import { S_Container } from './index.styles';

export type Props = {};

const Footer: FunctionComponent<Props> = () => {
  return (
    <S_Container>
      <FontAwesomeIcon icon={faRssSquare} size={'2x'} />
      <FontAwesomeIcon icon={faGithub} size={'2x'} />
    </S_Container>
  );
};

export default Footer;
