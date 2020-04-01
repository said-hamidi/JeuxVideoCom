import React from 'react';
import styled from 'styled-components'
import logotitle from '../../Image/fleche-title.png'

const TitleF = ({contenttitle}) => {
    
    return (
      <Container>      
            <TitleForum>
                {/* <ImageTitle src="https://www.direct-signaletique.com/I-Grande-12534-plaque-de-porte-icone-fleche-en-bas.net.jpg"></ImageTitle>  */}
                <ImageTitle src={logotitle}></ImageTitle> 
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
        font-size: 18px;
        color: #ff4203;
        font-weight: bold;
        margin-left:5px;
`
const TitleForum=styled.div`
        display:flex;
        align-items: center;
        margin-top:10px;
        margin-left:10px;
    
`
const ImageTitle=styled.img`
    display:flex;
    align-items:center;
    width:15px;
    height:15px;
`
const Container = styled.div`
    border-top:2px solid;
    border-color:#d5d5d5;
    margin-top:20px;
    margin-bottom:30px;
    margin-left:10px; 
    margin-right:10px; 
`
export default TitleF