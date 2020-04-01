import React from 'react';
import styled from 'styled-components'

const BorderHeader = () => {
    return (
      <Container>
          <Subject>jeuxvideo.com  /  Animal Crossing : New Horizons  </Subject>
      </Container>

    )
  }

 const Container = styled.div`
    border-top:20px solid;
    border-color:#d4d4d4;
`
const Subject=styled.div`
    font-size:11px;
    color:#6c7984;
    margin-left:10px;
    margin-top:10px;
    font-weight:bold;


`
export default BorderHeader