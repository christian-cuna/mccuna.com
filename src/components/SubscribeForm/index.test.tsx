// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from '@testing-library/react';
import React from 'react';
import SubscribeForm, { Props } from './index';


describe('SubscribeForm should', () => {
  test('be defined.', () => {
    const props: Props = {

    }
    render( <SubscribeForm {...props}/>);
    const component = screen.getByText('SubscribeForm works!');
    expect(component).toBeDefined();
  });
});