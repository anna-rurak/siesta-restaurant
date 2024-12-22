import React from "react";
import menu from "../../assets/menu.js";
import OnlineOrdersContainer from "./OnlineOrdersContainer.js";

export default function OnlineOrders() {
    const soups = menu.filter((dish) => dish.type === "soup");
    const pizzas = menu.filter((dish) => dish.type === "pizza");
    const mainCourses = menu.filter((dish) => dish.type === "main-course");
    const drinks = menu.filter((dish) => dish.type === "drink");
    const appetizers = menu.filter((dish) => dish.type === "appetizer");

    return (
        <div className={`mx-auto w-3/4 max-w-3xl mt-12 grid grid-cols-2 gap-2`}>
            <div
                className={`overflow-hidden shadow-lg shadow-italian-green px-12 rounded-lg h-auto py-8 bg-red-200`}
            >
                <OnlineOrdersContainer
                    type="Przystawki"
                    typeArray={appetizers}
                />
                <OnlineOrdersContainer type="Zupy" typeArray={soups} />
                <OnlineOrdersContainer
                    type="Dania Główne"
                    typeArray={mainCourses}
                />
                <OnlineOrdersContainer type="Pizza" typeArray={pizzas} />
                <OnlineOrdersContainer type="Napoje" typeArray={drinks} />
            </div>
            <div className="bg-blue-200"></div>
        </div>
    );
}
