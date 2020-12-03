import { LinkedinShareButton, TwitterShareButton } from 'react-share';
import styled, { css } from 'styled-components';

import { appColors, brandColors, deviceSizes } from '../../../../global/styles';

export const S_Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 10px 0;
  height: 275px;

  @media (min-width: ${deviceSizes.md}) {
    flex-direction: row;
    justify-content: space-around;
    height: auto;
    margin: 30px 0;
  }
`;

const containerLinkCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

export const SC_LinkedIn = styled(LinkedinShareButton)`
  ${containerLinkCss}

  svg {
    color: ${brandColors.linkedInBlue};
  }
`;

export const SC_Twitter = styled(TwitterShareButton)`
  ${containerLinkCss}
  svg {
    color: ${brandColors.twitterBlue};
  }
`;

export const S_Label = styled.span`
  button:hover & {
    color: ${appColors.secondaryColor};
  }

  a:hover & {
    color: ${appColors.secondaryColor};
  }
`;

export const SC_GitHub = styled.a`
  ${containerLinkCss}
  color: ${brandColors.gitHubBlack};
`;
