// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, RenderResult, fireEvent, screen } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import ArticleIcon from './index';


describe('ArticleIcon should', () => {
  test('be defined.', () => {
    const { getByText } = render( <ArticleIcon />);
    const component = getByText('ArticleIcon works!');
    expect(component).toBeDefined();
  });
});