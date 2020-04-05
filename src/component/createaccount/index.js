import React from 'react';
import styled from 'styled-components'

const BlocTextCreateAccount = ({title,contenu}) => {
    
    return (
      <Container>
          <TitleCreateAccount>{title}</TitleCreateAccount>
          <ContentBlocCreateAccount>{contenu}</ContentBlocCreateAccount>
          <ButtonConnect>Créer un compte</ButtonConnect>
      </Container>
    )
  }
 
  const TitleCreateAccount= styled.div`
        display:flex; 
        align-items: center;
        font-family: robotoboldcondensed,Arial,Helvetica,sans-serif;
        font-size: 14px;
        font-weight: bold;
        color: #797983;
        margin-top:35px;
        margin-bottom:10px;
  `
  const ContentBlocCreateAccount= styled.div`
        display:flex; 
        align-items: center;
        justify-content:center;
        font-family: robotoboldcondensed,Arial,Helvetica,sans-serif;
        font-size: 11px;
        color: #a09aa8;
        margin-top:4px;
        margin-bottom:4px;
  `
  const ButtonConnect=styled.button`
        background-color:#8a8a92;
        display:flex; 
        font-size: 14px;
        font-weight: bold;
        align-items: center;
        justify-content:center;
        padding:12px;
        border-radius:5px;
        color:white;
        margin-top:20px;
        margin-bottom:40px;
        border:none;
  `
 const Container = styled.div`
        border-top:1px solid;
        border-color:#cfcfdc;
        margin-top:20px;
        margin-left:10px; 
        margin-right:10px; 
`
export default BlocTextCreateAccount