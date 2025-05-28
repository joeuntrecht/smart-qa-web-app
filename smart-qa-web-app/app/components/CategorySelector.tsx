import { CATEGORIES } from "~/lib/constants";
import type { Category } from "~/types/types";

interface CategorySelectorProps {
    selectedCategory: Category;
    onCategoryChange: (category: Category) => void;
  }
  
  export default function CategorySelector({ 
    selectedCategory, 
    onCategoryChange 
  }: CategorySelectorProps) {
    return (
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Choose a Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.values(CATEGORIES).map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                p-4 rounded-lg border-2 transition-all duration-200 text-left
                ${selectedCategory === category.id
                  ? `${category.color} text-white border-transparent shadow-lg transform scale-105`
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-md'
                }
              `}
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="font-semibold">{category.name}</h3>
              </div>
              <p className={`text-sm ${
                selectedCategory === category.id 
                  ? 'text-white/90' 
                  : 'text-gray-600'
              }`}>
                {category.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  }