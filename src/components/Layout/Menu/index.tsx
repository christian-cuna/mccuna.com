import { faBlogger } from '@fortawesome/free-brands-svg-icons';
import {
  faAddressCard,
  faBars,
  faEnvelope,
  faHome,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, FunctionComponent, useState } from 'react';

import routes from '../../../utils/routes';
import {
  S_BurgerMenuIcon,
  S_BurgerMenuInput,
  S_Container,
  S_Menu,
  SC_MenuItem,
} from './index.styles';

const Menu: FunctionComponent = () => {
  const [burgerMenuIcon, setBurgerMenuIcon] = useState(faBars);

  const handleBurgerInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newBurgerMenuIcon = event.currentTarget.checked ? faTimes : faBars;
    setBurgerMenuIcon(newBurgerMenuIcon);
  };

  return (
    <S_Container>
      <S_BurgerMenuInput
        id='burgerMenuItem'
        type='checkbox'
        onChange={handleBurgerInputChange}
      />
      <S_BurgerMenuIcon htmlFor='burgerMenuItem'>
        <FontAwesomeIcon icon={burgerMenuIcon} />
      </S_BurgerMenuIcon>
      <S_Menu>
        <SC_MenuItem to={routes.home} label='MC Cuna' icon={faHome} />
        <SC_MenuItem to={routes.blog} label='Blog' icon={faBlogger} />
        <SC_MenuItem to={routes.about} label='About' icon={faAddressCard} />
        <SC_MenuItem to={routes.contact} label='Contact' icon={faEnvelope} />
      </S_Menu>
    </S_Container>
  );
};

export default Menu;
