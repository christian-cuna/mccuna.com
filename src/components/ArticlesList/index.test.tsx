// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, RenderResult, fireEvent, screen } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import ArticlesList from './index';


describe('ArticlesList should', () => {
  test('be defined.', () => {
    const { getByText } = render( <ArticlesList />);
    const component = getByText('ArticlesList works!');
    expect(component).toBeDefined();
  });
});