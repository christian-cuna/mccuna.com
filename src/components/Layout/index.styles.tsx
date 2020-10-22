import styled from 'styled-components';

export const menuContainerHeight = '200px';
export const footerContainerHeight = '425px';
export const mainContainerWidth = '60%;';

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
  width: ${mainContainerWidth};
  padding-top: 2.5%;
  flex: 1 0 calc(calc(100% - ${menuContainerHeight}) - ${footerContainerHeight});
`;

export const S_FooterContainer = styled.div`
  width: 100%;
  align-self: flex-end;
  height: ${footerContainerHeight};
  min-height: ${footerContainerHeight};
  margin-top: 50px;
`;
