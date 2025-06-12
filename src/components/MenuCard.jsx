// src/components/MenuCard.jsx

import React from "react";

const MenuCard = ({ name, price, image, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-lg font-bold text-green-600">₹{price}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
