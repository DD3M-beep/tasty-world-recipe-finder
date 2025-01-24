import { SearchBar } from "@/components/SearchBar";
import { FilterSection } from "@/components/FilterSection";
import { RecipeGrid } from "@/components/RecipeGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-recipe-light">
      <header className="bg-gradient-to-b from-recipe-primary/20 to-transparent py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-recipe-dark">
            Recettes du Monde
          </h1>
          <p className="text-center text-lg text-recipe-dark/80 max-w-2xl mx-auto">
            Découvrez des recettes authentiques du monde entier, adaptées à vos goûts et à votre culture
          </p>
          <SearchBar />
        </div>
      </header>
      
      <main className="py-12 space-y-12">
        <FilterSection />
        <RecipeGrid />
      </main>
    </div>
  );
};

export default Index;