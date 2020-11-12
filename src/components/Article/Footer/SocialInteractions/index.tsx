import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';

import { useArticleContext } from '../../../../contexts/ArticleContext';
import {
  S_Container,
  S_Label,
  SC_GitHub,
  SC_LinkedIn,
  SC_Twitter,
} from './index.styles';

export type Props = {};

const SocialInteractions: FunctionComponent<Props> = () => {
  const { article } = useArticleContext();
  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <S_Container>
      <SC_Twitter title={article.title} url={url}>
        <FontAwesomeIcon icon={faTwitter} size='3x' />
        <S_Label>Share</S_Label>
      </SC_Twitter>
      <SC_LinkedIn title={article.title} url={url}>
        <FontAwesomeIcon icon={faLinkedin} size='3x' />
        <S_Label>Share</S_Label>
      </SC_LinkedIn>
      <SC_GitHub href={article.editLink}>
        <FontAwesomeIcon icon={faGithub} size='3x' />
        <S_Label>Edit on GitHub</S_Label>
      </SC_GitHub>
    </S_Container>
  );
};

export default SocialInteractions;
