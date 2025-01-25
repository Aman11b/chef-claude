export default function Main(){
    return (
        <main>
            <form className="add-ingredient-form">
                <input 
                    aria-label="add ingredient"
                    type="text"
                    placeholder="e.g. oregano"
                />
                <button>
                    Add Ingredient
                </button>
            </form>
        </main>
    )
}