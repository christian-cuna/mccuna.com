import React, { FunctionComponent } from 'react';
import useOtherArticles from '../../../../customHooks/useOtherArticles';
import { LayoutOrientation } from '../../../../enums/LayoutOrientation';
import { WrapStatus } from '../../../../enums/WrapStatus';
import { SC_ArticlesList } from './index.styles';

export type Props = {};

const OtherArticles: FunctionComponent<Props> = () => {
  const { getRandomArticles } = useOtherArticles();
  const articles = getRandomArticles(3);

  return (
    <SC_ArticlesList
      articles={articles}
      wrapItems={WrapStatus.noWrap}
      itemLayoutOrientation={LayoutOrientation.vertical}
    />
  );
};

// const getQuery = (slug: string) => graphql`
//   query OtherArticles {
//     allMdx(filter: {slug: {ne: '${slug}'}}) {
//       edges {
//         node {
//           frontmatter {
//             title
//             date
//             imageSrc
//           }
//           excerpt
//           slug
//         }
//       }
//     }
//   }
// `

export default OtherArticles;
