import React from 'react';
import styled from 'styled-components'

const TitleF = ({img1,contenttitle}) => {
    
    return (
      <Container>      
            
              <TitleForum>
              <ImageTitle src="https://www.direct-signaletique.com/I-Grande-12534-plaque-de-porte-icone-fleche-en-bas.net.jpg"></ImageTitle> 
              <TitleText>{contenttitle}</TitleText>
              </TitleForum>

              </Container>  
    )
}   

const TitleText=styled.div`
display:flex; 
align-items: center;
justify-content:center;
font-family: robotoboldcondensed,Arial,Helvetica,sans-serif;
font-size: 1.25rem;
/* font-size:18px; */
/* font-style:bold; */
color: #ff4000;
margin-left:5px;

`
const TitleForum=styled.div`
        display:flex;
        align-items: center;
    
`
const ImageTitle=styled.img`
    display:flex;
    align-items:center;
    width:15px;
    height:15px;
`
const Container = styled.div`
    margin-top:20px;
    margin-bottom:20px;
    margin-left:20px; 
    margin-right:10px; 
`
export default TitleF