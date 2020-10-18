// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from '@testing-library/react';
import React from 'react';
import SubscriptionSide, { Props } from './index';


describe('SubscriptionSide should', () => {
  test('be defined.', () => {
    const props: Props = {

    }
    render( <SubscriptionSide {...props}/>);
    const component = screen.getByText('SubscriptionSide works!');
    expect(component).toBeDefined();
  });
});