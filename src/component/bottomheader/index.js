import React from 'react';
import styled from 'styled-components'
import searchparam from '../../Image/searchparam.png'
import imageparam from '../../Image/roulette.png'

const BottomHeader = ({contenu}) => {
    return (
      <Container>
          <Param>
                <SearchParam>{contenu}</SearchParam>
                <SearchIcon src={imageparam}></SearchIcon>
          </Param>   
          <SearchBar>
                  <Input placeholder="Rechercher un forum"></Input>
                  <Hold>
                  <SearchImg src={searchparam}></SearchImg>
                  </Hold>      
          </SearchBar>
      </Container>
    )
  }

const Container = styled.div`
    margin-left:10px; 
    margin-right:10px; 
`
const Param = styled.div`
    display:flex;
    margin:10px;
`
const SearchParam = styled.div`
    color: grey;
    font-size:12px;
    font-family: Arial, Helvetica, sans-serif;
`
const SearchIcon = styled.img`
    justify-content: space-between;
    align-items: center;
    justify-content:flex-end;
    flex:1;
    margin-top:3px;
    max-width:40px;
    max-height:25px;
`
const SearchBar = styled.div`
    background-color:white;
    margin: 15px;
    display:flex;
    flex: 1;
    align-items: center;
    color:grey;
    border: 1px solid;
    margin-bottom:25px;
`
const Input = styled.input`
    background-color:transparent;
    border: 0px solid;
    margin:5px;  
`
const SearchImg = styled.img`
    width:15px;
    height:15px;
    margin-right:5px;
`
const Hold=styled.div`
    display:flex;
    align-items: center;
    justify-content:flex-end;
    flex:1;
`
export default BottomHeader