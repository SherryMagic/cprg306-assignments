// Build the Page Component
// In page.js, create a functional component named Page.

// It should return a main element wrapped around an h1 header ("Shopping List") and the ItemList component. 
// Since ItemList is handling the data internally (loading the JSON), you do not need to pass props to ItemList at this stage.
import ItemList from "./item-list";

export default function Page() {
    return (
        <main className ="max-w-2xl mx-auto p-4">
            <h1 className ="text-3xl font-bold mb-6 text-center text-green-600">
                Shopping List   
            </h1>
            <ItemList />
        </main>
    )
}