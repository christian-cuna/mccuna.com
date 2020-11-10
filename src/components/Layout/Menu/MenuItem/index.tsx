import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React, { FunctionComponent } from 'react';

import { S_Label, S_Link, SC_FontAwesomeIcon } from './index.styles';

export type Props = {
  icon: IconProp;
  label: string;
  to: string;
  className?: string;
};

const MenuItem: FunctionComponent<Props> = ({ icon, label, to, className }) => {
  return (
    <S_Link to={to} className={className}>
      <SC_FontAwesomeIcon icon={icon} />
      <S_Label>{label}</S_Label>
    </S_Link>
  );
};

export default MenuItem;
