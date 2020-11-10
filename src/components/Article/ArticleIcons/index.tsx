import { faCopy } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowUp,
  faCopy as fasCopy,
  faLongArrowAltUp,
} from '@fortawesome/free-solid-svg-icons';
import React, { FunctionComponent } from 'react';

import ArticleIcon from './ArticleIcon';
import { S_Container } from './index.styles';

export type Props = {
  className?: string;
};

const ArticleIcons: FunctionComponent<Props> = ({ className }) => (
  <S_Container className={className}>
    <ArticleIcon
      icon={faArrowUp}
      hoverIcon={faLongArrowAltUp}
      label='To the top'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    />
    <ArticleIcon
      icon={faCopy}
      hoverIcon={fasCopy}
      label='Copy article URL'
      onClick={() => alert('not implemented!')}
    />
  </S_Container>
);

export default ArticleIcons;
