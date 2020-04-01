import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import LoginForm from '../component/LoginForm/index.js';
import MenuBar from '../component/header/index.js';
import TitleF from '../component/titleforum/index.js';
import Footer from '../component/footer/index.js';
import BlocTextConnect from '../component/bloctextconnect/index.js';
import BlocTextCreateAccount from '../component/createaccount/index.js';
import BorderBottomConnect from '../component/borderbottomconnect/index.js';


function Login({ history }) {
    const BAD_LOGIN_MSG = 'False username or password'
  
    const login = (username, password) => {
      let data = {
        username,
        password
      }
  
      axios
        .post('https://easy-login-api.herokuapp.com/users/login', data)
        .then(res => {
          if (res.data && res.data.errors) {
            alert(BAD_LOGIN_MSG)
          } else {
            localStorage.setItem('MarvelSession', {
              token: res.headers['x-access-token']
            })
            history.push('/jeuxvideo.com')
          }
        })
        .catch(() => alert(BAD_LOGIN_MSG))
    }
  return (
    <Body>
    <React.Fragment>
        <MenuBar></MenuBar>
        <TitleF contenttitle="Se connecter"></TitleF>
        <BlocTextConnect contenu="Vous tentez d'accéder à un contenu qui nécessite que vous soyez connecté(e)."></BlocTextConnect>
        <div className='login'>
      <LoginForm onConfirm={login} />
        </div>
        <BlocTextCreateAccount title="Vous n'avez pas de pseudo sur jeuxvideo.com ?" contenu="C'est rapide, gratuit, et vous permettra de réserver votre pseudo sur les forums, afin que personne d'autre que vous ne puisse l'utiliser..."></BlocTextCreateAccount>
        <BorderBottomConnect></BorderBottomConnect>
        <Footer></Footer>
    </React.Fragment>
    </Body>   
    
    
  );
}

const Body= styled.div`
background-color:#f2f2f2;
 `
export default Login;