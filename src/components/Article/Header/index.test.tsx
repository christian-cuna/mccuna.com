// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, RenderResult, fireEvent, screen } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import Header from './index';


describe('Header should', () => {
  test('be defined.', () => {
    const { getByText } = render( <Header />);
    const component = getByText('Header works!');
    expect(component).toBeDefined();
  });
});