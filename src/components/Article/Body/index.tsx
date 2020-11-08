import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { FunctionComponent } from 'react';
import { useArticleContext } from '../../../contexts/ArticleContext';
import { components } from '../../Mdx';
import { S_Container, S_BottomDate } from './index.styles';

const Body: FunctionComponent = () => {
  const { article } = useArticleContext();
  return (
    <S_Container>
      <MDXProvider components={components}>
        <MDXRenderer>{article.content}</MDXRenderer>
      </MDXProvider>
      <S_BottomDate>{article.date}</S_BottomDate>
    </S_Container>
  );
};

export default Body;
