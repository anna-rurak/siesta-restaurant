import React from "react";

export default function MenuContainer({ type, typeArray }) {
  return (
    <div>
      <h2 className="text-center mb-12 text-2xl text-italian-red font-bold">
        {type}
      </h2>

      {typeArray.map((dish) => (
        <div>
          <div className="flex justify-between mb-4 items-center">
            <h3 className="text-xl font-semibold text-italian-green">
              {dish.name}
            </h3>
            <p className="font-semibold text-xl">{dish.price} zł</p>
          </div>
          <p className="italic mb-8">{dish.description}</p>
          <img
            className="w-48 h-48 mb-12 object-cover object-center"
            src={dish.img}
            alt={dish.name}
          />
        </div>
      ))}
    </div>
  );
}
