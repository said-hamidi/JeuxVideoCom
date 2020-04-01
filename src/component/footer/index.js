import React from 'react';
import styled from 'styled-components'

const Footer = (contenu) =>{
        return (
            <Container>
          <FooterPart3>
                <Title url="http://www.jeuxvideo.com/">Jeuxvideo<TitleMenu><span>.com</span></TitleMenu>  
                </Title>
            </FooterPart3>  
            </Container>
            
        )
      }
      
      const Container = styled.div``

      const FooterPart3 = styled.div`
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
      const TitleMenu = styled.span`
      color:orange;
      `
      
export default Footer