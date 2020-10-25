// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from '@testing-library/react';
import React from 'react';
import ContactForm, { Props } from './index';


describe('ContactForm should', () => {
  test('be defined.', () => {
    const props: Props = {

    }
    render( <ContactForm {...props}/>);
    const component = screen.getByText('ContactForm works!');
    expect(component).toBeDefined();
  });
});