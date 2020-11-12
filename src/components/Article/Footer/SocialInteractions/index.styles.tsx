import { LinkedinShareButton, TwitterShareButton } from 'react-share';
import styled, { css } from 'styled-components';

import { appColors, brandColors } from '../../../../global/styles';

export const S_Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const containerLinkCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
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
