export interface Cocktail {
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
}

export const useRandomCocktail = async () => {
  const { data, error } = await useFetch<{ drinks: Cocktail[] }>(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );

  if (error.value) {
    console.error("Failed to fetch cocktail:", error.value);
  }

  // Always return the first drink (only one is returned by this endpoint)
  const cocktail = data.value?.drinks?.[0] ?? null;

  if (cocktail) {
    // Transform ingredients into an array, filtering out null/undefined values
    const ingredients = Object.entries(cocktail)
      .filter(([key, value]) => key.startsWith("strIngredient") && value)
      .map(([_, value]) => value as string);

    // Return only the properties we want, with ingredients as an array
    return {
      strDrink: cocktail.strDrink,
      strInstructions: cocktail.strInstructions,
      strDrinkThumb: cocktail.strDrinkThumb,
      ingredients,
    };
  }

  return null;
};
