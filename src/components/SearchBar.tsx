import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Input
        type="text"
        placeholder="Rechercher une recette..."
        className="pl-10 h-12 bg-white/90 backdrop-blur-sm border-recipe-primary/20"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-recipe-primary/60 w-5 h-5" />
    </div>
  );
};