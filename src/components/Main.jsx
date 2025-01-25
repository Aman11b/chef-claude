import React from "react"

export default function Main(){

    const [ingredients,setIngredients]=React.useState(["cabbage","onion",'garlic'])

    const ingredientListItems=ingredients.map(ingredient=>(
        <li key={ingredient}>
            {ingredient}
        </li>
    ))

    function handleSubmit(event) {
        event.preventDefault()

        const formData=new FormData(event.currentTarget)
        const newIngredient=formData.get('ingredient')

        setIngredients(prevIngredients=>[...prevIngredients,newIngredient])

    }
    return (
        <main>
            <form 
                className="add-ingredient-form"
                onSubmit={handleSubmit}
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
            <ul>
                {ingredientListItems}
            </ul>
        </main>
    )
}