import styled from "styled-components"

const imgSize = "13rem"

export const S_Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`

export const S_Img = styled.img`
  width: ${imgSize};
  height: ${imgSize};
  margin: 0;
`

export const S_Details = styled.div`
  width: calc(100% - ${imgSize});
  height: 12rem;
  background-color: #efefef;
  padding: 4%;
`

export const S_Title = styled.h5`
  margin-top: 0;
`

export const S_Excerpt = styled.p`
  margin-bottom: 0;
`
