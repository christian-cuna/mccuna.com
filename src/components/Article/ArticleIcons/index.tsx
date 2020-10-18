import React, { FunctionComponent } from 'react';
import ArticleIcon from './ArticleIcon';
import { S_Container } from './index.styles';
import {
  faArrowUp,
  faLongArrowAltUp,
  faCopy as fasCopy,
} from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

export type Props = {
  className?: string;
};

const ArticleIcons: FunctionComponent<Props> = ({ className }) => {
  return (
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
};

export default ArticleIcons;
