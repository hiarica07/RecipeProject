import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'
import ContainerS, { ButtonS, FormS, InputS, SelectS } from './style'
import homesvg from "../../assets/home.svg"
import axios from "axios"

const Home = () => {

  const [recipe,setRecipe] = useState([])
  const query = "chicken"
  const meal = "lunch"
  const APP_ID = "3b0240bd"
  const APP_KEY = "88ceed6f2912b5603c6bc9b0ad600212"

  const DATA_URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`

  const getData=async()=>{

    const meals = await axios(DATA_URL);
    setRecipe(meals.data.hits);

  
  
  }

  useEffect(()=>{
    getData()
  },[])

console.log(recipe);

  

  return (
    <div>
        
      <ContainerS>
        <div>
          <h1>Recipe App</h1>
          <FormS>
            <InputS type="text" placeholder="Search for a recipe"/>
            <ButtonS>Search</ButtonS>
            <SelectS name="mealType" id="mealType">
              <option value="breakfast">Breakfast</option>
              <option value="lunch" selected>Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
              <option value="brunch">Brunch</option>
              <option value="teatime">Tea Time</option>
            </SelectS>
          </FormS>
        </div>

        <div>
          <img src={homesvg} alt="" />
        </div> 

        <div>
          <RecipeCard/>
        </div>

      </ContainerS>  
               

                
    </div>
  )
}

export default Home