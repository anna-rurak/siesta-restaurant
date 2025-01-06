import React from "react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        let formIsValid = true;

        if (!formData.name) {
            newErrors.name = "Imię jest wymagane!";
            formIsValid = false;
        }

        if (!formData.message) {
            newErrors.message = "Treść wiadomości jest wymagana";
            formIsValid = false;
        }

        setErrors(newErrors);
        return formIsValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Formularz wysłany:", formData);

            setFormData({ name: "", message: "" });
        }
    };

    return (
        <main className="bg-white">
            <h3 className="text-2xl font-semibold text-italian-green text-center mb-8">
                Masz pytania? Chętnie pomożemy!
            </h3>
            <form className="text-center" onSubmit={handleSubmit}>
                <label className="text-italian-green">Twoje imię</label>
                <br />
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Wpisz swoje imię..."
                    onChange={handleChange}
                    className="mt-2 mb-4 w-1/5 py-1 px-2 rounded-full bg-italian-light-green focus:outline-none placeholder-italian-green"
                ></input>
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                )}
                <br />
                <label className="text-italian-green">Treść wiadomości</label>
                <br />
                <textarea
                    className="mt-2 w-1/4 h-36 p-2 focus:outline-none bg-italian-light-green"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                )}
                <br />
                <button
                    type="submit"
                    className="bg-italian-green px-8 py-1 text-white rounded-full mt-2"
                >
                    Wyślij
                </button>
            </form>
        </main>
    );
}
