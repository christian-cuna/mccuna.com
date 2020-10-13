// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, RenderResult, fireEvent, screen } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import ArticleIcons from './index';


describe('ArticleIcons should', () => {
  test('be defined.', () => {
    const { getByText } = render( <ArticleIcons />);
    const component = getByText('ArticleIcons works!');
    expect(component).toBeDefined();
  });
});