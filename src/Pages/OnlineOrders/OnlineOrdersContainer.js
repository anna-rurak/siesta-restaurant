import React, { useState } from "react";
import TypeHeader from "./components/TypeHeader";
import AddRemoveButton from "./components/AddRemoveButton";

export default function OnlineOrdersContainer({ type, typeArray }) {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (dish) => {
        setCartItems((prev) => ({
            ...prev,
            [dish.name]: (prev[dish.name] || 0) + 1,
        }));
    };
    const handleRemoveFromCart = (dish) => {
        setCartItems((prev) => ({
            ...prev,
            [dish.name]: Math.max((prev[dish.name] || 0) - 1, 0),
        }));
    };

    return (
        <div>
            <TypeHeader type={type} />

            {/* MENU */}
            {typeArray.map((dish, index) => (
                <div
                    className={`mx-6 px-12 py-8 grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_2fr] ${
                        index !== typeArray.length - 1
                            ? "border-b-2 border-b-italian-green"
                            : ""
                    }`}
                >
                    <img
                        className="w-48 h-48 pr-3 object-cover object-center mx-auto "
                        src={dish.img}
                        alt={dish.name}
                    />
                    <div id="container" className="relative">
                        <div className="relative">
                            <p className="absolute top-0 right-0 font-semibold text-xl">
                                {dish.price} zł
                            </p>
                            <div className="pr-24">
                                <h3 className="text-xl font-semibold text-italian-green">
                                    {dish.name}
                                </h3>
                                <p className="italic">{dish.description}</p>
                            </div>
                        </div>
                        <AddRemoveButton
                            onAdd={() => handleAddToCart(dish)}
                            onRemove={() => handleRemoveFromCart(dish)}
                            quantity={cartItems[dish.name] || 0}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
