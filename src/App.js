import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/Pages/LandingPage/LandingPage";

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
            <footer className="bg-white/70 bg-footer-texture py-6">
                <div className="flex justify-center gap-4">
                    <a href="#">
                        <img
                            src="icon-facebook.png"
                            alt="Facebook"
                            className="w-8 h-8"
                        />
                    </a>
                    <a href="#">
                        <img
                            src="icon-instagram.png"
                            alt="Instagram"
                            className="w-8 h-8"
                        />
                    </a>
                    <a href="#">
                        <img
                            src="icon-twitter.png"
                            alt="Twitter"
                            className="w-8 h-8"
                        />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default App;
