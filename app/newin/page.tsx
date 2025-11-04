import React from "react";
import ProductCard from "../components/productcard";

const BestSellers: React.FC = () => {
  // En una app real, esto vendría de una API
  const products = [
    { name: "Name", price: "Price" },
    { name: "Name", price: "Price" },
    { name: "Name", price: "Price" },
    { name: "Name", price: "Price" },

    { name: "Name", price: "Price" },
    { name: "Name", price: "Price" },
    { name: "Name", price: "Price" },
    { name: "Name", price: "Price" },

    { name: "Name", price: "Price" },
    { name: "Name", price: "Price" },
    { name: "Name", price: "Price" },
    { name: "Name", price: "Price" },

    { name: "Name", price: "Price" },
    { name: "Name", price: "Price" },
    { name: "Name", price: "Price" },
    { name: "Name", price: "Price" },
  ];

  return (
    <section className="bg-pink-50 px-4 py-12">
      <h2 className="mb-8 text-center font-serif text-4xl text-purple-900 underline decoration-2 underline-offset-8">
        New In
      </h2>
      <div className="container mx-auto grid grid-cols-2 grid-rows-4 gap-6 md:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} name={product.name} price={product.price} />
        ))}
      </div>
    </section>
  );
};

const AppNewIn: React.FC = () => {
  return <BestSellers />;
};

export default AppNewIn;
