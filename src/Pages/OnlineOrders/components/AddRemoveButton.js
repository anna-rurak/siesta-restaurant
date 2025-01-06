import { Button } from "@headlessui/react";

export default function AddRemoveButton({ onAdd, onRemove, quantity }) {
    return (
        <div className="absolute bottom-0 right-0">
            <div className="flex items-center">
                <p
                    onClick={onRemove}
                    className="w-8 h-8 text-white bg-italian-green flex items-center justify-center"
                >
                    -
                </p>
                <Button className="w-8 h-8 bg-white">{quantity}</Button>
                <p
                    onClick={onAdd}
                    className="w-8 h-8 text-white bg-italian-green flex items-center justify-center"
                >
                    +
                </p>
            </div>
        </div>
    );
}
