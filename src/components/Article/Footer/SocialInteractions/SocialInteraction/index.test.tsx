// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, RenderResult, fireEvent, screen } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import SocialInteraction from './index';


describe('SocialInteraction should', () => {
  test('be defined.', () => {
    const { getByText } = render( <SocialInteraction />);
    const component = getByText('SocialInteraction works!');
    expect(component).toBeDefined();
  });
});