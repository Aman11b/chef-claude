import React from "react"
import IngredientList from "./IngredientList"
import ClaudeRecipe from "./ClaudeRecipe"

export default function Main(){

    const [ingredients,setIngredients]=React.useState(['all of the spices','pasta','ground nuts','tomato paste'])

    const [recipeShown, setRecipeShown]=React.useState(false)

    function handleSubmit(event) {
        event.preventDefault()

        const formData=new FormData(event.currentTarget)
        const newIngredient=formData.get('ingredient')

        setIngredients(prevIngredients=>[...prevIngredients,newIngredient])

    }

    function toggleRecipeShown(){
        setRecipeShown(prevShow=>!prevShow)
    }
    return (
        <main>
            <form 
                onSubmit={handleSubmit}
                className="add-ingredient-form"
                
            >
                <input 
                    aria-label="add ingredient"
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button>
                    Add Ingredient
                </button>
            </form>
            {ingredients.length > 0  &&  
                <IngredientList 
                ingredients={ingredients} 
                toggleRecipeShown={toggleRecipeShown}
            />
            }

            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}