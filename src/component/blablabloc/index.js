import React from 'react';
import styled from 'styled-components'

const Blablabloc = ({contenu, imageparam}) => {
    return (
      <Container>
          <ContentBloc>
              <Content>{contenu.map(c => {return<Styledlist>{c.name}</Styledlist>})}</Content>
        </ContentBloc> 
      </Container>
    )
  }

  const Content= styled.div`
    background-color:white;
    border:2px solid;
    align-items:center;
    color: #fff;
    font-family: robotoboldcondensed,Arial,Helvetica,sans-serif;
    font-size: 12px;
    word-wrap: break-word;
    margin-bottom:2px;
    padding:10px;
  `
  const Styledlist= styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  background: #48566b;
  margin-bottom: 5px;
  padding: 5px;
  `
  const ContentBloc = styled.div`
    margin-left:10px;
    margin-right:10px;
    margin-bottom:15px; 
  `
  const Container = styled.div`
  margin-left:10px; 
  margin-right:10px; 
`

export default Blablabloc
  
