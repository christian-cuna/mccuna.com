// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, RenderResult, fireEvent, screen } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import BlogSummary from './index';


describe('BlogSummary should', () => {
  test('be defined.', () => {
    const { getByText } = render( <BlogSummary />);
    const component = getByText('BlogSummary works!');
    expect(component).toBeDefined();
  });
});