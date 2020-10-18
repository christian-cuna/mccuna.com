// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from '@testing-library/react';
import React from 'react';
import PaginationLinks from './index';

describe('PaginationLinks should', () => {
  test('be defined.', () => {
    const { getByText } = render(<PaginationLinks />);
    const component = getByText('PaginationLinks works!');
    expect(component).toBeDefined();
  });
});
