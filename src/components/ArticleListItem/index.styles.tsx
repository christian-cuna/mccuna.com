import styled from "styled-components"

const imgSize = "180px"

export const S_Container = styled.div`
  display: flex;
  width: 100%;
  height: 12.5rem;
  align-items: center;
`

export const S_Img = styled.img`
  width: ${imgSize};
  height: ${imgSize};
  padding: 10px;
  margin: 0;
`

export const S_Details = styled.div`
  width: calc(100% - ${imgSize});
  padding-left: 5%;
`

export const S_Title = styled.h5`
  margin-top: 0;
`

export const S_Excerpt = styled.p`
  margin-bottom: 0;
`
