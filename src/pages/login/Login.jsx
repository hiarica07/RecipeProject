import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './style'
import mealFoto from "../../assets/meal.svg"

const Login = () => {
  return (
    <LoginContainer>

<FormContainer>
  <StyledImg src={mealFoto}/>
  <Header> {"<Halil/>"} Recipe </Header>
  <StyledForm>
    <StyledInput type="text" required placeholder="username"/>
    <StyledInput type="password" required placeholder="password"/>
    <StyledButton type="submit" >Login</StyledButton>
  </StyledForm>
</FormContainer>

    </LoginContainer>
  )
}

export default Login