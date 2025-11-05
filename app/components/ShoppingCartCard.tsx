import React from "react";
const HeartIcon = () => <span>♡</span>;
const ImageIcon = () => <span className="text-5xl opacity-50">🖼️</span>;

interface ShoppingCartItemProps {
  name: string;
  quantity: string;
  price: string;
}

const ShopingCartItemCard: React.FC<ShoppingCartItemProps> = ({
  name,
  quantity,
  price,
}) => {
  return (
    <div className="bg-dotted-pattern rounded-lg p-6 shadow-md">
      <div className="relative flex h-80 items-center justify-center rounded bg-purple-950">
        <ImageIcon />
        <button className="absolute top-2 right-2 text-2xl text-white">
          <HeartIcon />
        </button>
      </div>
      <div className="pt-2 text-left">
        <p className="text-purple-950">{name}</p>
        <p className="font-semibold text-purple-950">{price}</p>
      </div>
    </div>
  );
};

export default ShopingCartItemCard;
