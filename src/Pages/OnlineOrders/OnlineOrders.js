import React from "react";
import menu from "../../assets/menu.js";
import OnlineOrdersContainer from "./OnlineOrdersContainer.js";
import { Button } from "@headlessui/react";
import OrderSummaryContainer from "./components/OrderSummaryContainer.js";
import OrderForm from "./components/OrderForm.js";

export default function OnlineOrders() {
    const soups = menu.filter((dish) => dish.type === "soup");
    const pizzas = menu.filter((dish) => dish.type === "pizza");
    const mainCourses = menu.filter((dish) => dish.type === "main-course");
    const drinks = menu.filter((dish) => dish.type === "drink");
    const appetizers = menu.filter((dish) => dish.type === "appetizer");

    const handleOrderFormClick = () => {
        const menuContainer = document.getElementById("menu-container");
        const orderFormContainer = document.getElementById(
            "order-form-container"
        );
        const btn = document.getElementById("order-form-btn");
        if (btn.innerText === "Dane zamawiającego") {
            menuContainer.classList.add("hidden");
            orderFormContainer.classList.remove("hidden");
            btn.innerText = `Powrót do menu`;
        } else if (btn.innerText === "Powrót do menu") {
            menuContainer.classList.remove("hidden");
            orderFormContainer.classList.add("hidden");
            btn.innerText = "Dane zamawiającego";
        }
    };

    return (
        <div className={`mx-auto max-w-6xl grid grid-cols-3 gap-8`}>
            {/* MENU */}
            <div
                className={`overflow-hidden shadow-lg shadow-italian-green rounded-lg h-auto bg-italian-light-green col-span-2`}
            >
                <div id="menu-container" className="">
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
                <div id="order-form-container" className="h-auto">
                    <OrderForm />
                </div>
            </div>

            {/* ORDER SUMMARY */}
            <div className=" col-span-1 h-fit ">
                <OrderSummaryContainer
                    className="hidden"
                    id="order-form-container"
                />
                {/* PAYMENT METHODS */}
                <div className="my-10 mt-0 bg-italian-light-green overflow-hidden shadow-lg shadow-italian-green h-fit  ">
                    <div className="w-full bg-italian-green py-6 text-left pl-12 rounded-lg ">
                        <h1 className=" text-white text-xl font-bold italic">
                            Metody płatności
                        </h1>
                    </div>
                    <div className="px-9 py-6">
                        <ul>
                            <li className="grid grid-cols-6">
                                <label for="transfer" className="col-span-5">
                                    Szybki przelew
                                </label>
                                <input
                                    type="radio"
                                    id="transfer"
                                    name="transfer"
                                    value="transfer"
                                    className="text-white col-span-1 w-4 h-4 "
                                />
                            </li>
                            <li className="grid grid-cols-6">
                                <label for="transfer" className="col-span-5">
                                    BLIK{" "}
                                </label>
                                <input
                                    type="radio"
                                    id="transfer"
                                    name="transfer"
                                    value="transfer"
                                    className="text-white col-span-1 w-4 h-4 "
                                />
                            </li>
                            <li className="grid grid-cols-6">
                                <label for="transfer" className="col-span-5">
                                    Gotówka przy odbiorze{" "}
                                </label>
                                <input
                                    type="radio"
                                    id="transfer"
                                    name="transfer"
                                    value="transfer"
                                    className="text-white col-span-1 w-4 h-4 "
                                />
                            </li>
                        </ul>
                    </div>
                </div>

                {/* NEXT PAGE BUTTON */}
                <Button
                    id="order-form-btn"
                    className="rounded-lg bg-italian-red hover:bg-italian-red-dark py-3 p-10 text-lg font-semibold text-white text-center mx-auto block w-68"
                    onClick={handleOrderFormClick}
                >
                    <p>
                        Dane zamawiającego
                        <i className="fa-solid fa-arrow-right ml-4"></i>
                    </p>
                </Button>
            </div>
        </div>
    );
}
