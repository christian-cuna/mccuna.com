// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from '@testing-library/react';
import React from 'react';
import Code, { Props } from './index';


describe('Code should', () => {
  test('be defined.', () => {
    const props: Props = {

    }
    render( <Code {...props}/>);
    const component = screen.getByText('Code works!');
    expect(component).toBeDefined();
  });
});