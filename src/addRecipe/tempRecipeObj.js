import Recipe from "./Recipe";

export let tempRecipe = new Recipe();

export default function  tempRecipeObj(editMode, recipeObj,text) {
    if (editMode){
        tempRecipe = recipeObj;
    }
    if(text === "init"){
        tempRecipe =new Recipe()
    }

}