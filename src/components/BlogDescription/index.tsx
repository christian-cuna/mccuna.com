import React, { FunctionComponent } from 'react';
import { S_Container, S_Description, S_Header } from './index.styles';

export type Props = {};

const BlogDescription: FunctionComponent<Props> = () => {
  return (
    <S_Container>
      <S_Header>McCuna&apos;s blog</S_Header>
      <S_Description>
        Stuff I blog about Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
      </S_Description>
    </S_Container>
  );
};

export default BlogDescription;
