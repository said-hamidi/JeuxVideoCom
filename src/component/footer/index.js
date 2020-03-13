import React from 'react';
import styled from 'styled-components'

const Footer = (contenu) =>{
        return (
            <Footer>
            <FooterPart1></FooterPart1> 

            <FooterPart2>
            
          </FooterPart2> 
          <FooterPart3>
                <Title>
                    <MoveA url="http://www.jeuxvideo.com/">Jeuxvideo<TitleMenu><span>.com</span></TitleMenu>  
                    </MoveA>  
                </Title>
                <Content>{contenu.map(c => {return<Styleddiv>{c.name}</Styleddiv>})}</Content>
            </FooterPart3>  
             <FooterPart4>
                
            </FooterPart4>   
            </Footer>
            
        )
      }
      
      const FooterPart1 = styled.div`
        background-color: #004365;
        width:100%;
        display: flex;
        margin-left:10px;
        padding: 8px 7px;
        display:flex;
        align-items: center;
   `
   const FooterPart2 = styled.div`
   `
   const FooterPart3 = styled.div`
   `
   const FooterPart4 = styled.div`
   `
   const Styleddiv = styled.div`
   `
   
   const Content= styled.div`
   padding: 0px 0px 5px 5px;
   color: #006bd7;
   font-family: robotoboldcondensed,Arial,Helvetica,sans-serif;
   font-size: 10px;
 `
      const Title = styled.div`
        font-family: Arial, Helvetica, sans-serif;
        font-size:30px;
        color:white;
      `
      const TitleMenu = styled.span`
      color:orange;
      `
    
      const MoveA = styled.a`
        padding-left: 5px;
      `
      
export default Footer