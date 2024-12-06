import React from 'react';
import Navbar from "../Navbar/Navbar";


export default function Header(){
    return (
        <header className="relative bg-cover bg-center h-[100vh] bg-hero-pattern">
                <Navbar />
                <div className="flex items-center justify-center h-full text-white">
                    <h2 className="text-page-title bg-white/80 text-italian-green/70 font-thin w-full py-3 italic text-center">
                        Siesta!
                    </h2>
                </div>
            </header>
    )
}