import { toast } from "react-toastify";
import { load } from "../reducers/recipeCounter.jsx";

export const asyncLoad = () => (dispatch, getState) => {
    try {
        setTimeout(() => {
            const storedRecipes = localStorage.getItem("recipes");
            console.log("Loaded recipes from localStorage:", storedRecipes);
            if (storedRecipes) {
                dispatch(load(JSON.parse(storedRecipes)));
            } else {
                console.warn("No recipes found in localStorage");
            }
        }, 1500);
    } catch (error) {
        console.error("Error loading recipes:", error);
        toast.error(error.message);
    }
}

export const asyncAdd = (recipe) => (dispatch, getState) => {
    try {
        console.log("Adding recipe:", recipe);
        const { recipes } = getState().recipeReducer;
        const updatedRecipes = [...recipes, recipe];
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
        console.log("Saved recipes to localStorage:", updatedRecipes);
        dispatch(asyncLoad());
    } catch (error) {
        console.error("Error adding recipe:", error);
        toast.error(error.message);
    }
}

export const asyncUpdate = (newRecipe) => (dispatch, getState) => {
    try {
        const { recipes } = getState().recipeReducer;
        const copyRecipe = [...recipes];
        const index = copyRecipe.findIndex((r) => r.id === newRecipe.id);
        if (index !== -1) {
            copyRecipe[index] = newRecipe;
            localStorage.setItem("recipes", JSON.stringify(copyRecipe));
            console.log("Updated recipes in localStorage:", copyRecipe);
            dispatch(asyncLoad());
        } else {
            console.warn("Recipe not found for update:", newRecipe);
        }
    } catch (error) {
        console.error("Error updating recipe:", error);
        toast.error(error.message);
    }
}

export const asyncDelete = (id) => (dispatch, getState) => {
    try {
        const { recipes } = getState().recipeReducer;
        const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
        console.log("Deleted recipe and updated localStorage:", updatedRecipes);
        dispatch(asyncLoad());
    } catch (error) {
        console.error("Error deleting recipe:", error);
        toast.error(error.message);
    }
}
