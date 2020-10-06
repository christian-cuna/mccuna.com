// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, RenderResult, fireEvent, screen } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import 3rdPersonDescription from './index';


describe('3rdPersonDescription should', () => {
  test('be defined.', () => {
    const { getByText } = render( <3rdPersonDescription />);
    const component = getByText('3rdPersonDescription works!');
    expect(component).toBeDefined();
  });
});