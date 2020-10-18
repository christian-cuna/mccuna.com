// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from '@testing-library/react';
import React from 'react';
import Article from './index';

describe('Article should', () => {
  test('be defined.', () => {
    const { getByText } = render(<Article />);
    const component = getByText('Article works!');
    expect(component).toBeDefined();
  });
});
