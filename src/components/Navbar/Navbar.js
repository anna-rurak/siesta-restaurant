import React from "react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white/70 shadow-md z-10">
            <h1 className="text-4xl text-italian-green/80 italic font-light ml-10">
                Siesta!
            </h1>
            <ul className="flex gap-4 mr-10">
                <li>
                    <a href="#" className="text-italian-green font-semibold">
                        O nas
                    </a>
                </li>
                <li>
                    <a href="#" className="text-italian-green font-semibold">
                        Menu
                    </a>
                </li>
                <li>
                    <a href="#" className="text-italian-green font-semibold">
                        Rezerwacje
                    </a>
                </li>
                <li>
                    <a href="#" className="text-italian-green font-semibold">
                        Kontakt
                    </a>
                </li>
                <li>
                    <a href="#" className="text-italian-red font-bold">
                        Zamów online
                    </a>
                </li>
            </ul>
        </nav>
    );
}
