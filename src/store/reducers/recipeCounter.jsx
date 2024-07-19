
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipes: [],
};

export const recipeSlice = createSlice({
    name:"cookBook",
    initialState,
    reducers:{
        load:(state,action)=>{
            state.recipes= action.payload
        }
    }
})

export default recipeSlice.reducer
export const {load}=recipeSlice.actions
