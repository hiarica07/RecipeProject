import React, { useContext } from 'react'
import {ContainerS ,ButtonS, FormS, InputS, SelectS } from './style'
import { RecipeContext } from '../../context/RecipeProvider'

const Header = () => {


  const{setQuery,setMealType,getData}=useContext(RecipeContext)

  const handleSubmit=(e)=>{
e.preventDefault()

getData()

  }


  return (
    <div>
        
      <ContainerS>
        <div>
          <h1>Recipe App</h1>
          <FormS onSubmit={handleSubmit} >
            <InputS onChange={(e)=>setQuery(e.target.value)} type="text" placeholder="Search for a recipe"/>
            <ButtonS type="submit" >Search</ButtonS>
            <SelectS onChange={(e)=>setMealType(e.target.value)} name="mealType" id="mealType">
              <option value="breakfast">Breakfast</option>
              <option value="lunch" selected>Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
              <option value="brunch">Brunch</option>
              <option value="teatime">Tea Time</option>
            </SelectS>
          </FormS>
        </div>

        


      </ContainerS>  
               

                
    </div>
  )
}

export default Header