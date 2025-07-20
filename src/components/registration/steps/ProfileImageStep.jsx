'use client';

import { useState } from 'react';
import { PRIMARY_COLOR } from '../../../../lib/constants';

export default function ProfileImageStep({
    nextStep,
    prevStep,
    file = null,
    about,
    setAbout,
}) {
    const [previewUrl, setPreviewUrl] = useState(file);
    const [prewAbout, setPrewAbout] = useState(about);
    const [error, setError] = useState('');

    const handleNext = (e) => {
        setError('');
        e.preventDefault();

        if (prewAbout.fullname.length === 0) {
            setError('Tam ad kısmı boş bırakılamaz.');
            return;
        }

        setAbout(prewAbout);
        nextStep(previewUrl);
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const allowedTypes = ['image/jpeg', 'image/jpg'];
        if (!allowedTypes.includes(file.type)) {
            alert('Lütfen sadece JPG/JPEG dosyası seçin.');
            return;
        }

        if (file) {
            setPreviewUrl(file);
        }
    };

    return (
        <form onSubmit={handleNext}>
            <h1 className="text-3xl font-bold text-center mb-2">
                Fotoğrafını seç
            </h1>
            <p className="text-center mb-6 text-gray-500">
                Kullanıcıların seni tanımalarını sağla.
            </p>

            <div className="flex justify-center">
                <div className=" relative w-48 h-48 rounded-full bg-gray-300 overflow-hidden border-[4px] border-white shadow-md group">
                    <img
                        src={
                            previewUrl
                                ? typeof previewUrl === 'object'
                                    ? URL.createObjectURL(previewUrl)
                                    : previewUrl
                                : 'https://img.freepik.com/premium-vektor/account-icon-user-icon-vector-graphics_292645-552.jpg'
                        }
                        alt="Avatar"
                        className="object-cover w-full h-full"
                    />
                    <label className="absolute inset-0 bg-black/40 text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                        Fotoğraf Seç
                        <input
                            type="file"
                            accept=".jpg,.jpeg"
                            className="hidden"
                            onChange={handleAvatarChange}
                        />
                    </label>
                </div>
            </div>

            {error && (
                <div className="mb-4 p-4 mt-4 bg-red-100 text-red-800 rounded">
                    {error}
                </div>
            )}

            <div className="flex flex-col gap-4">
                <Input
                    label="Tam Ad"
                    value={prewAbout.fullname}
                    onChange={(e) =>
                        setPrewAbout({ ...prewAbout, fullname: e.target.value })
                    }
                />
                <Input
                    label="Hakkında"
                    value={prewAbout.bio}
                    onChange={(e) =>
                        setPrewAbout({ ...prewAbout, bio: e.target.value })
                    }
                />
            </div>
            <div className="flex justify-between mt-6">
                <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 border w-32 border-gray-300 rounded hover:bg-gray-100"
                >
                    Geri
                </button>

                <button
                    type="submit"
                    className="px-6 py-2 w-32 text-white rounded"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                >
                    Devam Et
                </button>
            </div>
        </form>
    );
}

function Input({ label, name, value, onChange, placeholder }) {
    return (
        <div>
            <label className="block mb-1 font-medium">{label}</label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full border border-gray-300 rounded px-3 py-2"
            />
        </div>
    );
}
