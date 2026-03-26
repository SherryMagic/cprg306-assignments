// Import Necessary Hooks: Start by importing the necessary React hooks at the top of your file. You'll be using the useState hook.

// Update Render Method: The rendering of sorting buttons remains the same. The change is in rendering the list items. Now, each Item component should be clickable and trigger the onItemSelect function with the respective item as an argument. This is achieved by passing the onSelect prop to each Item component.

// Import useState
import Item from "./item";
import { useState } from "react";
// Update Component Definition: Begin defining your ItemList functional component. 
// In addition to the items prop from Week 7, this component should now also receive an onItemSelect prop.
export default function ItemList({ items, onItemSelect }) {
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
                      onSelect={() => onItemSelect(item)}  // pass item explicitly
                      // onSelect={onItemSelect}  // pass the handler directly
                      // onSelect = {() => onItemSelect && onItemSelect(item)}
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
              onSelect={() => onItemSelect(item)}  // pass item explicitly
              // onSelect={onItemSelect}  // pass the handler directly
              // onSelect = {() => onItemSelect && onItemSelect(item)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
