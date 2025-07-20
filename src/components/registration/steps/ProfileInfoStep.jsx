'use client';

import { useState } from 'react';

export default function ProfileInfoStep({ nextStep, prevStep }) {
    const [fullName, setFullName] = useState('');
    const [bio, setBio] = useState('');

    const handleNext = (e) => {
        e.preventDefault();
        if (!fullName.trim()) return;
        nextStep();
    };

    return (
        <form onSubmit={handleNext}>
            <h2 className="text-2xl font-semibold text-center mb-6">
                Profil bilgilerini gir
            </h2>

            <div className="flex flex-col gap-4">
                <div>
                    <label className="block mb-1 font-medium">Ad Soyad</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">
                        Biyografi (isteğe bağlı)
                    </label>
                    <textarea
                        rows="3"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Kendini kısaca tanıt..."
                    />
                </div>
            </div>

            <div className="flex justify-between mt-6">
                <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                >
                    Geri
                </button>

                <button
                    type="submit"
                    className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    disabled={!fullName.trim()}
                >
                    Devam Et
                </button>
            </div>
        </form>
    );
}
