// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from '@testing-library/react';
import React from 'react';
import PersonalInfoSide, { Props } from './index';


describe('PersonalInfoSide should', () => {
  test('be defined.', () => {
    const props: Props = {

    }
    render( <PersonalInfoSide {...props}/>);
    const component = screen.getByText('PersonalInfoSide works!');
    expect(component).toBeDefined();
  });
});