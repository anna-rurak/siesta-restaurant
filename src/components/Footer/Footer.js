import React from 'react'

export default function Footer(){
    return (
    <footer className="bg-white/70 bg-footer-texture py-6">
    <div className="flex justify-center gap-4">
        <a href="#">
            <img
                src="icon-facebook.png"
                alt="Facebook"
                className="w-8 h-8"
            />
        </a>
        <a href="#">
            <img
                src="icon-instagram.png"
                alt="Instagram"
                className="w-8 h-8"
            />
        </a>
        <a href="#">
            <img
                src="icon-twitter.png"
                alt="Twitter"
                className="w-8 h-8"
            />
        </a>
    </div>
</footer>
);
}