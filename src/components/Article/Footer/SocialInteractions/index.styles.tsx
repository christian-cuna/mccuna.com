import styled from 'styled-components';

import { brandColors } from '../../../../global/styles';
import SocialInteraction from './SocialInteraction';

export const S_Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const SC_Twitter = styled(SocialInteraction)`
  &:hover {
    color: ${brandColors.twitterBlue};
  }
`;

export const SC_LinkedIn = styled(SocialInteraction)`
  &:hover {
    color: ${brandColors.linkedInBlue};
  }
`;

export const SC_GitHub = styled(SocialInteraction)`
  &:hover {
    color: ${brandColors.gitHubBlack};
  }
`;
