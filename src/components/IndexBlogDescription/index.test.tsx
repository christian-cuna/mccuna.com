// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from '@testing-library/react';
import React from 'react';
import IndexBlogDescription, { Props } from './index';


describe('IndexBlogDescription should', () => {
  test('be defined.', () => {
    const props: Props = {

    }
    render( <IndexBlogDescription {...props}/>);
    const component = screen.getByText('IndexBlogDescription works!');
    expect(component).toBeDefined();
  });
});