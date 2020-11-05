import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';
import { S_Container, SC_Link } from './index.styles';

export type Props = {};

const PaginationLinks: FunctionComponent<Props> = () => {
  return (
    <S_Container>
      {/* TODO: Replace mocks */}
      <SC_Link to='/dummy-2'>
        <FontAwesomeIcon icon={faArrowLeft} />
        To dynamically fetch previous article name
      </SC_Link>
      {/* TODO: Replace mocks */}
      <SC_Link to='/dummy-0'>
        To dynamically fetch next article name
        <FontAwesomeIcon icon={faArrowRight} />
      </SC_Link>
    </S_Container>
  );
};

export default PaginationLinks;
