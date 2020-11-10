import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';

import { S_ContainerLink, S_Label } from './index.styles';

export type Props = {
  icon: IconProp;
  label: string;
  url: string;
  className?: string;
};

const SocialInteraction: FunctionComponent<Props> = ({
  icon,
  label,
  url,
  className,
}) => (
  <S_ContainerLink href={url} className={className}>
    <FontAwesomeIcon icon={icon} size='3x' />
    <S_Label>{label}</S_Label>
  </S_ContainerLink>
);

export default SocialInteraction;
