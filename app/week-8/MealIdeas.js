"use client";
import { useEffect, useState } from "react";

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      console.log("API response:", data); // debug
      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meals:", error);
      return [];
    }
  }

export default function MealIdeas({ ingredient }) {


  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    console.log("Fetching meals for:", ingredient); // debug

    const mealIdeas = await fetchMealIdeas(ingredient);

    console.log("Meals:", mealIdeas); // debug
    
    setMeals(mealIdeas);
  }

  useEffect(() => {
    if (ingredient) {
    loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Meal Ideas</h2>

      {ingredient && <p className="mb-2">Using ingredient: {ingredient}</p>}

      {meals.length === 0 ? (
        <p>No meal ideas found.</p>
      ) : (
        <ul className="list-disc ml-5">
          {meals.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

/*"use client";
import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        if (!ingredient) return;

        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    }

    useEffect(() => { 
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas</h2>

            {ingredient && <p>Using ingredient: {ingredient}</p>}

            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    );
}*/