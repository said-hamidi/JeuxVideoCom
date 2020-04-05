import React from 'react';
import styled from 'styled-components'
import imagetitle from '../../Image/fleche-droite.png'

const Jeuxvideobloc = ({contenu, imagebloc,title}) => {
    
    return (
      <Container>
          <BlocJ>
              <ImageBloc src={imagebloc}></ImageBloc>
              <ContentBloc>
                    <ContentTitle>
                        <ImageTitle src={imagetitle}></ImageTitle>
                        <TitleBloc>{title}</TitleBloc>
                    </ContentTitle>
                    <UlContent><Content>{contenu.map(c => {return<Styledli>{c.name}</Styledli>})}</Content></UlContent>
                </ContentBloc>
          </BlocJ>
      </Container>
    )
  }
  const Styledli= styled.li`
        margin:10px;
  `
  const Container = styled.div`
        border-bottom:2px solid;
        border-color:#d5d5d5;
        margin-left:10px; 
        margin-right:10px; 
  `
  const BlocJ= styled.div`
        background: white;
        margin: 10px;
  `
  const ImageBloc= styled.img`
        width:100%;
        height:40px;
  `
  const ContentTitle=styled.div`
        display:flex;
        align-items: center;
        background-color:white;
  `
  const ImageTitle=styled.img`
        display:flex;
        align-items:center;
        margin-left:4px;
        width:10px;
        height:10px;
  `
  const TitleBloc = styled.div`
        padding: 0px 0px 0px 7px;
        display: inline-block;
        align-items:center;
        background: white;
        color: #006bd7;
        font-weight: 500;
        font-family: robotoboldcondensed,Arial,Helvetica,sans-serif;
        font-size: 14px;
        font-weight:bold;
        word-wrap: break-word;
        opacity:80%;
  `
  const UlContent= styled.ul`
  `
  const Content= styled.div`
        padding: 0px 0px 5px 5px;
        color: #006bd7;
        font-family: robotoboldcondensed,Arial,Helvetica,sans-serif;
        font-size: 10px;
  `
  const ContentBloc = styled.div`
        margin-left:10px;
        margin-right:10px;
        margin-bottom:15px;
  `
export default Jeuxvideobloc