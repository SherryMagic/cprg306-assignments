"use client";
import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./item-list";             

import itemsData from "./items.json";

export default function Week6Page() {
    const [items, setItems] = useState(itemsData)

    // Create Event Handler
    // Create a function called handleAddItem that takes newItem as an argument.
    // This function should update the items state by adding the newItem to the existing array. (Remember to spread the previous state: setItems([...items, newItem])).
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    //     Render
    // Return a main element containing:
    // An h1 header "Shopping List".
    // The NewItem component.
    // Pass your handleAddItem function to the onAddItem prop.
    // The ItemList component.
    // Pass your items state variable to the items prop.
    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-800 dark:text-pink p-8">
            <h1 className="text-4xl font-bold text-green-500 mb-6">
                Shopping List
            </h1>

            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    )
}
