export default function TypeHeader({ type }) {
    return (
        <div className=" mt-0 mx-0 bg-italian-light-green overflow-hidden rounded-lg h-fit">
            <div className="w-full bg-italian-green py-6 text-left ">
                <h1 className="text-white text-xl font-bold italic px-12">
                    {type}
                </h1>
            </div>
        </div>
    );
}
