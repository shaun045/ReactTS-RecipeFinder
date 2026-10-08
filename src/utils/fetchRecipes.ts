import type { Recipe } from "./types";

export default async function fetchRecipes(query: string): Promise<Recipe[]> {
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&minProtein=20&apiKey=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  return data.results;
}