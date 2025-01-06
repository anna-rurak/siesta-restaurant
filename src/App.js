import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../src/Pages/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutUs from "./Pages/AboutUs/AboutUs";
import OnlineOrders from "./Pages/OnlineOrders/OnlineOrders";
import TableReservation from "./Pages/TableReservation/TableReservation";
import Contact from "./Pages/Contact/Contact";
import Menu from "./Pages/Menu/Menu";

const App = () => {
    return (
        <Router>
            <div>
                {/* Header Section */}
                <Header />

                {/* About Section */}
                <section className="my-20">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/aboutus" element={<AboutUs />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route
                            path="/reservations"
                            element={<TableReservation />}
                        />
                        <Route path="/contact" element={<Contact />} />

                        <Route path="/orders" element={<OnlineOrders />} />
                    </Routes>
                </section>

                {/* <LandingPage /> */}

                {/* Footer Section */}
                <Footer />
            </div>
        </Router>
    );
};

export default App;
