// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from '@testing-library/react';
import React from 'react';
import Layout from './index';

describe('Layout should', () => {
  test('be defined.', () => {
    const { getByText } = render(<Layout />);
    const component = getByText('Layout works!');
    expect(component).toBeDefined();
  });
});
