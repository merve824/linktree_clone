'use client';

import { useState } from 'react';
import { PRIMARY_COLOR } from '../../../lib/constants';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Gönderilen veri:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    }

    return (
        <main className="max-w-4xl mx-auto p-6">
            <h1
                className="text-4xl font-bold mb-6 text"
                style={{ color: PRIMARY_COLOR }}
            >
                İletişim
            </h1>

            {submitted ? (
                <div className="p-4 bg-green-100 text-green-800 rounded mb-6">
                    Mesajınız başarıyla gönderildi. Teşekkür ederiz!
                </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block mb-2 font-semibold">
                        İsim
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E5F44]"
                        placeholder="Adınızı girin"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-2 font-semibold">
                        E-posta
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E5F44]"
                        placeholder="E-posta adresinizi girin"
                    />
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="block mb-2 font-semibold"
                    >
                        Mesajınız
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        rows="5"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E5F44]"
                        placeholder="Mesajınızı yazın"
                    />
                </div>

                <button
                    type="submit"
                    className="text-white py-3 px-6 rounded transition-colors"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                >
                    Gönder
                </button>
            </form>
        </main>
    );
}
