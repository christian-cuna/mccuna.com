import React, { FunctionComponent } from 'react';

import useOtherArticles from '../../../../customHooks/useOtherArticles';
import { SC_ArticlesList } from './index.styles';

export type Props = {
  currentArticleBlogSlug: string;
};

const OtherArticles: FunctionComponent<Props> = ({
  currentArticleBlogSlug,
}) => {
  const { getRandomArticles } = useOtherArticles(currentArticleBlogSlug);
  const articles = getRandomArticles(2);

  return <SC_ArticlesList articles={articles} />;
};

export default OtherArticles;
