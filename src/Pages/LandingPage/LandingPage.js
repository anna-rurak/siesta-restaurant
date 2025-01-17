import React from "react";
import Gallery from "../../components/Gallery/Gallery";

export default function LandingPage() {
    return (
        <main className="bg-white">
            <section className="max-w-3xl mx-auto text-center ">
                <div className="bg-[#d9e5d3] p-6 rounded-lg mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-italian-green italic text-left">
                        CIAO! PRZYJDŹ DO NAS I ...
                    </h2>
                    <p className="text-gray-700 text-justify">
                        Ciesz się chwilą, która smakuje jak najpiękniejsze
                        wspomnienie. W naszej restauracji czas zwalnia, a każdy
                        moment nabiera wyjątkowego znaczenia. Zapraszamy Cię do
                        świata, gdzie aromaty przenikają się z harmonią, a każdy
                        kęs staje się małym świętem.
                        <br />
                        <br />
                        Pozwól, by nasze dania opowiedziały historię pasji i
                        zaangażowania, a ciepła atmosfera otuliła Cię jak miękki
                        koc w chłodny dzień. Zasmakuj w prostocie, która
                        zachwyca, i luksusie, który nie przytłacza. Usiądź
                        wygodnie, pozwól myślom odpocząć i poczuj, jak zwykły
                        dzień zmienia się w coś wyjątkowego.
                        <br />
                        <br />
                        Zaproś przyjaciół, rodzinę lub zatrzymaj się na chwilę
                        sam – to miejsce stworzyliśmy z myślą o Tobie. Smakuj,
                        śmiej się, rozmawiaj – a my zadbamy, byś zawsze wracał z
                        uśmiechem i pragnieniem kolejnych chwil pełnych smaku.
                        Kolejnych chwil, które brzmią jak{" "}
                        <strong className="text-italian-green italic">
                            SIESTA!
                        </strong>
                    </p>
                </div>
            </section>
            <Gallery />
        </main>
    );
}
