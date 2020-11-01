import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { FunctionComponent } from 'react';
import { IArticle } from '../../../models/IArticle';
import { S_Container, S_BottomDate } from './index.styles';

export type Props = {
  article: IArticle;
};

const Body: FunctionComponent<Props> = ({ article }) => {
  return (
    <S_Container>
      <MDXProvider components={components}>
        <MDXRenderer>{article.content}</MDXRenderer>
      </MDXProvider>
      <S_BottomDate>{article.date}</S_BottomDate>
    </S_Container>
  );
};

const components = {
  Link,
};

export default Body;
