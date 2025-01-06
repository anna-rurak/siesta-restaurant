import React from "react";
import menu from "../../assets/menu.js";
import OnlineOrdersContainer from "./OnlineOrdersContainer.js";
import { Button } from "@headlessui/react";

export default function OnlineOrders() {
    const soups = menu.filter((dish) => dish.type === "soup");
    const pizzas = menu.filter((dish) => dish.type === "pizza");
    const mainCourses = menu.filter((dish) => dish.type === "main-course");
    const drinks = menu.filter((dish) => dish.type === "drink");
    const appetizers = menu.filter((dish) => dish.type === "appetizer");

    return (
        <div className={`mx-auto max-w-6xl grid grid-cols-3 gap-8`}>
            {/* MENU */}
            <div
                className={`overflow-hidden shadow-lg shadow-italian-green rounded-lg h-auto bg-italian-light-green col-span-2`}
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

            {/* ORDER SUMMARY */}
            <div className=" col-span-1 h-fit ">
                <div className="my-8 mt-0 bg-italian-light-green overflow-hidden shadow-lg shadow-italian-green  h-fit  ">
                    <div className="w-full bg-italian-green py-6 text-left pl-12 rounded-lg ">
                        <h1 className=" text-white text-xl font-bold italic">
                            Twoje zamówienie
                        </h1>
                    </div>
                    <div className="px-9 py-6">
                        <div id="order"></div>
                        <p className="font-semibold italic mt-8 w-full grid grid-cols-2">
                            <span>Dostawa:</span>
                            <span className="text-right">5,99 zł</span>
                        </p>
                        <p className="font-semibold italic w-full grid grid-cols-2">
                            <span>RAZEM:</span>
                            <span className="text-right">0,00 zł</span>
                        </p>
                        <p className="text-sm italic">
                            min wartość zamówienia 50,00 zł
                        </p>
                    </div>
                </div>

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
                <Button className="rounded-lg bg-italian-red hover:bg-italian-red-dark py-3 p-10 text-lg font-semibold text-white text-center mx-auto block">
                    Dane zamawiającego
                    <i class="fa-solid fa-arrow-right ml-4"></i>
                </Button>
            </div>
        </div>
    );
}
