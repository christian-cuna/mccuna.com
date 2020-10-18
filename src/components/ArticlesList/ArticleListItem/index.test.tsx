// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from '@testing-library/react';
import React from 'react';
import { LayoutOrientation } from '../../../enums/LayoutOrientation';
import ArticleListItem, { Props } from './index';

describe('ArticleListItem should', () => {
  test('be defined.', () => {
    const props: Props = {
      article: null,
      layoutOrientation: LayoutOrientation.horizontal,
    };
    const { getByText } = render(<ArticleListItem {...props} />);
    const component = getByText('ArticleListItem works!');
    expect(component).toBeDefined();
  });
});
