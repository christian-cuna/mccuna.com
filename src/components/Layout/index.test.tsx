// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, RenderResult, fireEvent, screen } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import Layout from './index';


describe('Layout should', () => {
  test('be defined.', () => {
    const { getByText } = render( <Layout />);
    const component = getByText('Layout works!');
    expect(component).toBeDefined();
  });
});