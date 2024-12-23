export default function OrderSummaryContainer() {
    return (
        <div className="my-8 mt-0 bg-italian-light-green overflow-hidden shadow-lg shadow-italian-green  h-fit  ">
            <div className="w-full bg-italian-green py-6 text-left pl-12 rounded-lg ">
                <h1 className=" text-white text-xl font-bold italic">
                    Twoje zamówienie
                </h1>
            </div>
            <div className="" id="order-summary-container"></div>
            <div className="px-9 py-6">
                <div id="order"></div>
                <p className="font-semibold italic mt-8 w-full grid grid-cols-2">
                    <span>Dostawa:</span>
                    <span className="text-right">5,99 zł</span>
                </p>
                <p className="font-semibold italic w-full grid grid-cols-2">
                    <span>RAZEM:</span>
                    <span className="text-right">0,00 zł</span>
                </p>
                <p className="text-sm italic">
                    min wartość zamówienia 50,00 zł
                </p>
            </div>
        </div>
    );
}
