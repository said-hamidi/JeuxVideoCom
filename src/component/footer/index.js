import React from 'react';
import styled from 'styled-components'

const Footer = (contenu) =>{
        return (
            <Container>
                <FooterF>
                    {/* <Title href="/jeuxvideo.com">Jeuxvideo<Comspan>.com</Comspan>  */}
                    <Title >Jeuxvideo<Comspan>.com</Comspan> 
                    </Title>
                </FooterF>  
            </Container>
        )
      }
      
  const Container = styled.div`
  `
  const FooterF = styled.div`
        background-color: #004365;
        width:100%;
        display: flex;
        padding: 8px 7px;
        display:flex;
        align-items: center;
  `
  const Title = styled.div`
        font-family: Arial, Helvetica, sans-serif;
        font-size:30px;
        color:white;
  `
  const Comspan = styled.span`
        color:orange;
  `  
export default Footer