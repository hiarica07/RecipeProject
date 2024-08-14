import React from 'react'
import RecipeCard from './RecipeCard'
import ContainerS, { ButtonS, FormS, InputS, SelectS } from './style'
import homesvg from "../../assets/home.svg"
import axios from "axios"

const Home = () => {

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