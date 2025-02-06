/* eslint-disable react/prop-types */
export default function IngredientList(props){
    
    const ingredientListItems = props.ingredients.map(ingredient=>(
        <li key={ingredient}>
            {ingredient}
        </li>
    ))

    return(
        <section className="container_section">
                <h2>Ingredients on hand</h2>
                <ul
                    className="ingredient-list"
                    aria-live="polite"
                >
                    {ingredientListItems}
                </ul>
                {props.ingredients.length > 3 && <div
                    className="get-recipe-container"
                >
                    <div    className="button_div"
                    ref={props.recipeSection}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from you list of ingredients.</p>
                    </div>

                    <button
                        onClick={props.toggleRecipeShown}
                    >Get a recipe</button>

                </div>}
            </section>
    )
}