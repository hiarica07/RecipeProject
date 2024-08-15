import React from 'react'
import {ContainerS ,ButtonS, FormS, InputS, SelectS } from './style'

const Header = () => {
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

        


      </ContainerS>  
               

                
    </div>
  )
}

export default Header