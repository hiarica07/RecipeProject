import React, { useContext } from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './style'
import mealFoto from "../../assets/meal.svg"
import { RecipeContext } from '../../context/RecipeProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const{name,password,setName,setPassword}=useContext(RecipeContext)

  const navigate=useNavigate()

  const handleSubmit = (e) =>{

  e.preventDefault()

  localStorage.setItem("username",name)
  localStorage.setItem("password",password)

  navigate("/home")

  }




  return (
    <LoginContainer>

<FormContainer>
  <StyledImg src={mealFoto}/>
  <Header> {"<Halil/>"} Recipe </Header>
  <StyledForm onSubmit={handleSubmit} >
    <StyledInput type="text" required placeholder="username" onChange={(e)=> setName(e.target.value)} />
    <StyledInput type="password" required placeholder="password" onChange={(e)=> setPassword(e.target.value)} />
    <StyledButton type="submit" >Login</StyledButton>
  </StyledForm>
</FormContainer>

    </LoginContainer>
  )
}

export default Login