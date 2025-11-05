import React from "react";
import ShoppingCartCard from "../components/ShoppingCartCard";

const ShoppingCart: React.FC = () => {
  const products = [
    { name: "Name", quantity: "quantity", price: "Price" },
    { name: "Name", quantity: "quantity", price: "Price" },
    { name: "Name", quantity: "quantity", price: "Price" },
    { name: "Name", quantity: "quantity", price: "Price" },

    { name: "Name", quantity: "quantity", price: "Price" },
    { name: "Name", quantity: "quantity", price: "Price" },
    { name: "Name", quantity: "quantity", price: "Price" },
    { name: "Name", quantity: "quantity", price: "Price" },

    { name: "Name", quantity: "quantity", price: "Price" },
    { name: "Name", quantity: "quantity", price: "Price" },
    { name: "Name", quantity: "quantity", price: "Price" },
    { name: "Name", quantity: "quantity", price: "Price" },

    { name: "Name", quantity: "quantity", price: "Price" },
    { name: "Name", quantity: "quantity", price: "Price" },
    { name: "Name", quantity: "quantity", price: "Price" },
    { name: "Name", quantity: "quantity", price: "Price" },
  ];

  return (
    <section className="container mx-auto p-4">
      <h2 className="mb-8 text-center font-serif text-4xl text-purple-900 underline decoration-2 underline-offset-8">
        Shopping Cart
      </h2>
      <div className="mx-auto h-500 w-4xl bg-yellow-400">
        <div className="container mx-auto grid grid-cols-2 grid-rows-4 gap-6 md:grid-cols-4">
          {products.map((product, index) => (
            <ShoppingCartCard
              key={index}
              name={product.name}
              quantity={product.quantity}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AppShoppingCart: React.FC = () => {
  return <ShoppingCart />;
};

export default AppShoppingCart;
