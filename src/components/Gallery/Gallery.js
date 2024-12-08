import { menu } from "../../assets/menu.js";
import React, { useState, useEffect } from "react";

export default function Gallery() {
    const images = menu.map((el) => el.img);

    const [currentIndex, setCurrentIndex] = useState(0);

    const slidesToShow = {
        sm: 1,
        md: 2,
        lg: 3,
    };

    const getSlidesCount = () => {
        if (window.innerWidth >= 1024) return slidesToShow.lg; // large screens (lg)
        if (window.innerWidth >= 768) return slidesToShow.md; // medium screens (md)
        return slidesToShow.sm; // small screens (sm)
    };

    const [slidesCount, setSlidesCount] = useState(getSlidesCount);

    useEffect(() => {
        const handleResize = () => {
            setSlidesCount(getSlidesCount());
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const nextSlide = () => {
        if (currentIndex < images.length - slidesCount) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0); // Powrót do pierwszego zdjęcia, gdy dojdziemy do końca
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(images.length - slidesCount); // Przejście do ostatniego zestawu zdjęć
        }
    };

    return (
        <div className="mx-auto relative max-w-4xl overflow-hidden px-4">
            <div className="relative">
                {/* PREV-ARROW */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-italian-light-green rounded-lg text-white p-2 text-2xl z-10"
                >
                    ❮
                </button>
                {/* IMAGES */}
                <div
                    className="flex transition-transform duration-500"
                    style={{
                        transform: `translateX(-${
                            (currentIndex * 100) / slidesCount
                        }%)`,
                    }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 p-6 ${
                                slidesCount === 3
                                    ? "w-1/3"
                                    : slidesCount === 2
                                    ? "w-1/2"
                                    : "w-full"
                            }`}
                        >
                            <img
                                src={image}
                                alt={`Slide ${index}`}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    ))}
                </div>
                {/* NEXT-ARROW */}
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-italian-light-green rounded-lg text-white p-2 text-2xl z-10"
                >
                    ❯
                </button>
            </div>
        </div>
    );
}
