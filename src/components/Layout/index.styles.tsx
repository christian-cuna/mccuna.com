import styled from "styled-components"

export const bannerContainerHeight = "200px"
export const footerContainerHeight = "50px"

export const S_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const S_BannerContainer = styled.div`
  height: ${bannerContainerHeight};
  width: 100%;
`

export const S_MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;
  flex: 1 0
    calc(calc(100% - ${bannerContainerHeight}) - ${footerContainerHeight});
`

export const S_FooterContainer = styled.div`
  width: 100%;
  align-self: flex-end;
  height: ${footerContainerHeight};
  min-height: ${footerContainerHeight};
`
