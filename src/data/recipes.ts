export type Recipe = {
  id: string;
  title: string;
  region: string;
  tastes: string[];
  prepTime: string;
  imageUrl: string;
};

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Ratatouille Provençale",
    region: "Europe",
    tastes: ["Savoureux", "Végétarien"],
    prepTime: "45 min",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Pad Thai",
    region: "Asie",
    tastes: ["Épicé", "Umami"],
    prepTime: "30 min",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "3",
    title: "Mafé Sénégalais",
    region: "Afrique",
    tastes: ["Épicé", "Riche"],
    prepTime: "60 min",
    imageUrl: "/placeholder.svg",
  },
];

export const regions = ["Europe", "Asie", "Afrique", "Amériques", "Océanie"];
export const tastes = ["Épicé", "Sucré", "Salé", "Umami", "Amer", "Savoureux", "Végétarien", "Riche"];