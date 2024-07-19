import { configureStore } from "@reduxjs/toolkit";
import  recipeSlice  from "./reducers/recipeCounter.jsx";

export const store = configureStore({
    reducer:{
        recipeReducer:recipeSlice,
    }
})