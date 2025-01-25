export default function Main(){
    const ingredients=['chicken','oregano','tomato']

    const ingredientListItems=ingredients.map(ingredient=>(
        <li key={ingredient}>
            {ingredient}
        </li>
    ))

    function handleSubmit(event) {
        event.preventDefault()

        const formData=new formData(event.currentTarget)
        const newIngredient=formData.get('ingredient')

        ingredients.push(newIngredient);

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