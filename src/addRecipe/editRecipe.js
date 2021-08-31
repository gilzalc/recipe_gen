

import React from "react";
import AddRecipeMain from "./addRecipeMain";
import Recipe from "./Recipe";

export default function editRecipe(){
    return (
        <div>
            <AddRecipeMain editMode ={true} tempRecipe = {new Recipe()}/>
        </div>
    )


}