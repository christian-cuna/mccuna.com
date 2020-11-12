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

  :hover {
    color: ${appColors.secondaryColor};
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
    /* display: flex; */
    justify-content: space-evenly;
    width: 40%;
    padding: ${containerPadding} 0;
    margin: 0 30%;
    position: relative;
    border-bottom: ${appBorderStyle.containerBorder};
    border-bottom-width: 3px;
  }
`;
export const SC_MenuItem = styled(MenuItem)`
  margin: 10px 0;

  @media (min-width: ${deviceSizes.sm}) {
    width: 20%;
    margin-left: 4%;
    &:last-child {
      margin-right: 4%;
    }
  }
`;
