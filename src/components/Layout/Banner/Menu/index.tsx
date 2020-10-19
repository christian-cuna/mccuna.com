import React, { FunctionComponent } from 'react';
import routes from '../../../../utils/routes';
import { S_Menu } from './index.styles';

import {
  faHome,
  faBlog,
  faAddressCard,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import MenuItem from './MenuItem';

const Menu: FunctionComponent = () => {
  return (
    <S_Menu>
      <MenuItem to={routes.home} label='MC Cuna' icon={faHome} />
      <MenuItem to={routes.home} label='Blog' icon={faBlog} />
      <MenuItem to={routes.home} label='About' icon={faAddressCard} />
      <MenuItem to={routes.home} label='Contact' icon={faEnvelope} />
    </S_Menu>
  );
};

export default Menu;
