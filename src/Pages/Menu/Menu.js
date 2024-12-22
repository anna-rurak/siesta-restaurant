import React from "react";
import menu from "../../assets/menu.js";
import MenuContainer from "./MenuContainer.js";

export default function Menu() {
    const soups = menu.filter((dish) => dish.type === "soup");
    const pizzas = menu.filter((dish) => dish.type === "pizza");
    const mainCourses = menu.filter((dish) => dish.type === "main-course");
    const drinks = menu.filter((dish) => dish.type === "drink");
    const appetizers = menu.filter((dish) => dish.type === "appetizer");

    return (
        <div className={`mx-auto w-1/2 max-w-3xl mt-12`}>
            <div
                className={`duration-1000 overflow-hidden shadow-lg shadow-italian-green px-12 rounded-lg h-auto py-8`}
            >
                <MenuContainer type="Przystawki" typeArray={appetizers} />
                <MenuContainer type="Zupy" typeArray={soups} />
                <MenuContainer type="Dania Główne" typeArray={mainCourses} />
                <MenuContainer type="Pizza" typeArray={pizzas} />
                <MenuContainer type="Napoje" typeArray={drinks} />
            </div>
        </div>
    );
}
