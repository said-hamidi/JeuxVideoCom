import React from 'react';
import styled from 'styled-components';
import MenuBar from '../component/header/index.js';
import Footer from '../component/footer/index.js';
import ThemeForum from '../component/themeforum/index.js';
import BorderHeader from '../component/borderheader/index.js';
import TitleForum from '../component/titleforum/index.js';
import ListButton from '../component/listbutton/index.js';
import CommentForm from '../component/commentforum/index.js';

function Forum() {
      return (
        <Body>
        <React.Fragment>
            <MenuBar></MenuBar>
            <ThemeForum></ThemeForum>
            <BorderHeader></BorderHeader>
            <TitleForum contenttitle="Sujet:Topic des Spoils/Leaks"></TitleForum>
            <ListButton></ListButton>
            <CommentForm></CommentForm>
            <Footer></Footer>
        </React.Fragment>
        </Body>     
      );
    }
    
    const Body= styled.div`
    background-color:#f2f2f2;
     `
    export default Forum;
    
    