import React from "react";
import LandingPage from "./components/Pages/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div>
            {/* Header Section */}
            <Header />

            {/* About Section */}
            <LandingPage />

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default App;
