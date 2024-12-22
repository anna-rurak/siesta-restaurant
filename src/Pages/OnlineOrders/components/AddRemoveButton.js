import { Button } from "@headlessui/react";
import { useState } from "react";

export default function AddRemoveButton() {
    const [count, setCount] = useState(0);

    function setCountPlus() {
        setCount(count + 1);
    }

    function setCountMinus() {
        setCount(count - 1);
    }

    return (
        <div className="absolute bottom-0 right-0">
            <div className="flex items-center">
                <p
                    onClick={setCountPlus}
                    className="w-8 h-8 text-white bg-italian-green flex items-center justify-center"
                >
                    +
                </p>
                <Button className="w-8 h-8 bg-white">{count}</Button>
                <p
                    onClick={setCountMinus}
                    className="w-8 h-8 text-white bg-italian-green flex items-center justify-center"
                >
                    -
                </p>
            </div>
        </div>
    );
}
