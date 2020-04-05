import React from 'react';
import styled from 'styled-components'

const NewsForum = ({titlenew,imagenew}) => {
    return (
      <Container>
          <ForumNews>
            <TitleNewForum href="/forum" >{titlenew}</TitleNewForum>          
            <ImageNewForum src={imagenew}></ImageNewForum>
          </ForumNews>
      </Container>
    )
  }
const ForumNews=styled.div`
      margin-right:10px;
`
const TitleNewForum=styled.a`
      position: absolute;
      padding:7px 10px 5px 7px ;
      margin-left:7px;
      background: #48566b;
      color: #fff;
      font-family: robotoboldcondensed,Arial,Helvetica,sans-serif;
      font-size: 1rem;
      word-wrap: break-word;
      text-decoration:none;
`
const ImageNewForum=styled.img`
      display:flex;
      align-items:center;
      justify-items:center;
      margin-right:7px;
      margin-left:7px;
      margin-top:10px;
      margin-bottom:15px;
      width:100%;
`
const Container = styled.div`
      margin-left:10px; 
      margin-right:10px; 
`
export default NewsForum