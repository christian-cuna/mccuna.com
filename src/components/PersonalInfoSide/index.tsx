import React, { FunctionComponent } from 'react';
import { imgWidth, S_Container, S_Description, S_Img } from './index.styles';
import ProfilePicture from '../../../static/profile.jpg';
import { imgHeight } from '../Article/Header/index.styles';

export type Props = {
  className?: string;
};

const PersonalInfoSide: FunctionComponent<Props> = ({ className }) => {
  return (
    <S_Container className={className}>
      <S_Img
        src={ProfilePicture}
        width={imgWidth}
        height={imgHeight}
        alt='McCuna Picture'
      />
      <S_Description>
        Short 1st person description in 2-3 lines lorem ipsum dolor sit amet,
        consectetur
      </S_Description>
    </S_Container>
  );
};

export default PersonalInfoSide;
