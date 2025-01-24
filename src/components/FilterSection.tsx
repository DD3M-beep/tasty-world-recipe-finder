import { Button } from "@/components/ui/button";
import { regions, tastes, dietTypes } from "@/data/recipes";

export const FilterSection = () => {
  return (
    <div className="space-y-6 w-full max-w-6xl mx-auto px-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-recipe-dark">Régions</h3>
        <div className="flex flex-wrap gap-2">
          {regions.map((region) => (
            <Button
              key={region}
              variant="outline"
              className="hover:bg-recipe-primary hover:text-white transition-colors"
            >
              {region}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-recipe-dark">Goûts</h3>
        <div className="flex flex-wrap gap-2">
          {tastes.map((taste) => (
            <Button
              key={taste}
              variant="outline"
              className="hover:bg-recipe-accent hover:text-white transition-colors"
            >
              {taste}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-recipe-dark">Type d'alimentation</h3>
        <div className="flex flex-wrap gap-2">
          {dietTypes.map((dietType) => (
            <Button
              key={dietType}
              variant="outline"
              className="hover:bg-recipe-secondary hover:text-white transition-colors"
            >
              {dietType}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};