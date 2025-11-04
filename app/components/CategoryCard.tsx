import React from "react";
const HeartIcon = () => <span>♡</span>;
const ImageIcon = () => <span className="text-5xl opacity-50">🖼️</span>;

interface CategoryCardProps {
  name: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name }) => {
  return (
    <div className="rounded-lg bg-purple-900 pt-2 pr-2 pb-4 pl-2 shadow-md">
      <div className="relative flex h-60 items-center justify-center rounded bg-pink-50">
        <ImageIcon />
        <button className="absolute top-2 right-2 text-2xl text-purple-900">
          <HeartIcon />
        </button>
      </div>
      <div className="pt-2 text-center">
        <h2 className="text-center font-serif text-xl text-pink-50 decoration-2 underline-offset-8">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default CategoryCard;
