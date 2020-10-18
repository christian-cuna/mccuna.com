import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { FunctionComponent } from 'react';
import { IArticle } from '../../../models/IArticle';
import { SC_ArticleIcons, S_Container, S_BottomDate } from './index.styles';

export type Props = {
  article: IArticle
}

const Body: FunctionComponent<Props> = ({ article }) => {
  return (
    <S_Container>
      <MDXProvider components={{ Link }}>
        <MDXRenderer>{article.content}</MDXRenderer>
      </MDXProvider>
      <SC_ArticleIcons />
      <S_BottomDate>{article.date}</S_BottomDate>
    </S_Container>
  );
};

export default Body;
