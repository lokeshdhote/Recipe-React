import { toast } from "react-toastify";
export {} from "../reducers/recipeCounter.jsx";

import { load } from "../reducers/recipeCounter.jsx";


export const asyncLoad =()=>(dispatch,getState)=>{


    try {
       setTimeout(() => {

        dispatch(load(JSON.parse(localStorage.getItem("recipes"))))
       }, 1500);
   

    } catch (error) {
        toast.error(error)
    }
}

export const asyncAdd =(recipe)=>(dispatch,getState)=>{


    try {

        const {recipes} =getState().recipeReducer

        localStorage.setItem("recipes",JSON.stringify([...recipes , recipe]))
        dispatch(asyncLoad())
    

    } catch (error) {
        toast.error(error)
    }
}

export const asyncUpdate =(newRecipe)=>(dispatch,getState)=>{

 const {recipes} =getState().recipeReducer
    try {
        const {recipes} =getState().recipeReducer

        const copyRecipe = [...recipes]
const index = copyRecipe.findIndex((r)=> r.id == newRecipe.id)
copyRecipe[index] = newRecipe
localStorage.setItem("recipes", JSON.stringify(copyRecipe))
        dispatch(asyncLoad())
    

    } catch (error) {
        toast.error(error)
    }
}

export const asyncDelete =(id)=>(dispatch,getState)=>{


    try {
        const {recipes} =getState().recipeReducer


        const updateDeleteRecipe=   recipes.filter((recipe)=> recipe.id != id)
        
        localStorage.setItem("recipes",JSON.stringify(updateDeleteRecipe))
        dispatch(asyncLoad())
    

    } catch (error) {
        toast.error(error)
    }
}


