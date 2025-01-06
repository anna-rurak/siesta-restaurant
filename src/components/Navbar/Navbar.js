import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const navigation = [
        { name: "Home", href: "/" },
        { name: "O nas", href: "/aboutus" },
        { name: "Menu", href: "/menu" },
        { name: "Rezerwacje", href: "/reservations" },
        { name: "Kontakt", href: "/contact" },
        { name: "Zamów online", href: "/orders" },
    ];

    const handleNavClick = (href) => {
        navigate(href);
        console.log(href);
        if (href !== "/") {
            setTimeout(() => {
                const heroHeight =
                    document.querySelector(".bg-hero-pattern")?.offsetHeight ||
                    0;
                window.scrollTo({
                    top: heroHeight,
                    behavior: "smooth",
                });
            }, 100);
        }
    };

    return (
        <Disclosure as="nav" className="bg-white/70 fixed w-full z-50">
            <div className="max-w-full px-3">
                <div className="relative flex h-14 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center pl-4">
                        <h1 className="italic text-italian-green text-4xl">
                            Siesta
                        </h1>
                    </div>

                    {/* Navigation */}
                    <div className="hidden sm:flex flex-grow justify-center">
                        <div className="flex space-x-9">
                            {navigation.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavClick(item.href)}
                                    className={classNames(
                                        location.pathname === item.href
                                            ? "bg-italian-green/50 text-white"
                                            : "text-italian-green hover:bg-italian-green/20 hover:text-italian-green",
                                        "rounded-lg px-3 py-1 text-lg font-medium"
                                    )}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="absolute right-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-1 text-italian-green hover:bg-italian-green/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute" />
                            <span className="sr-only">Open main menu</span>
                            <i
                                aria-hidden="true"
                                className="fa-solid fa-bars block size-6 group-data-[open]:hidden"
                            ></i>
                            <i
                                aria-hidden="true"
                                className="fa-solid fa-xmark hidden size-6 group-data-[open]:block"
                            ></i>
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            {/* Mobile menu panel */}
            <DisclosurePanel className="sm:hidden">
                <div className="flex flex-col space-y-2 px-3 pb-2 pt-1">
                    {navigation.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleNavClick(item.href)}
                            className={classNames(
                                location.pathname === item.href
                                    ? "bg-italian-green/50 text-white"
                                    : "text-italian-green hover:bg-italian-green/20 hover:text-italian-green",
                                "block rounded-md py-1 px-3 text-sm font-medium w-full text-left"
                            )}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
