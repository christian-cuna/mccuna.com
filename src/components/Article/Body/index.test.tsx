// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from '@testing-library/react';
import React from 'react';
import Body, { Props } from './index';

describe('Body should', () => {
  test('be defined.', () => {
    const props: Props = {
      article: null,
    };
    const { getByText } = render(<Body {...props} />);
    const component = getByText('Body works!');
    expect(component).toBeDefined();
  });
});
