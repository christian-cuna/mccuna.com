// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from '@testing-library/react';
import React from 'react';
import BlogSummary from './index';

describe('BlogSummary should', () => {
  test('be defined.', () => {
    const { getByText } = render(<BlogSummary />);
    const component = getByText('BlogSummary works!');
    expect(component).toBeDefined();
  });
});
