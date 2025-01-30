import React from "react"

export default function Main(){

    const [ingredients,setIngredients]=React.useState([])

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
            {ingredients.length > 0  && <section className="container_section">
                <h2>Ingredients on hand</h2>
                <ul
                    className="ingredient-list"
                    aria-live="polite"
                >
                    {ingredientListItems}
                </ul>
                { ingredients.length > 3 && <div
                    className="get-recipe-container"
                >
                    <div className="button_div">
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from you list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>

                </div>}
            </section>}
        </main>
    )
}