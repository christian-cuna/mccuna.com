import styled, { css } from 'styled-components';

const linkIconCss = css`
  left: -24px;

  > a.anchor > svg {
    visibility: hidden;
    height: 100%;

    margin-right: 8px;
  }

  &:hover {
    > a.anchor > svg {
      visibility: visible;
    }
  }
`;

export const H1 = styled.h1`
  ${linkIconCss}
`;

export const H2 = styled.h2`
  ${linkIconCss}
`;

export const H3 = styled.h3`
  ${linkIconCss}
`;

export const H4 = styled.h4`
  ${linkIconCss}
`;

export const H5 = styled.h5`
  ${linkIconCss}
`;

export const H6 = styled.h6`
  ${linkIconCss}
`;
