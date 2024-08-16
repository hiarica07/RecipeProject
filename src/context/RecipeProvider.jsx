import axios from 'axios'
import React, { createContext, useState } from 'react'

export const RecipeContext =  createContext()

const RecipeProvider = ({children}) => {

    const[name,setName]=useState(localStorage.getItem("username") || "")
    const[password,setPassword]=useState(localStorage.getItem("password") || "")

    const APP_ID = "3b0240bd"
    const APP_KEY = "88ceed6f2912b5603c6bc9b0ad600212"

    const [recipes,setRecipes] = useState([])
    const [query,setQuery] = useState("chicken")
    const [mealType,setMealType] = useState("teaTime")

    const[loading,setLoading] = useState(false)
    const[error,setError] = useState(false)

    const DATA_URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;



    const getData = async() => {
      setLoading(true)
      try {
        const {data} = await axios.get(DATA_URL)
        setRecipes(data.hits)
        // console.log(data.hits);
        
      } catch (error) {
        setError(true)
      }finally{
        setLoading(false)
      }    
    }
  
    if (error) {
      return <p>Something went wrong...</p>
    }
  
    if (loading) {
      return <p>Loading...</p>
    }



  return (
    <RecipeContext.Provider value={{
        name,setName,password,setPassword,setQuery,setMealType,recipes,setRecipes,getData
    }} >

    {children}


    </RecipeContext.Provider>
  )
}

export default RecipeProvider