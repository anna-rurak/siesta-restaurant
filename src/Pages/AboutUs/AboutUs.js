import React from "react";
import owner from "../../../assets/images/aboutus-picture.webp";

export default function AboutUs() {
  return (
    <div>
      <section className="max-w-3xl mx-auto text-center">
        <div className="bg-[#d9e5d3] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-italian-green italic text-left">
            O NAS
          </h2>
          <p className="text-gray-700 text-justify">
            Nasza restauracja to miejsce, które łączy autentyczną włoską
            tradycję z nowoczesnym komfortem. Wnętrze zostało zaprojektowane w
            stylu toskańskiej trattorii – ciepłe, drewniane akcenty, rustykalne
            stoły i krzesła oraz przytulne, klimatyczne oświetlenie sprawiają,
            że każdy gość czuje się tutaj jak w sercu Włoch. Na ścianach wiszą
            obrazy przedstawiające włoskie pejzaże, a detale inspirowane
            włoskimi regionami, takimi jak tkaniny czy ceramika, dodają
            przestrzeni wyjątkowego charakteru. W centralnym punkcie znajduje
            się otwarta kuchnia, gdzie goście mogą podziwiać, jak nasi kucharze
            przygotowują potrawy z pasją i precyzją. Dopełnieniem całości jest
            muzyka włoska, która tworzy wyjątkowy klimat – od klasycznego jazzu
            po współczesne brzmienia, które przenoszą nas na wąskie uliczki
            Rzymu czy Florencji. Zadbaliśmy o każdy detal, by stworzyć
            przestrzeń, w której panuje niepowtarzalna atmosfera ciepła i
            gościnności. Chcemy, aby każdy, kto do nas przychodzi, poczuł się
            jak w domowej, włoskiej atmosferze, gdzie jedzenie, wino i rozmowy
            stają się najważniejszymi elementami wieczoru. Przyjdź, usiądź,
            zrelaksuj się i pozwól, by włoska magia wypełniła przestrzeń wokół
            Ciebie.
          </p>
          <h2 className="text-xl font-semibold mb-4 text-italian-green italic text-left mt-4">
            Jak zaczynaliśmy?
          </h2>
          <p className="text-gray-700 text-justify">
            Właścicielem restauracji jest miłośnik włoskiej kuchni Andrzej
            Kowalski. Andrzej urodził się w małej miejscowości niepodal
            Zamościa. Od najmłodszych lat pomagał w kuchni swojej mamie,
            przygotowując niesamowite dania w stylu włoskim. Największym
            marzeniem Andrzeja było wyjechać do Włoch na prawdziwy kurs
            kulinarny i to mu się udało. We Włoszech, a dokładniej w Neapolu
            spędził ponad 3 lata, pracując jako kucharz w jednej z lepszych
            lokalnych restauracji. Po powrocie do kraju zrodził się pomysł
            założenia własnej restauracji opartej na prawdziwej miłości do
            Włoch. W ten sposób powstała restauracja{" "}
            <span className="font-semibold">Siesta</span>, której zadaniem jest
            rozpieścić kubki smakowe każdego gościa, który do nas zawita!
          </p>

          <img className="mt-4" src={owner} alt="chef" />
        </div>
      </section>
    </div>
  );
}
