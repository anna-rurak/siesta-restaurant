import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/Pages/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div>
            {/* Header Section */}
            <header className="relative bg-cover bg-center h-[100vh] bg-hero-pattern">
                <Navbar />
                <div className="flex items-center justify-center h-full text-white">
                    <h2 className="text-page-title bg-white/80 text-italian-green/60 font-thin w-full px-20 py-3 rounded-lg italic text-center">
                        Siesta!
                    </h2>
                </div>
            </header>

            {/* About Section */}
            <LandingPage/>       

            {/* Footer Section */}
            <Footer/>
        </div>
    );
};

export default App;
