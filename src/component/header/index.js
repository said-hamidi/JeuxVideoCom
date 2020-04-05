import React from 'react';
import styled from 'styled-components'
import iconomenu from '../../Image/iconomenu.png'
import search from '../../Image/search.png'

const MenuBar = () =>{
        return (
            <Header>
                <ConstHeadRight>
                    <MoveA>
                        <Menuimg src={iconomenu}>
                        </Menuimg>
                    </MoveA>
                    <Redirect>
                        {/* <MoveA href="/jeuxvideo.com">jeuxvideo<Comspan>.com</Comspan> */}
                        <MoveA>jeuxvideo<Comspan>.com</Comspan>
                        </MoveA>  
                    </Redirect>
                </ConstHeadRight>
                <ConstHeadLeft>
                    <MoveA>
                    <ImageSearch>
                        <Searchimg src={search} ></Searchimg>
                    </ImageSearch>
                    </MoveA>
                    <MoveA>
                    <ImageContact>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="30" height="30" fill="white"><path d="M 896 0 q 182 0 348 71 t 286 191 t 191 286 t 71 348 q 0 181 -70.5 347 t -190.5 286 t -286 191.5 t -349 71.5 t -349 -71 t -285.5 -191.5 t -190.5 -286 t -71 -347.5 t 71 -348 t 191 -286 t 286 -191 t 348 -71 Z m 619 1351 q 149 -205 149 -455 q 0 -156 -61 -298 t -164 -245 t -245 -164 t -298 -61 t -298 61 t -245 164 t -164 245 t -61 298 q 0 250 149 455 q 66 -327 306 -327 q 131 128 313 128 t 313 -128 q 240 0 306 327 Z m -235 -647 q 0 -159 -112.5 -271.5 t -271.5 -112.5 t -271.5 112.5 t -112.5 271.5 t 112.5 271.5 t 271.5 112.5 t 271.5 -112.5 t 112.5 -271.5 Z" /></svg>
                    </ImageContact> 
                    </MoveA>
                </ConstHeadLeft>      
            </Header>
        )
      }
      
      const Header = styled.div`
            background-color: #004365;
            width:100%;
            display: flex;
            padding: 8px 7px;
      `
      const ConstHeadRight = styled.div`
            display:flex;
            align-items: center;
            justify-content:center;
      `
      const Menuimg= styled.img`
            width:30px;
            height:35px;
      `
      const ConstHeadLeft = styled.div`
            display:flex;
            align-items: center;
            justify-content:flex-end;
            padding-right:20px;
            flex:1;
      `
      const Searchimg = styled.img`
            width:25px;
            height:25px;
      `
      const Redirect = styled.div`
            font-family: Arial, Helvetica, sans-serif;
            font-size:20px;
            color:white;
      `
      const Comspan= styled.span`
            color:orange;
      `
      const ImageSearch =styled.div`
            justify-content: space-between;
      `
      const ImageContact =styled.div`
            justify-content: space-between;
      `
      const MoveA = styled.a`
            padding-left: 5px;
            color:white;
            display:block;
            text-decoration:none;
      `  
export default MenuBar
