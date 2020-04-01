import React, { useState } from "react";
import styled from "styled-components";

const CommentForm = ({ submit }) => {
    const [form, setForm] = useState({
      comment: "",
      pseudo:"",
      file: "",
    });
  return (
    <Container>

    
    <CommentF>
        <CommentDisplay>
            <HeaderCom>
                <ImgPseudo></ImgPseudo>
                <PseudoCom>Voltoutou</PseudoCom>
            </HeaderCom>
            <BottomCom>
                <ComForum>
                  On vient d'apprendre que le jeu était déjà entre les mains de certains SPOIL
                  Pour éviter les spoils ou autres, je propose de parler de ce qui va être spoil/leak ici seulement, et ne pas créer d'autres topic pour chaque spoil, pour respecter l'avis de chacun de vouloir ce spoil ou non!
                  Pour l'instant, mise à part un screen du forumeur qui prouve qu'il a le jeu, nous n'avons rien à discuter :hap: Mais veuillez, s'il vous plait, postez ici dès que vous voyez des spoil/leak sur ACNH !</ComForum>
            </BottomCom>
        </CommentDisplay>
    </CommentF>

    <CommentF>
        <CommentDisplay>
            <HeaderCom>
                <ImgPseudo></ImgPseudo>
                <PseudoCom>VincePL</PseudoCom>
            </HeaderCom>
            <BottomCom>
                <ComForum>
                A oui ? Qui est ce qui a déjà le jeu ?</ComForum>
            </BottomCom>
        </CommentDisplay>
    </CommentF>





    <Newcom onSubmit={e => submit(e, form)}>
        <Pseudo
        name="pseudo"
        placeholder="Pseudo"
        onChange={e => setForm({ ...form, favoriteTeam: e.target.value })}
        type="text"
      ></Pseudo>
      <File
        name="file"
        type="file"
        onChange={e => setForm({ ...form, file: e.target.value })}
      ></File>
      <NewComment
        name="comment"
        placeholder="Comment"
        onChange={e => setForm({ ...form, favoriteTeam: e.target.value })}
        type="text"
      ></NewComment>
      <Send disabled={form.isError} type="submit">
        ENVOYER VOTRE COMMENTAIRE
      </Send>
    </Newcom>

    </Container>
  );
};

const Container= styled.div`
    /* display:flex; */
    align-items:center;
    justify-content:center;
    margin:10px;
`
const CommentF=styled.div`
    border:1px solid grey;
    margin-bottom:20px;
    background-color:white;
`
const CommentDisplay=styled.div`
`
const HeaderCom=styled.div`
border-bottom:1px solid grey;
opacity:80%;
margin:10px;
display:flex;
`
const ImgPseudo=styled.img`
    border:2px solid;
    width:50px;
    height:50px;
    margin-right:8px;
    margin-bottom:20px;
`
const PseudoCom=styled.div`
font-size:15px;
font-weight:bold;


`
const BottomCom=styled.div`
/* border:2px solid; */
`
const ComForum=styled.div`
/* border:2px solid; */
margin:5px;
`

const Newcom = styled.form`
    display: flex;
  flex-direction: column;
  
`

const NewComment = styled.textarea`
border: none;
  border-bottom: 1px solid #0091ff;
  padding: 0 5px;
  margin-bottom: 1em;
  font-size: 15px;
`
const Pseudo = styled.textarea`
  border: none;
  border-bottom: 1px solid #0091ff;
  padding: 0 5px;
  margin-bottom: 1em;
  font-size: 15px;
`

const File = styled.input`
  border: none;
  margin-bottom: 1em;
  font-size: 15px;
`


const Send = styled.button`
  border: none;
  border-radius: 4px;
  margin-bottom: 1em;
  background-color: #0091ff;
  color: white;
  font-size: 15px;
  font-weight: bold;
  margin:auto;
  margin-bottom:20px;
  padding:5px;
`
  

export default CommentForm