import React, { FunctionComponent } from 'react';
import { S_Link, S_Icon } from './index.styles';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type Props = {
  icon: IconProp;
  label: string;
  to: string;
};

const MenuItem: FunctionComponent<Props> = ({ icon, label, to }) => {
  return (
    <S_Link to={to}>
      <S_Icon icon={icon} />
      {label}
    </S_Link>
  );
};

export default MenuItem;
