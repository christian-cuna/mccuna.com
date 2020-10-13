// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, RenderResult, fireEvent, screen } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import Article from './index';


describe('Article should', () => {
  test('be defined.', () => {
    const { getByText } = render( <Article />);
    const component = getByText('Article works!');
    expect(component).toBeDefined();
  });
});