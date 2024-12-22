/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-pattern": "url('/public/assets/bg.jpg')",
                "footer-texture": "url('/public/assets/bg.jpg')",
            },
            fontSize: {
                "page-title-lg": "9em",
                "page-title-md": "8em",
                "page-title-sm": "200px",
            },
            fontFamily: {
                sans: ["Montserrat", "sans-serif"], // Zmieniono domyślną czcionkę na Montserrat
            },
            colors: {
                "italian-green": "#335E26",
                "italian-red": "#942727",
                "italian-light-green": "#C5CCBA",
                "italian-red-dark": "#721C1C",
            },
        },
    },
    plugins: [],
};

/*

Nagłówki: 
italic, 4xl, semibold, tx-talic-green

Content:
non-italic, 1em, normal, black

*/
