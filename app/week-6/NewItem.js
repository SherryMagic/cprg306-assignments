// Revised version with programmatic categories and dark mode support

"use client";

import { useState } from "react";

//Props: Update the NewItem component function definition to accept props (or destructure { onAddItem }).
export default function NewItem({ onAddItem }) {
  // Initialize State
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Programmatic categories
  const categories = [
    { value: "produce", label: "Produce" },
    { value: "dairy", label: "Dairy" },
    { value: "bakery", label: "Bakery" },
    { value: "meat", label: "Meat" },
    { value: "frozen foods", label: "Frozen Foods" },
    { value: "canned goods", label: "Canned Goods" },
    { value: "dry goods", label: "Dry Goods" },
    { value: "beverages", label: "Beverages" },
    { value: "snacks", label: "Snacks" },
    { value: "household", label: "Household" },
    { value: "personal care", label: "Personal Care" },
    { value: "other", label: "Other" },
  ];

//   Handle Submit: Inside your handleSubmit function:
// Generate a random id for the new item (you can use Math.random().toString(36).substring(2, 9) or the web API crypto.randomUUID()).
// Create the item object with id, name, quantity, and category.
// Call the Prop: Instead of alert(), call the function passed as a prop: onAddItem(item).
// Keep the state reset logic (clearing the form after submission).
  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = { 
      id: Math.random().toString(36).substring(2, 9),
      name, 
      quantity, 
      category 
    };

    // send new item to parent component
    onAddItem(newItem);
    console.log(newItem);

    // Reset State
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-gray-100 dark:bg-gray-900 dark:text-white p-6 rounded-lg shadow-md"
    >
      {/* Name field */}
      <div className="mb-4">
        <label htmlFor="item-name" className="block mb-1 font-medium">
          Item Name
        </label>
        <input
          id="item-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Item Name"
          className="w-full p-2 rounded-md border bg-white dark:bg-gray-800 dark:border-gray-600"
        />
      </div>

      {/* Quantity + Category Row */}
      <div className="flex gap-4 mb-4">
        {/* Quantity */}
        <div className="w-1/3">
          <label htmlFor="item-quantity" className="block mb-1 font-medium">
            Qty
          </label>
          <input
            id="item-quantity"
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-2 rounded-md border bg-white dark:bg-gray-800 dark:border-gray-600"
          />
        </div>

        {/* Category */}
        <div className="w-2/3">
          <label htmlFor="item-category" className="block mb-1 font-medium">
            Category
          </label>
          <select
            id="item-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 rounded-md border bg-white dark:bg-gray-800 dark:border-gray-600"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
      >
        +
      </button>
    </form>
  );
}

