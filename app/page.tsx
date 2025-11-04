import React from "react";
import ProductCard from "./components/productcard";
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

// --- 6. Footer ---
const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-200 pt-12 text-purple-900">
      <div className="container mx-auto mb-8 text-center">
        <div className="text-lg font-bold">Serendipia Jewellery Shop</div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 text-center md:grid-cols-3">
        <div>
          <h4 className="mb-3 font-bold">HELP</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Payment Methods
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Frequently Asked
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold">SOCIAL</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                TikTok
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Whatsapp
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold">MENU</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home Page
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Catalog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Outlet
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 bg-purple-900 p-4 text-center text-xs text-purple-300">
        Serendipia Jewellery Shop | All Rights Reserved
      </div>
    </footer>
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
        <Footer />
      </main>
      s{" "}
    </div>
  );
};

export default App;
