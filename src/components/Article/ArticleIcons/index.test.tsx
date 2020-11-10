import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import ArticleIcons from './index';

describe('ArticleIcons should', () => {
  test('render a regular copy and up arrow by default.', () => {
    const { container } = render(<ArticleIcons />);

    const copyIcon = container.querySelector(
      '[data-icon="copy"][data-prefix="far"]',
    );
    const upArrowIcon = container.querySelector('[data-icon="arrow-up"]');

    expect(copyIcon).not.toBeNull();
    expect(upArrowIcon).not.toBeNull();
  });

  test('render a solid copy icon on copy icon hover.', () => {
    const { container } = render(<ArticleIcons />);

    const copyIcon = container.querySelector(
      '[data-icon="copy"][data-prefix="far"]',
    )!;

    fireEvent.mouseEnter(copyIcon);

    const hoveredCopyIcon = container.querySelector(
      '[data-icon="copy"][data-prefix="fas"]',
    )!;

    expect(hoveredCopyIcon).not.toBeNull();
  });
});
