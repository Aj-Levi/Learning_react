import React, { useEffect, useState } from "react";
import { MealsStore } from "../store.ts";
import { Meal } from "../Interfaces/interfaces.ts";

const MealsHome = () => {
  let { filteredMeals, searchQuery, setSearchQuery, setfilteredMeals } =
    MealsStore();

  const [InitialMeals, setInitialMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        let response = await fetch(
          "https://themealdb.com/api/json/v1/1/filter.php?a=indian"
        );
        let data = await response.json();
        setInitialMeals(data.meals);
      } catch (error) {
        console.error("unable to fetch data",error);
      }``
    };
    fetchMeals();
  }, []);

  useEffect(() => {
    setfilteredMeals(InitialMeals);
  }, [searchQuery]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="mb-8">
      <input
        type="text"
        name="search"
        id="search"
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
        setSearchQuery((e.target as HTMLInputElement).value)
        }
        placeholder="Search Meals"
        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white"
      />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredMeals.length === 0
        ? InitialMeals.map((meal, ind) => (
          <div
          key={ind}
          className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="text-lg font-semibold">{meal.strMeal}</div>
          </div>
          </div>
        ))
        : filteredMeals.map((meal, ind) => (
          <div
          key={ind}
          className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="text-lg font-semibold">{meal.strMeal}</div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealsHome;
