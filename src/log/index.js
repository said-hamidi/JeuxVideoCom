import React, { useState } from 'react'
import styled from 'styled-components'
//import Wrapper from '../wrapper'
import Navbar from '../navbar/index'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';





function LoginForm({ title, onConfirm }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onUsernameChange = e => {
    setUsername(e.target.value)
  }

  const onPasswordChange = e => {
    setPassword(e.target.value)
  }

  const login = e => {
    e.preventDefault()
    onConfirm(username, password)
  }

  const reset = e => {
    e.preventDefault()
    setUsername('')
    setPassword('')
  }

  return (

           <LoginFormContainer>
        
        <svg aria-hidden="true" class="svg-icon native iconLogoGlyphMd" width="32" height="37" viewBox="0 0 32 37">
            <path d="M26 33v-9h4v13H0V24h4v9h22z" fill="#BCBBBB"></path>
            <path d="M21.5 0l-2.7 2 9.9 13.3 2.7-2L21.5 0zM26 18.4L13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5zM9.1 15.2l15 7 1.4-3-15-7-1.4 3zm14 10.79l.68-2.95-16.1-3.35L7 23l16.1 2.99zM23 30H7v-3h16v3z" fill="#F48024"></path>
        </svg> 
                    
      <StyledHeader>
        <Navbar></Navbar>
      </StyledHeader>

      <StyledSocialConnexion>
        <StyledGoogle>
          <svg aria-hidden="true" class="svg-icon native iconGoogle" width="18" height="18" viewBox="0 0 18 18"><path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z" fill="#4285F4"></path><path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z" fill="#34A853"></path><path d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07z" fill="#FBBC05"></path><path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3z" fill="#EA4335"></path></svg>
          Log in with Google
        </StyledGoogle>
        <StyledGithub>
          <GitHubIcon/>
          Log in with GitHub
        </StyledGithub>

        <StyledFacebook>
          <FacebookIcon/>
          Log in with Facebook        
        </StyledFacebook>

      </StyledSocialConnexion>
      <StyledInput
        placeholder='Username'
        type='text'
        value={username}
        onChange={onUsernameChange}
      />
      <StyledInput
        placeholder='Password'
        type='password'
        value={password}
        onChange={onPasswordChange}
      />
      <PrimaryStyledButton onClick={login}>Log in</PrimaryStyledButton>
      <SecondaryStyledButton onClick={reset}>Reset</SecondaryStyledButton>
      <StyledFooter>
        <StyledAccount>
          Don’t have an account? <a href="/users/signup?ssrc=head&amp;returnurl=https%3a%2f%2fstackoverflow.com%2f">Sign up</a>
        </StyledAccount>
        <StyledEmployer>
          Are you an employer? <a href="https://careers.stackoverflow.com/employer/login" name="talent">Sign up on Talent <svg aria-hidden="true" class="svg-icon va-text-bottom sm:d-none iconShareSm" width="14" height="14" viewBox="0 0 14 14"><path d="M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1z"></path><path d="M7 1h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1z"></path></svg></a>

        </StyledEmployer>
      </StyledFooter>

    </LoginFormContainer>
   
  )
}

const LoginFormContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #EFF0F1;
`
/*
const StyledImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  background-color: white;
  filter: brightness(50%);
  z-index: -1;
`
*/
const StyledInput = styled.input`
  color: white;
  font-size: 15px;
  padding: 10px 30px;
  border-radius: 3px;
  border: 1px solid black;
  margin: 5px 0;
  outline: 0;
  background-color: black;
  opacity: 80%;
`

const StyledButton = styled.button`
  font-size: 16px;
  width: 200px;
  padding: 10px 20px;
  border-radius: 3px;
  border: 1px solid lightgray;
  margin: 2px 0;
  outline: 0;
  cursor: pointer;
  :hover {
    transition-property: width;
    transition-duration: 0.5s;
    width: 220px;
  }
`

const PrimaryStyledButton = styled(StyledButton)`
  background-color: #19667b;
  border-color: #19667b;
  color: white;
`

const SecondaryStyledButton = styled(StyledButton)`
  background-color: white;
  border-color: #DDD;
  color: #333;
`
const StyledHeader = styled.h2`
  color: #333;
  text-align: center;
`

const StyledFooter = styled.p`
  color: #333;
  text-align: center;
`

const StyledAccount = styled.div`
  color: #333;
  text-align: center;
`
const StyledEmployer = styled.div`
  color: #333;
  text-align: center;
`
const StyledGoogle = styled.div`
background-color: white;
  text-align: center;
  border-radius: 5px;
  padding: 10px 70px;
`
const StyledGithub = styled.div`
background-color: #2f3337;
color: white;
  text-align: center;
  border-radius: 5px;
  padding: 10px 70px;
`

const StyledFacebook = styled.div`
  background-color: #314a86;
  color: white;
  text-align: center;
  border-radius: 5px;
  padding: 10px 60px;
`
const StyledSocialConnexion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px;

`




export default LoginForm
