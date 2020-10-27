import {
  faArrowRight,
  faBacon,
  faHandPointRight,
  faLongArrowAltRight,
  faSnowman,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import { IArticleBrief } from '../../models/IArticleBrief';
import ArticleBrief from './ArticleBrief';
import {
  S_Container,
  S_ReadAllLabel,
  S_ReadAllLink,
  SC_ReadAllIcon,
} from './index.styles';

export type Props = {
  articles: IArticleBrief[];
};

const BlogSummary: FunctionComponent<Props> = ({ articles }) => {
  return (
    <S_Container>
      {articles.map(article => (
        <ArticleBrief key={article.slug} article={article} />
      ))}
      <S_ReadAllLink to='/dummy'>
        <S_ReadAllLabel>Read all</S_ReadAllLabel>
        <SC_ReadAllIcon icon={faArrowRight} />
      </S_ReadAllLink>
    </S_Container>
  );
};

export default BlogSummary;
