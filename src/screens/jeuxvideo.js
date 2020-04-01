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


function Jeuxvideo() {
  return (
    <Body>
    <React.Fragment>
        <MenuBar></MenuBar>
        <BottomHeader contenu="jeuxvideo.com  / Les Forums de jeuxvideo.com : retrouvez notre communauté et venez échanger avec elle sur divers sujets et de nombreux topics"
         imageparam="data:image/png;base64,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">
        </BottomHeader>
        <TitleF contenttitle="Forum à la une"></TitleF>
        <NewsForum imagenew="https://image.noelshack.com/fichiers/2020/09/3/1582713536-acrossing.jpg" titlenew="Animal Crossing: New horizon"></NewsForum>
        <TitleF contenttitle="Les blabla"></TitleF>
        <Blablabloc contenu={[{name:"MOINS DE 15 ANS"},{name:"15 - 18 ANS"},{name:"18 - 25 ANS"},{name:"25 - 35 ANS"},{name:"PLUS DE 35 ANS"}]}></Blablabloc>
        <TitleF contenttitle="jeuxvideo.com"></TitleF>
        <Jeuxvideobloc contenu={[{name:"Suggestions jeuxvideo.com"},{name:"Boutique jeuxvideo.com"}]} imagebloc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwoNCg0KCAgNBwgIDQoHCAcHBw8ICQcNFREWFhURExMYKyggGBolGxUTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0NGA0NDzgZFhkwKzMrKy0rKystNystKysrKy0rKystKystKysrNysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQMCBAX/xAAhEAEAAQUBAQACAwAAAAAAAAAAAQIREjEyAwQhQTNhgf/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgYD/8QAGREBAAMBAQAAAAAAAAAAAAAAAAERMQIh/9oADAMBAAIRAxEAPwD5P2V3rY3/ACvvtnLq4xxMexbu5dwKtO7l2awJTu5dwBTu5dwBTu5dnIFNLl2YLTS5dnIFNMi7NAprcu4BKd3LuAKd5GTMFppcu4SRKaXWmfyzWnYU9OUKxBij36Zzt379MhvnFBVUEgBQSQVAAVIUAQkAAAFARUgFRUBUsoCAoBTtFp2EtRBGD6Ombv6OmcjXOKICqIoAhAKIAogCiAKIAogCiAKIAoAAgClO0WnYNRAYT36Ztfo6ZENc4KiqqSqAAAKgAAAAAqABAKCBYBUVAFSVBFEAWjaLTsJagIw59+mf7ae/TMa5wAVSVABFQAJAUQAFAQAAIUAEgAUBJFAQUBFp2FOwaiCMJ79M2vv0yIa5wFRVAAVAAUAAAQVAFQAgFARQARQBCQVAAWnaLTsJaiCMJ79M/wBtPfbMhrnFQFUIABUUAS6gAAIoAAAAAIQCoqSAKgKCALTtFp2DUBGHPv0zae/TMhrnAFVQSQFQUAEBQQFQAURQEABUIAUAQgAVFACnaLRsGgojDn6OmctffplOyGucBRVQCABQEFQAgAAIABQQIABUkFRUABQQgUEhadotGwagIw59+nDv32zIa5wVCFVUAAVAURQEUAQUEAAVFABAVFQFQUBFQFKdotOwaADB79M3fv0zSGucVFFUQAVBQRRAFRQQFABAAAUAAQBUUBBQAp2i07CWgCMJ9HTNp79MyGucBUVQVAVABUVAIVFBAUBJVAFQBUFBFEgBUJACFBFo2FGwagIw59+mbT6OmZDXOKAqiEgAEgKIBCgACAqKgAQACoAAACgigAU7CnYNAEYT36Z/t6frotXb+mGKRjUeRUubjvFMWi3I6xMQtzcdYmIW5HWJiFuR1iYhbkd4mIW4HWJiFuR1iYhbkdYmIW5LusTELcjrExC3I6wMQtytO1xdU0/mAtRpiJbFuvu/k/xhAM8431oA0yAAAAAAEgCkgCAAAAAAAAAAAALG4AGwCPN//9k=" title="COMMUNAUTÉ"></Jeuxvideobloc>
        <Footer></Footer>
    </React.Fragment>
    </Body>   
    
    
  );
}

const Body= styled.div`
background-color:#f2f2f2;
 `
export default Jeuxvideo;