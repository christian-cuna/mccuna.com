// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from '@testing-library/react';
import React from 'react';
import ArticlesList from './index';

describe('ArticlesList should', () => {
  test('be defined.', () => {
    const { getByText } = render(<ArticlesList />);
    const component = getByText('ArticlesList works!');
    expect(component).toBeDefined();
  });
});
