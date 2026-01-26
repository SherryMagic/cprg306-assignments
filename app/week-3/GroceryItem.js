/*In item.js, create a functional component named Item. 
This component should accept name, quantity, and category as props and display them in a list item element. 
Use Tailwind classes for styling.
border → adds a 1px border, p-2 → padding of 0.5rem (8px) on all sides,rounded → small rounded corners*/
export default function Item({ name, quantity, category }) {
    return (
        <li className="border border-blue-500 p-2 rounded hover:bg-yellow-100 transition-colors">
            <p className="font-medium text-blue-500">{name}</p>
            <p className="text-blue-500">Quantity: {quantity}</p>
            <p className="text-blue-500">Category: {category}</p>
        </li>
    );
}