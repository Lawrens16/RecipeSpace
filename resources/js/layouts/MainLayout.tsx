import React from 'react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="p-4 shadow bg-gray-100">
        <h1 className="text-xl font-bold">RecipeSpace</h1>
      </header>

      <main className="p-6">
        {children}
      </main>

      <footer className="p-4 bg-gray-100 text-center">
        © 2025 RecipeSpace
      </footer>
    </div>
  );
}
