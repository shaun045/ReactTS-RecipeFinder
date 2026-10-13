
interface Nutrient {
  name: string;
  amount: number;
  unit: string;
}

export interface Recipe {
  id: number;
  title: string;
  image: string | null;
  sourceUrl: string;
  nutrition: {
    nutrients: Nutrient[];
  };
}