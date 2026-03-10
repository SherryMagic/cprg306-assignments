// Build the ItemList Component
// In item-list.js, create a functional component named ItemList.

// Update ItemList Component
// We need to remove the hardcoded data from this component so it can accept the list from the parent.
// Props: Update the ItemList component to accept the items prop.
// Remove Data Import: Remove the import line for items.json. The data will now come from the props.
// State for Sorting:
// Import useState from React.
// Initialize a state variable sortBy (default to "name").
// Sorting Logic:
// Create a sorted version of the items prop based on the sortBy state.
// Note: Do not mutate the original prop. Use [...items].sort(...).
// Sort by name or category depending on the state variable.
// Sort Buttons:
// Render two buttons to toggle the sortBy state between "name" and "category".
// Style the active button to look different (e.g., darker background).
// Render:
// Map over the sorted items variable (not the prop directly) to render your Item components.

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  // normal sorting
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // grouped data
  const groupedItems = items.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
    return groups;
  }, {});

  const sortedCategories = Object.keys(groupedItems).sort((a, b) =>
    a.localeCompare(b)
  );

  return (
    <div>
      {/*  buttons */}
      <div className="mb-4 space-x-2">
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded ${
            sortBy === "name" ? "bg-blue-600 text-pink-500" : "bg-gray-400"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded ${
            sortBy === "category" ? "bg-blue-600 text-pink-500" : "bg-gray-400"
          }`}
        >
          Sort by Category
        </button>

        <button
          onClick={() => setSortBy("grouped")}
          className={`px-3 py-1 rounded ${
            sortBy === "grouped" ? "bg-blue-600 text-pink-500" : "bg-gray-400"
          }`}
        >
          Group by Category
        </button>
      </div>

      {/*  CONDITIONAL RENDER */}
      {sortBy === "grouped" ? (
        <div>
          {sortedCategories.map((category) => (
            <section key={category} className="mb-6">
              <h2 className="text-xl font-bold capitalize">
                {category}
              </h2>

              <ul className="ml-4">
                {groupedItems[category]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item) => (
                    <Item 
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
              </ul>
            </section>
          ))}
        </div>
      ) : (
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}