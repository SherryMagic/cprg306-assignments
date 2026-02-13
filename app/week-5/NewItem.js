"use client";

import { useState } from "react";

export default function NewItem() {
   
    // Initialize State
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name,
            quantity,
            category,
        };

        console.log(item);

        alert(`Added: ${name}, quantity: ${quantity}, category: ${category}`);

        // Reset State
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <form 
            onSubmit = {handleSubmit}
            className = "max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md" >
            {/* Name field */}
            <div className="mb-4">
                <input 
                    type = "text" 
                    value = {name} 
                    onChange = {(e) => setName(e.target.value)}
                    required
                    placeholder="Item Name"
                    className=" w-full p-2 rounded-md border"
                    />
            </div>

            {/* Quantity + Category Row*/}
            <div className = "flex gap-4 mb-4">
                {/* Quantity */}
                <input
                    type = "number"
                    min="1"
                    max="99"
                    value = {quantity}
                    onChange = {(e) => setQuantity(Number(e.target.value))}
                    className = "w-1/3 p-2 rounded-md border"
                />

                {/* Category */}
                <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-2/3 p-2 rounded-md border"
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="personal care">Personal Care</option>
                    <option value="other">Other</option>

                </select>
            </div>

                {/* Submit Button */}
            <button
                type="submit"
                className = "w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">
                    +
            </button>
        </form>
    );
}