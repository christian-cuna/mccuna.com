// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from '@testing-library/react';
import React from 'react';
import ThirdPersonDescription from './index';

describe('ThirdPersonDescription should', () => {
  test('be defined.', () => {
    const { getByText } = render(<ThirdPersonDescription />);
    const component = getByText('ThirdPersonDescription works!');
    expect(component).toBeDefined();
  });
});
