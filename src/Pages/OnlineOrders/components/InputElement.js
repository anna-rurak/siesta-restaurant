export default function InputElement({ label, type, placeholder }) {
    return (
        <div className="flex flex-col gap-2 my-3">
            <label htmlFor={label} className="text-italian-green font-semibold">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="border border-gray-300 rounded-lg p-2"
            />
        </div>
    );
}
