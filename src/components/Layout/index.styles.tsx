import styled from "styled-components"

const bannerContainerHeight = "200px"
const footerContainerHeight = "50px"

export const S_Container = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 100%;
  /* min-height: calc(
    calc(100% - ${bannerContainerHeight}) - ${footerContainerHeight}
  ); */
  flex: 1 0
    calc(calc(100% - ${bannerContainerHeight}) - ${footerContainerHeight});
`

export const S_FooterContainer = styled.div`
  width: 100%;
  align-self: flex-end;
  height: ${footerContainerHeight};
  min-height: ${footerContainerHeight};
`
