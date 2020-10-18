// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from '@testing-library/react';
import React from 'react';
import SocialInteractions from './index';

describe('SocialInteractions should', () => {
  test('be defined.', () => {
    const { getByText } = render(<SocialInteractions />);
    const component = getByText('SocialInteractions works!');
    expect(component).toBeDefined();
  });
});
