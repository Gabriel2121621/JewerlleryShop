import React from "react";
import ProductCard from "./components/ProductCard";
import { ImageIcon } from "./components/Icons";
// --- Iconos (placeholders) ---

const ChevronLeftIcon = () => <span className="text-5xl">{"<"}</span>;
const ChevronRightIcon = () => <span className="text-5xl">{">"}</span>;

// --- 2. Hero Carousel ---
const HeroCarousel: React.FC = () => {
  return (
    <section className="relative mt-2 flex h-72 items-center justify-between bg-purple-500 p-4 md:h-128">
      <button className="absolute left-0 p-4 text-white opacity-75 hover:opacity-100">
        <ChevronLeftIcon />
      </button>
      {/* Contenido del carrusel iría aquí */}
      <div className="w-full text-center text-white">
        {/* <h1 className="text-4xl font-bold">Main Promotion</h1> */}
      </div>
      <button className="absolute right-0 p-4 text-white opacity-75 hover:opacity-100">
        <ChevronRightIcon />
      </button>
    </section>
  );
};

// --- 4. Best Sellers Section ---
const BestSellers: React.FC = () => {
  // En una app real, esto vendría de una API
  const products = [
    { name: "Name", price: "Price" },
    { name: "Name", price: "Price" },
    { name: "Name", price: "Price" },
    { name: "Name", price: "Price" },
  ];

  return (
    <section className="bg-pink-50 px-4 py-12">
      {/* Para el fondo de puntos, necesitarías un plugin de Tailwind 
        o añadir un CSS personalizado para 'background-image'.
        Por ahora, usamos un color sólido 'bg-pink-50'.
      */}
      <h2 className="mb-8 text-center font-serif text-4xl text-purple-900 underline decoration-2 underline-offset-8">
        Best Sellers
      </h2>
      <div className="container mx-auto grid grid-cols-2 gap-4 md:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} name={product.name} price={product.price} />
        ))}
      </div>
      <div className="mt-8 flex justify-center space-x-1.5">
        <span className="block h-2.5 w-2.5 rounded-full bg-purple-900"></span>
        <span className="block h-2.5 w-2.5 rounded-full bg-purple-400"></span>
        <span className="block h-2.5 w-2.5 rounded-full bg-purple-400"></span>
        <span className="block h-2.5 w-2.5 rounded-full bg-purple-400"></span>
        <span className="block h-2.5 w-2.5 rounded-full bg-purple-400"></span>
        <span className="block h-2.5 w-2.5 rounded-full bg-purple-400"></span>
      </div>
      <a
        href="#"
        className="mt-4 block text-center font-bold text-purple-900 underline"
      >
        See More
      </a>
    </section>
  );
};

// --- 5. Promo Banner ---
const PromoBanner: React.FC = () => {
  return (
    <section className="bg-dotted-pattern mb-2 border-y-2 border-purple-200 bg-pink-50 px-4 py-12">
      <div className="container mx-auto flex flex-col items-center justify-around text-center md:flex-row md:text-left">
        <div className="mb-6 md:mb-0">
          <h3 className="font-serif text-3xl font-bold text-purple-900">
            Discover Our
          </h3>
          <h3 className="mb-4 font-serif text-3xl font-bold text-purple-900">
            Jewellery Packs
          </h3>
          <p className="font-serif text-3xl text-purple-900">From €€</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex h-40 w-64 items-center justify-center rounded-lg bg-purple-950">
            <ImageIcon />
          </div>
          <a href="#" className="mt-4 font-bold text-purple-900 underline">
            See More
          </a>
        </div>
      </div>
    </section>
  );
};

// --- 7. Main App Component ---
const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <HeroCarousel />
        <BestSellers />
        <PromoBanner />
      </main>
      s{" "}
    </div>
  );
};

export default App;
