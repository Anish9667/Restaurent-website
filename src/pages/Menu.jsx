
import React, { useState } from "react";
import menuItems from "../data/menuItems";
import MenuCard from "../components/MenuCard";

const categories = ["All", "Starters", "Main Course", "Desserts", "Beverages", "Salads"];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Our Delicious Menu</h1>

      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? "bg-green-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <MenuCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
