// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from '@testing-library/react';
import React from 'react';
import OtherArticles from './index';

describe('OtherArticles should', () => {
  test('be defined.', () => {
    const { getByText } = render(<OtherArticles />);
    const component = getByText('OtherArticles works!');
    expect(component).toBeDefined();
  });
});
