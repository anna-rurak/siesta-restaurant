import React from "react";

export default function OnlineOrdersContainer({ type, typeArray }) {
    return (
        <div>
            <h2 className="text-center mb-12 text-2xl text-italian-red font-bold">
                {type}
            </h2>

            {typeArray.map((dish) => (
                <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_2fr]  ">
                    <img
                        className="w-48 h-48 mb-12 pr-3 object-cover object-center mx-auto "
                        src={dish.img}
                        alt={dish.name}
                    />
                    <div>
                        <div className="flex justify-between mb-4 items-center">
                            <h3 className="text-xl font-semibold text-italian-green">
                                {dish.name}
                            </h3>
                            <p className="font-semibold text-xl">
                                {dish.price} zł
                            </p>
                        </div>
                        <p className="italic mb-8">{dish.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
