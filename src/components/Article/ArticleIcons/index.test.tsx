import { render } from '@testing-library/react';
import React from 'react';
import ArticleIcons from './index';

describe('ArticleIcons should', () => {
  test('be defined.', () => {
    const { getByText } = render(<ArticleIcons />);
    const component = getByText('ArticleIcons works!');
    expect(component).toBeDefined();
  });
});
