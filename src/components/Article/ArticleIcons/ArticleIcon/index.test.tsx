// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from '@testing-library/react';
import React from 'react';
import ArticleIcon, { Props } from './index';

describe('ArticleIcon should', () => {
  test('be defined.', () => {
    const props: Props = {
      hoverIcon: 'arrows',
      icon: 'arrows',
      label: 'test',
      onClick: () => {},
    };
    const { getByText } = render(<ArticleIcon {...props} />);
    const component = getByText('ArticleIcon works!');
    expect(component).toBeDefined();
  });
});
