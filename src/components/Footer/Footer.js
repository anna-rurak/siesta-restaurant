import React from 'react'

export default function Footer(){
    return (
    <footer className="bg-white/70 bg-footer-texture py-6">
    <div className="flex justify-center gap-4">
        <a href="#">
            <i class="fa-brands fa-facebook w-10 h-10 text-white " alt="Facebook"></i>
        </a>
        <a href="#">
            <i class="fa-brands fa-twitter w-10 h-10 text-white" alt="Twitter"></i>
        </a>
        <a href="#">
            <i class="fa-brands fa-instagram w-10 h-10 text-white" alt="Instagram"></i>
        </a>
    </div>
</footer>
);
}