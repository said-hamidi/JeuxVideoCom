import React from 'react';
import styled from 'styled-components'
import Whatsapp from '../../Image/whatsapp.png'
import Facebook from '../../Image/facebook.png'
import Twitter from '../../Image/twitter.png'
import MenuForum from '../../Image/menuforum.png'
import Points from '../../Image/point.png'

const ThemeForum = ({contenu}) => {
    
    return (
      <Container>
            <HeaderF>
                <Content>
                      <Titleforum>Animal Crossing : New Horizons</Titleforum>
                      <GameUse>Switch</GameUse>
                      <LogoList>
                          <Logo src={Whatsapp}></Logo><Logo src={Facebook}></Logo><Logo src={Twitter}></Logo>
                      </LogoList>
                </Content>
            </HeaderF>
            <FooterF>
                <FooterLeft><ImgMenuL src={MenuForum}></ImgMenuL><Title>Forum</Title></FooterLeft>
                <FooterRight><ImgMenuR src={Points}></ImgMenuR></FooterRight> 
            </FooterF>
      </Container>
    )
  }

const Container = styled.div`
`
const FooterF=styled.div`
      background-color:#ff572e;
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
const FooterRight=styled.div`
      display:flex;
      align-items: center;
      justify-content:flex-end;
      padding-right:20px;
      flex:1;
`
const ImgMenuL=styled.img`
      width:25px;
      height:25px;
`
const ImgMenuR=styled.img`
      width:30px;
      height:30px;
`
const Title=styled.div`
      font-size:20px;
      margin-left:10px;
`
const HeaderF=styled.div`
      background-color:black;
      color:white;
      display:flex;
`
const Content=styled.div`
      margin-top:10px;
      margin-bottom:10px;
      margin-left:20px;
      background-color:black;
`
const Titleforum=styled.div`
      font-size:22px;
`
const GameUse=styled.div`
      display:flex;
      align-items:center;
      display: inline-block;
      border-bottom:2px solid #ff572e;
      font-size:15px;
      justify-content:left;
`
const LogoList=styled.div`
      margin-top:5px;
`
const Logo=styled.img`
      width:30px;
      height:30px;
      margin:5px;
      border-radius:5px;
`
export default ThemeForum
  