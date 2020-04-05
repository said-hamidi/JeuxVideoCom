import React from 'react';
import '../App.css';
import styled from 'styled-components'
import MenuBar from '../component/header/index.js'
import BottomHeader from '../component/bottomheader/index.js';
import TitleF from '../component/titleforum/index.js';
import NewsForum from '../component/newforum/index.js';
import Blablabloc from '../component/blablabloc/index.js';
import Jeuxvideobloc from '../component/jeuxvideobloc/index.js';
import Footer from '../component/footer/index.js';
import blue from '../Image/blue.png'
import newimgforum from '../Image/acrossing.png'

function Jeuxvideo() {
  return (
    <Body>
        <MenuBar></MenuBar>
        <BottomHeader contenu="jeuxvideo.com  / Les Forums de jeuxvideo.com : retrouvez notre communauté et venez échanger avec elle sur divers sujets et de nombreux topics">
        </BottomHeader>
        <TitleF contenttitle="Forum à la une"></TitleF>
        <NewsForum imagenew={newimgforum} titlenew="Animal Crossing: New horizon"></NewsForum>
        <TitleF contenttitle="Les blabla"></TitleF>
        <Blablabloc contenu={[{name:"MOINS DE 15 ANS"},{name:"15 - 18 ANS"},{name:"18 - 25 ANS"},{name:"25 - 35 ANS"},{name:"PLUS DE 35 ANS"}]}></Blablabloc>
        <TitleF contenttitle="jeuxvideo.com"></TitleF>
        <Jeuxvideobloc contenu={[{name:"Suggestions jeuxvideo.com"},{name:"Boutique jeuxvideo.com"}]} imagebloc={blue} title="COMMUNAUTÉ"></Jeuxvideobloc>
        <Footer></Footer>
    </Body>   
  );
}

const Body= styled.div`
background-color:#f2f2f2;
 `
export default Jeuxvideo;