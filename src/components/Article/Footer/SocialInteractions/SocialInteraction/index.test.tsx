// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from '@testing-library/react';
import React from 'react';
import SocialInteraction, { Props } from './index';

describe('SocialInteraction should', () => {
  test('be defined.', () => {
    const props: Props = {
      icon: 'arrows',
      label: 'test',
      url: '',
    };
    const { getByText } = render(<SocialInteraction {...props} />);
    const component = getByText('SocialInteraction works!');
    expect(component).toBeDefined();
  });
});
