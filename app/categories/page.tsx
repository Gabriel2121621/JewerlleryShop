import React from "react";
import CategoryCard from "../components/CategoryCard";

const Categorie: React.FC = () => {
  // En una app real, esto vendría de una API
  const categories = [
    { name: "Name" },
    { name: "Name" },
    { name: "Name" },
    { name: "Name" },
    { name: "Name" },
    { name: "Name" },
  ];

  return (
    <section className="align-center bg-pink-50 px-4 py-12">
      <h2 className="mb-8 text-center font-serif text-4xl text-purple-900 underline decoration-2 underline-offset-8">
        Categories
      </h2>

      <div className="container mx-auto mb-6 grid w-4xl grid-cols-2 gap-6 md:grid-cols-3">
        {categories.map((categorie, index) => (
          <CategoryCard key={index} name={categorie.name} />
        ))}
      </div>
    </section>
  );
};

const AppCategories: React.FC = () => {
  return <Categorie />;
};

export default AppCategories;
