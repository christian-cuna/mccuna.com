import styled from 'styled-components';
import PersonalInfoSide from './PersonalInfoSide';

export const menuContainerHeight = '200px';
export const footerContainerHeight = '50px';

export const S_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const S_MenuContainer = styled.div`
  height: ${menuContainerHeight};
  width: 100%;
`;

export const S_MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;
  padding-top: 2.5%;
  flex: 1 0 calc(calc(100% - ${menuContainerHeight}) - ${footerContainerHeight});
`;

export const SC_PersonalInfo = styled(PersonalInfoSide)`
  position: fixed;
  right: 10%;
  top: 25%;
  transform: translateX(50%);
`;

export const S_FooterContainer = styled.div`
  width: 100%;
  align-self: flex-end;
  height: ${footerContainerHeight};
  min-height: ${footerContainerHeight};
`;
