// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, RenderResult, fireEvent, screen } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import PaginationLinks from './index';


describe('PaginationLinks should', () => {
  test('be defined.', () => {
    const { getByText } = render( <PaginationLinks />);
    const component = getByText('PaginationLinks works!');
    expect(component).toBeDefined();
  });
});