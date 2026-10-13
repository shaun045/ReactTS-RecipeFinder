import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest, 
  res: VercelResponse
) {
    const query = req.query.query as string;
    const apiKey = process.env.SPOONACULAR_API_KEY;

    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&minProtein=20&addRecipeInformation=true&addRecipeNutrition=true&apiKey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
}