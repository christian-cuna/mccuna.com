// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, RenderResult, fireEvent, screen } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import Body from './index';


describe('Body should', () => {
  test('be defined.', () => {
    const { getByText } = render( <Body />);
    const component = getByText('Body works!');
    expect(component).toBeDefined();
  });
});