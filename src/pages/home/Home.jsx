import React, { useContext } from 'react'
import RecipeCard from './RecipeCard'
import homesvg from "../../assets/home.svg"
import Header from '../../components/header/Header'
import { RecipeContext } from '../../context/RecipeProvider'


const Home = () => {

  const {recipes}=useContext(RecipeContext)


  return (
    <div>
    <Header/>

    {recipes.length > 0 ? ( <RecipeCard/>) : <img src={homesvg} alt="" />}

    </div>

  )
}

export default Home