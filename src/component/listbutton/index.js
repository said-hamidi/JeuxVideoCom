import React from 'react';
import styled from 'styled-components'

const ListButton = () => {
    
    return (
      <Container>
          <Comment>
              <ButtonRep>RÉPONDRE</ButtonRep>
          </Comment>
          <FooterList>
                  <FooterLeft>
                          <ButtonF>NOUVEAU SUJET</ButtonF>
                          <ButtonF>LISTE DES SUJET</ButtonF>
                  </FooterLeft>
                  <FooterRight>
                          <ButtonF>ACTUALISER</ButtonF>
                  </FooterRight>
          </FooterList>
      </Container>
    )
  }

  const Container = styled.div`
  `
  const Comment=styled.div`
  `
  const ButtonRep=styled.button`
        margin-left:8px;
        font-size:12px;
        background-color:#ff6205;
        min-width:95px;
        min-height:30px;
        color:white;
        margin-right:3px;
        border:solid 1px orange;
        border-radius:3px;
        font-weight:bold;
  `
  const FooterList=styled.div`
        color:white;
        width:100%;
        display: flex;
        padding: 8px 7px;
        padding-top:15px;
        padding-bottom:15px;
  `
  
  const FooterLeft=styled.div`
        display:flex;
  `
  const ButtonF=styled.button`
        font-size:10px;
        background-color:#6c7984;
        min-width:95px;
        min-height:30px;
        color:white;
        margin-right:3px;
        border:none;
        border-radius:3px;
        font-weight:bold;
  `
  const FooterRight=styled.div`
        display:flex;
        align-items: center;
        justify-content:flex-end;
        padding-right:20px;
        flex:1;
  `
export default ListButton
  