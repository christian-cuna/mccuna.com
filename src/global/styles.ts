import { darken, lighten } from 'polished';
import { bodyColor } from '../utils/typography';

export { appColors, brandColors, appBorderStyle, containerPadding };

const primaryColor = '#07a7cf';
const secondaryColor = '#E07007';

const appColors = {
  veryLightGray: '#eee',
  lightGray: '#bbb',
  mediumGray: '#888',
  darkGray: '#555',
  veryDarkGray: '#333',
  bodyGreyColor: bodyColor,
  primaryColor: primaryColor,
  primaryColorSh1: getShade1(primaryColor),
  primaryColorSh2: getShade2(primaryColor),
  primaryColorTnt1: getTint1(primaryColor),
  primaryColorTnt2: getTint2(primaryColor),
  primaryColorTnt3: getTint3(primaryColor),
  secondaryColor: secondaryColor,
  secondaryColorSh1: getShade1(secondaryColor),
  secondaryColorSh2: getShade2(secondaryColor),
  secondaryColorTnt1: getTint1(secondaryColor),
  secondaryColorTnt2: getTint2(secondaryColor),
  secondaryColorTnt3: getTint3(secondaryColor),
};

const brandColors = {
  gitHubBlack: '#211F1F',
  linkedInBlue: '#2867b2',
  twitterBlue: '#1da1f2',
  rssOrange: '#ee802f',
};

const containerPadding = '20px';

const appBorderStyle = {
  containerBorder: `1px solid ${appColors.primaryColor}`,
};

function getShade1(color: string): string {
  return darken(0.168, color);
}

function getShade2(color: string): string {
  return darken(0.261, color);
}

function getTint1(color: string): string {
  return lighten(0.2, color);
}

function getTint2(color: string): string {
  return lighten(0.4, color);
}

function getTint3(color: string): string {
  return lighten(0.55, color);
}
