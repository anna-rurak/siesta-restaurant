import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Header() {
    return (
        <header className=" bg-cover bg-center h-[100vh] bg-hero-pattern">
            <Navbar />
            <div className="flex items-center justify-center h-full">
                {/* tutaj nie potrafię ustawić responsywnego rozmiaru tekstu - nie wiem czemu po ustawieniu sm:text-page-title-sm tekst nie przybiera zadeklarowanego rozmiaru 200px, tylko z48... */}
                <h2 className="text-page-title-lg bg-white/80 text-italian-green/60 font-thin w-full h-60 px-5 py-3 rounded-lg italic text-center">
                    Siesta!
                </h2>
            </div>
        </header>
    );
}
