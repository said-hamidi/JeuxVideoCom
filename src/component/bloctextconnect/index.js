import React from 'react';
import styled from 'styled-components'

const BlocTextConnect = ({contenu}) => {
    
    return (
      <Container>
          <ContentBlocConnect>{contenu}</ContentBlocConnect>
      </Container>
    )
  }

  const ContentBlocConnect= styled.div`
    display:flex; 
    align-items: center;
    justify-content:center;
    font-family: robotoboldcondensed,Arial,Helvetica,sans-serif;
    font-size: 13px;
    font-weight: bold;
    color: #ff4203;
    margin-top:6px;
    margin-bottom:6px;
  `
 const Container = styled.div`
 border-top:1px solid;
 border-bottom:1px solid;
 border-color:#ff4203;
 margin-top:20px;
 margin-bottom:20px;
 margin-left:10px; 
 margin-right:10px; 
`

export default BlocTextConnect
  