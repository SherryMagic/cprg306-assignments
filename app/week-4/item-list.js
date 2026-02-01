// Build the ItemList Component
// In item-list.js, create a functional component named ItemList.

// Imports: Import the Item component you just created and the data from items.json.
// Mapping: Inside the component, use the JavaScript map function to loop through the items array.
// Rendering: For each item in the array, return an Item component.
// Props: Pass the name, quantity, and category from the data object to the Item component as props.
// Keys: Don't forget to provide a unique key prop for each component using the item's id.
// Requirements:

// Do not use useState or any state management.
// Do not include any buttons or event handlers.
// Focus strictly on ensuring data flows correctly from the JSON file -> ItemList -> Item.
import Item from "./item";
import items from "./items.json";

// export default function ItemList() {
//     return (
//         <ul className="space-y-4">
//             {items.map((item) => (
//                 <Item key = {item.id}
//                         name = {item.name}
//                         quantity = {item.quantity}
//                         category = {item.category} />
//             ))}
//         </ul>
//     )
// }

//You can achieve this by manipulating the data before you map it. 
// You might use the .reduce() method or multiple .filter() calls to organize the items into categories, and then map over those categories.
export default function ItemList() {
    const categories = [...new Set(items.map((item) => item.category))];

    return (
        <div>
            {categories.map((category) => (
                <section key ={category}>
                    <h2 className="text-2xl font-bold text-green-500">
                        {category}
                    </h2>
                    
                    <ul className="space-y-4 text-orange-600" >
                        {items.filter((item) => item.category === category).map((item) => (
                            <Item key = {item.id}
                                    name = {item.name}
                                    quantity={item.quantity}
                                    category={item.category}/>  
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    );
}