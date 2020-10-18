import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent, useState } from 'react';
import { S_Container, S_Label } from './index.styles';

export type Props = {
  icon: IconProp
  hoverIcon: IconProp
  label: string
  onClick: () => void
}

const ArticleIcon: FunctionComponent<Props> = ({
  icon,
  hoverIcon,
  label,
  onClick,
}) => {
  const [iconState, setIconState] = useState(icon);

  return (
    <S_Container
      onClick={onClick}
      onMouseEnter={() => setIconState(hoverIcon)}
      onMouseLeave={() => setIconState(icon)}
    >
      <FontAwesomeIcon icon={iconState} />
      <S_Label>{label}</S_Label>
    </S_Container>
  );
};

export default ArticleIcon;
