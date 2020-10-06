// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, RenderResult, fireEvent, screen } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import ArticleListItem from './index';


describe('ArticleListItem should', () => {
  test('be defined.', () => {
    const { getByText } = render( <ArticleListItem />);
    const component = getByText('ArticleListItem works!');
    expect(component).toBeDefined();
  });
});