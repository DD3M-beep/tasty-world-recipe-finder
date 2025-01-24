import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import type { Recipe } from "@/data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg text-recipe-dark">{recipe.title}</h3>
          <Badge variant="outline" className="bg-recipe-primary/10 text-recipe-primary">
            {recipe.region}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          {recipe.tastes.map((taste) => (
            <Badge key={taste} variant="secondary" className="bg-recipe-accent/10 text-recipe-accent">
              {taste}
            </Badge>
          ))}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-1" />
          {recipe.prepTime}
        </div>
      </CardContent>
    </Card>
  );
};