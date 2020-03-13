import React from 'react';
import styled from 'styled-components'

const MenuBar = () =>{
        return (
            <Header>
                <ConstHeadRight>
                    <MoveA>
                    
                        <img src="https://www.talamancanaturereserve.com/imagenes/iconomenu.png" width="30px" height="35px">
                        </img>
                    
                    </MoveA>
                    
        
                <Redirect>
                    <MoveA url="http://www.jeuxvideo.com/">
                    jeuxvideo
                        <TitleMenu>
                            <span>.com</span>
                        </TitleMenu>  
                     
                    </MoveA>  
                </Redirect>
                </ConstHeadRight>

                <ConstHeadLeft>
                
                    <MoveA>
                    <ImageSearch>
                    
                        <img src="https://www.paraty-peluche.fr/img/search.png" width="25px" height="25px"></img>
                   
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
      const ConstHeadLeft = styled.div`
            display:flex;
            align-items: center;
            justify-content:flex-end;
            padding-right:20px;
            flex:1;
      `
      const Redirect = styled.div`
        font-family: Arial, Helvetica, sans-serif;
        font-size:20px;
        color:white;
      `
      const TitleMenu = styled.span`
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
      `
      
export default MenuBar

    // const ArticlePreview = () => {
    //     return (
    //       <Container>
    //         <Header>
    //           <ImageContainer>
    //             <span>Image</span>
    //           </ImageContainer>
    //           <TitleContainer>
    //             <span>
    //               4 mort du coronavirus a Ynov, le campus cherche le coupable
    //             </span>
    //           </TitleContainer>
    //         </Header>
    //         <Content>
    //           <span>
    //             Nisi aute mollit aute elit in officia enim ut in labore. Aliquip ad
    //             amet velit sint adipisicing adipisicing eu nisi amet elit dolor
    //             laboris minim voluptate. Ex aute excepteur dolore aliqua nostrud id
    //             adipisicing commodo aute id tempor. Eiusmod deserunt commodo ex et
    //             cupidatat anim nostrud id excepteur veniam mollit occaecat. Nisi anim
    //             voluptate nulla dolore nisi do aliquip duis. Do officia officia
    //             officia sunt adipisicing aliquip laborum Lorem commodo tempor
    //             voluptate exercitation laboris. Voluptate ullamco labore deserunt
    //             tempor ex laboris sunt ipsum.
    //           </span>
    //         </Content>
    //       </Container>
    //     )
    //   }
      
    //   const Content = styled.div`
    //     background-color: yellow;
    //   `
      
    //   const TitleContainer = styled.div`
    //     background-color: white;
    //     margin-left: 24px;
    //   `
      
    //   const ImageContainer = styled.div`
    //     background-color: yellow;
    //   `
      
    //   const Header = styled.div`
    //     background-color: green;
    //     display: flex;
    //     padding: 12px 6px;
    //   `
      
    //   const Container = styled.div`
    //     background-color: red;
    //     padding: 12px;
    //     margin: 12px;
    //   `

// const header=styled.div
// `background-color:Red`


// export default ArticlePreview