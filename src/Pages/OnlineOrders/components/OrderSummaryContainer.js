import menu from "../../../assets/menu";

export default function OrderSummaryContainer({ cartItems }) {
    // Calculate Price of multiple dishes
    const calculateSum = ({ name, quantity }) => {
        const dishItem = menu.find((item) => item.name === name);
        const price = dishItem ? dishItem.price : null;
        const result = price * quantity;

        return result;
    };

    // Calculate Price of Total Order with Delivery
    const calculateTotal = ({ cartItems }) => {
        let total = 0;
        for (const [name, quantity] of Object.entries(cartItems)) {
            total = total + calculateSum({ name, quantity });
        }
        return total + 5.99;
    };

    return (
        <div className="my-8 mt-0 bg-italian-light-green overflow-hidden shadow-lg shadow-italian-green h-fit">
            <div className="w-full bg-italian-green py-6 text-left pl-12 rounded-lg ">
                <h1 className=" text-white text-xl font-bold italic">
                    Twoje zamówienie
                </h1>
            </div>
            <div className="px-9 py-6">
                {/* ORDER SUMMARY */}
                <div id="order" className="w-full h-auto">
                    {Object.entries(cartItems).map(
                        ([name, quantity]) =>
                            quantity > 0 && (
                                <div
                                    key={name}
                                    className="font-semibold grid grid-cols-3 mb-2"
                                >
                                    <span className="col-span-2">{`${name} x ${quantity}`}</span>
                                    <span className="col-span-1 text-right italic">
                                        {calculateSum({ name, quantity })} zł
                                    </span>
                                </div>
                            )
                    )}
                </div>
                <p className="font-semibold italic mt-8 w-full grid grid-cols-3">
                    <span className="col-span-2">Dostawa:</span>
                    <span className="col-span-1 text-right">5.99 zł</span>
                </p>
                <p className="font-semibold italic w-full grid grid-cols-3">
                    <span className="col-span-2">RAZEM:</span>
                    <span className="col-span-1 text-right">
                        {calculateTotal({ cartItems })} zł
                    </span>
                </p>
                <p className="text-sm italic">
                    min wartość zamówienia 50,00 zł
                </p>
            </div>
        </div>
    );
}
