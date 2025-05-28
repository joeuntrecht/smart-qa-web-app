import { useState } from "react";
import Layout from "~/components/Layout";
import CategorySelector from "~/components/CategorySelector";
import type { Category } from "~/types/types";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('general');

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <CategorySelector 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Selected Category: {selectedCategory}
          </h2>
          <p className="text-gray-600">
            The Layout and CategorySelector components are working! 
            Next, we'll add the question input and AI integration.
          </p>
        </div>
      </div>
    </Layout>
  );
}
