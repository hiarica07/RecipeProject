import React from 'react'
import RecipeCard from './RecipeCard'
import homesvg from "../../assets/home.svg"
import Header from '../../components/header/Header'


const Home = () => {


  return (
    <div>
    <Header/>
    <div>

    <img src={homesvg} alt="" />

    
    </div> 
    <RecipeCard/>
    </div>
    
  )
}

export default Home