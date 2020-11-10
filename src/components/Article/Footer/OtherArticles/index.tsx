import React, { FunctionComponent } from 'react';

import useOtherArticles from '../../../../customHooks/useOtherArticles';
import { LayoutOrientation } from '../../../../enums/LayoutOrientation';
import { WrapStatus } from '../../../../enums/WrapStatus';
import { SC_ArticlesList } from './index.styles';

export type Props = {
  currentArticleBlogSlug: string;
};

const OtherArticles: FunctionComponent<Props> = ({
  currentArticleBlogSlug,
}) => {
  const { getRandomArticles } = useOtherArticles(currentArticleBlogSlug);
  const articles = getRandomArticles(3);

  return (
    <SC_ArticlesList
      articles={articles}
      wrapItems={WrapStatus.noWrap}
      itemLayoutOrientation={LayoutOrientation.vertical}
    />
  );
};

export default OtherArticles;
