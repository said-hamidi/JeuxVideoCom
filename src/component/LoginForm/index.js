import React, { useState } from 'react'
import styled from 'styled-components'


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


  return (
      <Container>
            <ButtonConnection
            placeholder='Pseudo'
            type='text'
            value={username}
            onChange={onUsernameChange}
            ></ButtonConnection> 
           <ButtonConnection
            placeholder='Mot de passe'
            type='password'
            value={password}
            onChange={onPasswordChange}
           ></ButtonConnection>
          <LostPassword>Mot de passe perdu</LostPassword>
          <FormulaireUser>Protection par reCAPTCHA - <Aform href="https://www.google.com/intl/fr/policies/privacy/"> Confidentialité </Aform>- <Aform href="https://www.google.com/intl/fr/policies/privacy/">Condition</Aform></FormulaireUser>
          <ValidationButton onClick={login}>VALIDER</ValidationButton>
          <FormVictime>Victime de harcèlement en ligne : <Aform href="https://www.jeuxvideo.com/harcelement.htm">comment réagir ?</Aform></FormVictime>
    </Container>
   
  )
}

const FormVictime=styled.div`
      display: flex;
      align-items:center;
      color:#9a92a1;
      font-size:13px;
      margin-bottom:40px;
      margin-top:30px;
      opacity:80%;
`
const FormulaireUser=styled.div`
      display: flex;
      align-items:center;
      justify-content: center;
      color:#9a92a1;
      font-size:12px;
      margin-bottom:20px;
`
const Aform =styled.a`
      display:flex;
      color:#9a92a1;
      margin-left:2px;
      margin-right:2px;
`
const Container = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left:15px;
      margin-right:15px;
`
const ButtonConnection = styled.input`
      color:#557b9a ;
      font-size: 15px;
      padding: 10px 30px;
      border-radius: 3px;
      border: 1px solid;
      border-color:#d0d0d0;
      margin: 5px 0;
      background-color: white;
      opacity: 80%;
`

const ButtonCusto = styled.button`
      font-size: 16px;
      width: 200px;
      padding: 10px 20px;
      border-radius: 5px;
      border: 1px solid lightgray;
      margin: 2px 0;
      outline: 0;
      margin: 0 auto;
      cursor: pointer;
      :hover {
        transition-property: width;
        transition-duration: 0.5s;
        width: 220px;
      }
`

const ValidationButton = styled(ButtonCusto)`
      background-color: #59b200;
      border-color: #d0d0d0;
      color: white;
      font-weight: bold;
`
const LostPassword = styled.div`
      display:flex;
      align-items: center;
      justify-content:flex-end;
      padding-right:5px;
      flex:1;
      font-size:11px;
      font-weight:bold;
      color:#0a74da;
      margin-top:10px;
      margin-bottom:20px;
`
export default LoginForm
