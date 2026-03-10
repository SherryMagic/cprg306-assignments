"use client";
import MealIdeas from "./MealIdeas";
import { useState } from "react";

import ItemList from "./item-list";

import NewItem from "./NewItem";         

import itemsData from "./items.json";

export default function Week8Page() {
    const [items, setItems] = useState(itemsData)

    //store the ingredient for the API
    const [selectedItemName, setSelectedItemName] = useState("");

    function removeEmoji(str) {
        return str.replace(
            /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
            ''
        );
    }
    function handleItemSelect(item) {
        let cleanedName = removeEmoji(item.name)  // remove emojis first
            .split(",")[0]                        // remove quantity
            .trim()
            .toLowerCase();

        console.log("Selected ingredient:", cleanedName);

        setSelectedItemName(cleanedName);
    }
    // function handleItemSelect(item) {
    //     let cleanedName = item.name
    //         .split(",")[0]              // remove quantity
    //         .replace(/[^a-zA-Z ]/g, "") // remove emoji
    //         .trim()
    //         .toLowerCase();

    //     console.log("111Selected ingredient:", cleanedName);

    //     setSelectedItemName(cleanedName);
    // }
    // function handleItemSelect(item) {
    // let cleanedName = item.name
    //     .split(",")[0]          // remove text after comma
    //     .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
    //     .trim()
    //     .toLowerCase();

    //     console.log("Selected ingredient:", cleanedName);

    //     setSelectedItemName(cleanedName);
    // }
    // function handleItemSelect(item) {
    //     let cleanedName = item.name.split(",")[0].trim().replace(/[\uE000-\uF8FF]/g, ''); // remove emoji
    //     console.log("Selected ingredient:", cleanedName);
    //     setSelectedItemName(cleanedName);
    // }

   const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
   };

    //     Render
    // Return a main element containing:
    // An h1 header "Shopping List".
    // The NewItem component.
    // Pass your handleAddItem function to the onAddItem prop.
    // The ItemList component.
    // Pass your items state variable to the items prop.
    return (
        <main className="mx-auto bg-gray-50 dark:bg-gray-900 dark:text-pink-500 p-8">
            <div className="flex">
                <div className="w-1/2">
                    <NewItem onAddItem={handleAddItem}/>  {/* Pass the prop */}
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="w-1/2">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
          
        </main>
    )
}
