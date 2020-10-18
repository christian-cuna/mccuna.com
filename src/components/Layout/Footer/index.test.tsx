// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from '@testing-library/react';
import React from 'react';
import Footer from './index';

describe('Footer should', () => {
  test('be defined.', () => {
    const { getByText } = render(<Footer />);
    const component = getByText('Footer works!');
    expect(component).toBeDefined();
  });
});
