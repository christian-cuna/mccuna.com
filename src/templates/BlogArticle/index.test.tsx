// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from '@testing-library/react';
import React from 'react';
import BlogArticle from './index';

describe('BlogArticle should', () => {
  test('be defined.', () => {
    const { getByText } = render(<BlogArticle />);
    const component = getByText('BlogArticle works!');
    expect(component).toBeDefined();
  });
});
