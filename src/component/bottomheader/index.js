import React from 'react';
import styled from 'styled-components'

const BottomHeader = ({contenu, imageparam}) => {
    
    return (
      <Container>
          <Param>
                <SearchParam>{contenu}</SearchParam>
                <SearchIcon src={imageparam}></SearchIcon>
          </Param>   
          <SearchBar>
                  <Input placeholder="Rechercher un forum"></Input>
                  <Hold>
                  <SearchImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQh52c8876st1hzqd3UHxy1cm3Vh1-5PSf-9tUuRdeD8eOg4n1q"></SearchImg>
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
    max-width:20px;
    max-height:20px;
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



//   {/* <ContentBloc>
//     {contenu.map(c => {

//         return<p>{c.name}</p>})}
//         </ContentBloc> */}

//   const ContentBloc = styled.div`
//     background-color: yellow;
//   `