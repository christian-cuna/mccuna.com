// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, RenderResult, fireEvent, screen } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import SocialInteractions from './index';


describe('SocialInteractions should', () => {
  test('be defined.', () => {
    const { getByText } = render( <SocialInteractions />);
    const component = getByText('SocialInteractions works!');
    expect(component).toBeDefined();
  });
});