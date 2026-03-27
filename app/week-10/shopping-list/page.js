// feedback:useEffect dependency array is [user] — this causes the listener to re-subscribe every time auth state changes, creating a listener leak. 
// The correct pattern is an empty array [], which subscribes once on mount and cleans up on unmount

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";

import ItemList from "./item-list";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";
import removeEmoji from "./removeEmoji";

import { getItems, addItem } from "../_services/shopping-list-service";

export default function ShoppingListPage() {
    const { user } = useUserAuth();
    const router = useRouter();

    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    useEffect(() => {
        if (!user) {
            router.push("/week-10"); // redirect if not logged in
        }
    }, [user, router]);
    

    if (!user) {
        return <p>Redirecting...</p>;
    }

    // // Remove emojis from string
    // function removeEmoji(str) {
    //     return str.replace(
    //         /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
    //         ''
    //     );
    // }

    // Handle item selection for MealIdeas
    function handleItemSelect(item) {
        const cleanedName = removeEmoji(item.name)
            .split(",")[0]
            .trim()
            .toLowerCase();
        // console.log("Selected ingredient:", cleanedName);
        setSelectedItemName(cleanedName);
    }

    // Handle adding a new item to the list
    // const handleAddLocalItem = (newItem) => {
    //     setItems((prev) => [...prev, newItem]);
    // };

    // Get the shopping list
    // Create an async function loadItems. 
    // Inside this function, call the getItems function to get the shopping list items for the current user using user.
    // uid as the userId. Use setItems to set the state of items to the result of getItems.
    async function loadItems() {
        if(!user){
            return;
        }

        const items = await getItems(user.uid);
        setItems(items);
    }

    // Add the useEffect hook
    // Add the useEffect hook to the ShoppingList component. 
    // The useEffect hook will call the loadItems function when the component is mounted. 
    // Determine what the dependencies should be for the useEffect hook.
    useEffect(() => {
        if(!user) return;
        
        loadItems();
    }, []);

    // Handle adding an item
    // Update the handleAddItem function to call the addItem function to add the item to the shopping list. 
    // Use user.uid as the userId parameter. Use the id returned from addItem to set the id of the new item. 
    // Use setItems to set the state of items to include the new item.
    async function handleAddItem(item) {
        const id = await addItem(user.uid, item);

        setItems((prevItems) => [
            ...prevItems,
            { id, ...item },
        ]);

    }

    return (
        <main className="mx-auto bg-gray-50 dark:bg-gray-900 dark:text-pink-500 p-8">
            <h1>Shopping List</h1>
            <p>Welcome, {user.displayName}!</p>

            <div className="flex">
                <div className="w-1/2">
                    {/* Pass handleAddItem to NewItem */}
                    <NewItem onAddItem={handleAddItem} />
                    {/* Pass items and handleItemSelect to ItemList */}
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="w-1/2">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}



