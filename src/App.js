import React from "react";
import Navbar from "./components/Navbar/Navbar";

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
            <main className="py-10 bg-[#f7f5ee]">
                <section className="max-w-3xl mx-auto text-center">
                    <div className="bg-[#d9e5d3] p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-italian-green italic text-left">
                            O NAS
                        </h2>
                        <p className="text-gray-700 text-justify">
                            Niech czas płynie wolniej, a każdy kęs będzie
                            przyjemnością, która zagości w Twoich myślach na
                            dłużej. Przyjdź do naszej przestrzeni, gdzie możesz
                            odetchnąć, poczuć się swobodnie i na chwilę
                            zapomnieć o codzienności. Zabierz ze sobą bliskich,
                            a my zadbamy o to by każda spędzoona chwila była
                            pełna smaku i relaksu.
                        </p>
                    </div>
                </section>
            </main>

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
