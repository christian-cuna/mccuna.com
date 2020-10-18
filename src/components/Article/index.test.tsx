// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from '@testing-library/react';
import React from 'react';
import Article, { Props } from './index';

describe('Article should', () => {
  test('be defined.', () => {
    const props: Props = {
      article: null,
    };
    const { getByText } = render(<Article {...props} />);
    const component = getByText('Article works!');
    expect(component).toBeDefined();
  });
});
