import React from "react";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";

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
      <section className="justify-left mb-4 flex space-x-6">
        <h2 className="ml-6 text-left font-serif text-xl text-purple-900 underline decoration-2 underline-offset-8">
          Order By
        </h2>

        <div>
          <select className="rounded border border-purple-300 p-2">
            <option value="newest">Newest Arrivals</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </section>
      <div className="container mx-auto grid grid-cols-2 grid-rows-4 gap-6 md:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} name={product.name} price={product.price} />
        ))}
      </div>
      <h2 className="mt-8 text-center font-serif text-2xl text-purple-900 underline decoration-2 underline-offset-8">
        See More
      </h2>
    </section>
  );
};

const AppNewIn: React.FC = () => {
  return <BestSellers />;
};

export default AppNewIn;
