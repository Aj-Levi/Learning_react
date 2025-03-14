export interface Meal{
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}

export interface StoreInterface{
    filteredMeals: Meal[];
    searchQuery: string;
    setSearchQuery: (str: string) => void;
    setfilteredMeals: (meals: Meal[]) => void;
}