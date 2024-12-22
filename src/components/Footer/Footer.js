import React from "react";

export default function Footer() {
    return (
        <footer className="bg-white/70 bg-footer-texture flex justify-center items-center py-6 h-full mt-12 ">
            <div className="flex justify-center items-center w-100 bg-white/80 rounded-md">
                <section className="grid gap-6 m-6 w-full sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                    <div className="flex flex-col  items-left justify-center w-60 mx-auto pl-5 h-full text-italian-green  ">
                        <h1 className=" text-2xl italic font-bold ">Siesta</h1>
                        <p className="">ul. Parmezanowa 43</p>
                        <p className="">54-432 Wrocław</p>
                    </div>
                    <div className="flex justify-center items-center gap-4 h-full ">
                        <a
                            href="https://www.facebook.com/"
                            className="flex justify-center items-center"
                        >
                            <i
                                class="flex justify-center items-center fa-brands fa-facebook w-10 h-10 text-xl text-italian-green "
                                alt="Facebook"
                            ></i>
                        </a>
                        <a href="https://x.com/">
                            <i
                                class="flex justify-center items-center fa-brands fa-twitter w-10 h-10 text-xl text-italian-green"
                                alt="X"
                            ></i>
                        </a>
                        <a href="https://instagram.com/">
                            <i
                                class="flex justify-center items-center fa-brands fa-instagram w-10 h-10 text-xl text-italian-green"
                                alt="Instagram"
                            ></i>
                        </a>
                    </div>
                    <div className="w-60 mx-auto">
                        <h2 className="text-italian-green font-bold italic ">
                            GODZINY OTWARCIA
                        </h2>
                        <ul className="text-italian-green">
                            <li className="grid grid-cols-2 ">
                                <span className="">Poniedziałek</span>
                                <span>odpoczywamy </span>
                            </li>
                            <li className="grid grid-cols-2 ">
                                <span className="">Wtorek</span>
                                <span>12:00 - 23:00</span>
                            </li>
                            <li className="grid grid-cols-2 ">
                                <span className="">Środa</span>
                                <span>12:00 - 23:00</span>
                            </li>
                            <li className="grid grid-cols-2 ">
                                <span className="">Czwatek</span>
                                <span>12:00 - 23:00</span>
                            </li>
                            <li className="grid grid-cols-2 ">
                                <span className="">Piątek</span>
                                <span>12:00 - 03:00</span>
                            </li>
                            <li className="grid grid-cols-2 ">
                                <span className="">Sobota</span>
                                <span>12:00 - 03:00</span>
                            </li>
                            <li className="grid grid-cols-2 ">
                                <div>Niedziela</div>
                                <div>12:00 - 23:00</div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </footer>
    );
}
