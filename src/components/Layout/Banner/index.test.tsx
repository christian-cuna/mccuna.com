// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from '@testing-library/react';
import React from 'react';
import IndexBanner from './index';

describe('IndexBanner should', () => {
  test('be defined.', () => {
    const { getByText } = render(<IndexBanner />);
    const component = getByText('IndexBanner works!');
    expect(component).toBeDefined();
  });
});
