"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";

import ItemList from "./item-list";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";
import itemsData from "./items.json";

export default function ShoppingListPage() {
    const { user } = useUserAuth();
    const router = useRouter();

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    useEffect(() => {
        if (!user) {
            router.push("/week-9"); // redirect if not logged in
        }
    }, [user, router]);

    if (!user) {
        return <p>Redirecting...</p>;
    }

    // Remove emojis from string
    function removeEmoji(str) {
        return str.replace(
            /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
            ''
        );
    }

    // Handle item selection for MealIdeas
    function handleItemSelect(item) {
        const cleanedName = removeEmoji(item.name)
            .split(",")[0]
            .trim()
            .toLowerCase();
        console.log("Selected ingredient:", cleanedName);
        setSelectedItemName(cleanedName);
    }

    // Handle adding a new item to the list
    const handleAddItem = (newItem) => {
        setItems((prev) => [...prev, newItem]);
    };

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



