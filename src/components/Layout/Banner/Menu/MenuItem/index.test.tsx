// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from '@testing-library/react';
import React from 'react';
import MenuItem, { Props } from './index';


describe('MenuItem should', () => {
  test('be defined.', () => {
    const props: Props = {

    }
    render( <MenuItem {...props}/>);
    const component = screen.getByText('MenuItem works!');
    expect(component).toBeDefined();
  });
});