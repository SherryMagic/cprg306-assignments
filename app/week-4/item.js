// Part 2: The Components
// Build the Item Component
// In item.js, create a functional component named Item.
// This component must accept name, quantity, and category as props. It should render these details in a list item (<li>) element, styled with Tailwind CSS to look organized (e.g., using a card-like appearance).
// Tip: Ensure you are destructuring the props in the function arguments or accessing them via a props object.
export default function Item({ name, quantity, category }) {
    return (
        <li className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mb-3">
            <p className="text-lg font-semibold text-yellow-800">{name}</p>
            <p className="text-sm text-yellow-400">Quantity: {quantity}</p>
            <p className="text-sm text-yellow-400">Category: {category}</p>
        </li>
    )
}
