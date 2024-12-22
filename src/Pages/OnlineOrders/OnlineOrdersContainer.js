import React from "react";
import TypeHeader from "./components/TypeHeader";
import { Button } from "@headlessui/react";
import AddRemoveButton from "./components/AddRemoveButton";

export default function OnlineOrdersContainer({ type, typeArray }) {
    return (
        <div>
            <TypeHeader type={type} />

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
                        <AddRemoveButton />
                    </div>
                </div>
            ))}
        </div>
    );
}
