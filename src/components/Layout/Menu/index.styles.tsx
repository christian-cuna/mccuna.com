import styled from 'styled-components';

import {
  appBorderStyle,
  appColors,
  containerPadding,
  deviceSizes,
} from '../../../global/styles';
import MenuItem from './MenuItem';

export const S_Container = styled.div`
  height: 50px;
  border-bottom: ${appBorderStyle.containerBorder};
  position: relative;

  @media (min-width: ${deviceSizes.sm}) {
    height: auto;
    border-bottom: none;
    position: inherit;
  }
`;

export const S_BurgerMenuInput = styled.input`
  display: none;
`;

export const S_BurgerMenuIcon = styled.label`
  position: absolute;
  right: 15px;
  top: calc(calc(50px - 1em) / 2);
  line-height: 1em;
  cursor: pointer;
  color: ${appColors.primaryColor};

  @media (min-width: ${deviceSizes.sm}) {
    display: none;
  }
`;

export const S_Menu = styled.div`
  display: none;

  ${S_BurgerMenuInput}:checked ~ & {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background: #fff;
    padding: 20px;
    border-bottom: ${appBorderStyle.containerBorder};
    border-bottom-width: 5px;
  }

  @media (min-width: ${deviceSizes.sm}) {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    margin: 0 10%;
    padding: ${containerPadding.xs} 0;
    position: relative;
    border-bottom: ${appBorderStyle.containerBorder};
    border-bottom-width: 3px;
  }

  @media (min-width: ${deviceSizes.md}) {
    width: 70%;
    margin: 0 15%;
  }

  @media (min-width: ${deviceSizes.lg}) {
    width: 60%;
    margin: 0 20%;
  }

  @media (min-width: ${deviceSizes.xl}) {
    width: 50%;
    margin: 0 25%;
  }
`;
export const SC_MenuItem = styled(MenuItem)`
  margin: 10px 0;

  @media (min-width: ${deviceSizes.sm}) {
    width: 25%;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 2%;
    &:last-child {
      margin-right: 2%;
    }
  }

  @media (min-width: ${deviceSizes.xl}) {
    width: 20%;
    margin-left: 4%;
  }
`;
