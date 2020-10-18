// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from '@testing-library/react';
import React from 'react';
import Header, { Props } from './index';

describe('Header should', () => {
  test('be defined.', () => {
    const props: Props = {
      article: null,
    };
    const { getByText } = render(<Header {...props} />);
    const component = getByText('Header works!');
    expect(component).toBeDefined();
  });
});
