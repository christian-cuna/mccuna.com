import styled from "styled-components"

const bannerContainerHeight = "175px"
const footerContainerHeight = "125px"

export const S_Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const S_BannerContainer = styled.div`
  height: bannerContainerHeight;
  width: 100%;
`

export const S_MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: calc(
    calc(100% - ${bannerContainerHeight}) - ${footerContainerHeight}
  );
  min-height: calc(
    calc(100% - ${bannerContainerHeight}) - ${footerContainerHeight}
  );
  width: 100%;
`

export const S_FooterContainer = styled.div`
  width: 100%;
  height: ${footerContainerHeight};
`
