export interface Cocktail {
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;
}

export const useRandomCocktail = async () => {
  const { data, error } = await useFetch<{ drinks: Cocktail[] }>(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );

  if (error.value) {
    console.error("Failed to fetch cocktail:", error.value);
  }

  // Always return the first drink (only one is returned by this endpoint)
  return data.value?.drinks?.[0] ?? null;
};
