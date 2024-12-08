import React from "react";
import Gallery from "../../components/Gallery/Gallery";

export default function Contact() {
    return (
        <main className="py-10 bg-[#f7f5ee]">
            <section className="max-w-4xl mx-auto text-center">
                <div className="bg-[#d9e5d3] p-6 rounded-lg m-10">
                    <h2 className="text-2xl font-semibold mb-4 text-italian-green italic text-left">
                        O NAS
                    </h2>
                    <p className="text-gray-700 text-justify">HASTALAVISTA</p>
                </div>
            </section>
            <Gallery />
        </main>
    );
}
