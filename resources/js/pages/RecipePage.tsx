import MainLayout from '../layouts/MainLayout';
import React from 'react';
import { usePage } from '@inertiajs/react';


interface Recipes{
    id: number;
    title: string;
    servings?: string;
    ingredients: string;
    instructions: string;
    picture?: string | null;
}   

interface pageProps{
    recipes: Recipes[];
}

export default function RecipePage() {

    const {recipes} = usePage().props as pageProps;
    return(
        <MainLayout>
            <div>
      <h1 className="text-[42px] font-semibold text-center mb-6">Recipes</h1>

      <section className="recipe-section gap-10 flex-wrap">
        <ul className="recipe-grid">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="recipe-card">
              <img
                src={recipe.picture ? `/storage/${recipe.picture}` : 'https://placehold.co/400x400'}
                alt={recipe.title}
                className="recipe-image"
              />
              <h3 className="recipe-title">{recipe.title}</h3>
              {recipe.servings && (
                <p className="text-sm text-gray-500 text-center mb-1">Servings: {recipe.servings}</p>
              )}
              <div className="text-sm text-gray-700 mt-2">
                <p><strong>Ingredients:</strong></p>
                <p className="whitespace-pre-line">{recipe.ingredients}</p>

                <p className="mt-2"><strong>Instructions:</strong></p>
                <p className="whitespace-pre-line">{recipe.instructions}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>

        </MainLayout>
    );
}