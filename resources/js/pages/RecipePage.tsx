import MainLayout from '../layouts/MainLayout';
import React from 'react';
export default function RecipePage() {

    return(
        <MainLayout>
            <div>
                <h1 className="text-[42px] font-semibold">Recipes</h1>
                &nbsp;
                &nbsp;
                <section  className="recipe-section gap-10">
                    <ul className="recipe-grid">
                        <li className="recipe-card">
                            <img src="https://placehold.co/400x400" alt="Recipe" className="recipe-image" />   
                            <h3 className="recipe-title">Delicious Recipe</h3>
                        </li>
                    </ul>
                     <ul className="recipe-grid">
                        <li className="recipe-card">
                            <img src="https://placehold.co/400x400" alt="Recipe" className="recipe-image" />   
                            <h3 className="recipe-title">Delicious Recipe</h3>
                        </li>
                    </ul>
                    <ul className="recipe-grid">
                        <li className="recipe-card">
                            <img src="https://placehold.co/400x400" alt="Recipe" className="recipe-image" />   
                            <h3 className="recipe-title">Delicious Recipe</h3>
                        </li>
                    </ul>
                     <ul className="recipe-grid">
                        <li className="recipe-card">
                            <img src="https://placehold.co/400x400" alt="Recipe" className="recipe-image" />   
                            <h3 className="recipe-title">Delicious Recipe</h3>
                        </li>
                    </ul>
                </section>
                <section  className="recipe-section gap-10 mt-[24px]">
                    <ul className="recipe-grid">
                        <li className="recipe-card">
                            <img src="https://placehold.co/400x400" alt="Recipe" className="recipe-image" />   
                            <h3 className="recipe-title">Delicious Recipe</h3>
                        </li>
                    </ul>
                     <ul className="recipe-grid">
                        <li className="recipe-card">
                            <img src="https://placehold.co/400x400" alt="Recipe" className="recipe-image" />   
                            <h3 className="recipe-title">Delicious Recipe</h3>
                        </li>
                    </ul>
                    <ul className="recipe-grid">
                        <li className="recipe-card">
                            <img src="https://placehold.co/400x400" alt="Recipe" className="recipe-image" />   
                            <h3 className="recipe-title">Delicious Recipe</h3>
                        </li>
                    </ul>
                    <ul className="recipe-grid">
                        <li className="recipe-card">
                            <img src="https://placehold.co/400x400" alt="Recipe" className="recipe-image" />   
                            <h3 className="recipe-title">Delicious Recipe</h3>
                        </li>
                    </ul>
                </section>
            </div>
        </MainLayout>
    );
}