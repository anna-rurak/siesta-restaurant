import React from "react";
import { useState } from "react";
import menu from "../../../assets/menu.js";
import MenuContainer from "./MenuContainer.js";

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const soups = menu.filter((dish) => dish.type === "soup");
  const pizzas = menu.filter((dish) => dish.type === "pizza");
  const mainCourses = menu.filter((dish) => dish.type === "main-course");
  const drinks = menu.filter((dish) => dish.type === "drink");
  const appetizers = menu.filter((dish) => dish.type === "appetizer");

  const handleShowMenu = () => {
    setShowMenu((state) => !state);
  };

  return (
    <div className={`mx-auto w-1/2 ${showMenu === false ? "mt-2" : "mt-12"}`}>
      <div
        className={`duration-1000 overflow-hidden shadow-lg shadow-italian-green px-12 ${
          showMenu === false ? "h-0 py-0" : "h-auto py-8 "
        }`}
      >
        <MenuContainer type="Przystawki" typeArray={appetizers} />
        <MenuContainer type="Zupy" typeArray={soups} />
        <MenuContainer type="Dania Główne" typeArray={mainCourses} />
        <MenuContainer type="Pizza" typeArray={pizzas} />
        <MenuContainer type="Napoje" typeArray={drinks} />
      </div>
      <button
        onClick={handleShowMenu}
        className={`block mx-auto mt-8
        px-12 py-2 rounded-full ${
          showMenu === false
            ? "bg-italian-light-green"
            : "bg-italian-red text-white"
        }`}
      >
        {" "}
        {showMenu === false ? "Pokaż menu" : "Ukryj menu"}
      </button>
    </div>
  );
}
