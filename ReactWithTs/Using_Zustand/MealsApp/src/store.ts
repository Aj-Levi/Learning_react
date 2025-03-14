import { create } from "zustand";
import { StoreInterface, Meal } from "./Interfaces/interfaces.ts";

export const MealsStore = create<StoreInterface>((set) => ({
  filteredMeals: [],
  searchQuery: "",

  setSearchQuery: (str: string): void => {
    set(() => ({
      searchQuery: str,
    }));
  },

  setfilteredMeals: (meals: Meal[]): void => {
    set((state) => ({
      filteredMeals: meals.filter((meal: Meal): boolean =>
        meal.strMeal.toLowerCase().includes(state.searchQuery.toLowerCase())
      ),
    }));
  },
}));
