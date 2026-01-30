/*Build the Page Component
In page.js, create a functional component named Page that returns a main element wrapped around an h1 "Shopping List" header and the ItemList component. Use Tailwind classes for styling. 
p-4 → padding 1rem (16px) inside the container, max-w-xl → limits width to ~576px (prevents full-width stretching), mx-auto → horizontally centers the container
text-2xl → font size around 1.5rem (24px), larger than normal text, font-bold → makes the text bold, mb-3 → margin-bottom 0.75rem (12px) to separate it from the next element*/
import GroceryItemList from "./GroceryItemList";
export default function Page() {
    return (
        <main className ="p-4 max-w-xl mx-auto bg-green-100" >
            <h1 className = "text-3xl font-bold mb-3 text-blue-500">Shopping List</h1>
            <GroceryItemList /> 
        </main>
    )
}