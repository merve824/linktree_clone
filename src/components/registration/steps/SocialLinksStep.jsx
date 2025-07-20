'use client';

import { PRIMARY_COLOR } from '../../../../lib/constants';

export default function SocialLinksStep({
    nextStep,
    prevStep,
    socials,
    setSocials,
}) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSocials((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleNext = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <form onSubmit={handleNext}>
            <h1 className="text-3xl font-bold text-center mb-2">
                Sosyal meyda hesaplarını ekle
            </h1>
            <p className="text-center mb-6 text-gray-500">
                Popüler sosyal medya hesaplarınızı ekleyerek profilinizi
                zenginleştirin ve takipçilerinizle daha kolay bağlantı kurun.
            </p>

            <div className="flex flex-col gap-4">
                <Input
                    label="Instagram"
                    name="instagram"
                    placeholder="https://instagram.com/kullaniciadi"
                    value={socials.instagram}
                    onChange={handleChange}
                />
                <Input
                    label="X"
                    name="twitter"
                    placeholder="https://x.com/kullaniciadi"
                    value={socials.x}
                    onChange={handleChange}
                />
                <Input
                    label="TikTok"
                    name="tiktok"
                    placeholder="https://tiktok.com/@kullaniciadi"
                    value={socials.tiktok}
                    onChange={handleChange}
                />
                <Input
                    label="GitHub"
                    name="github"
                    placeholder="https://github.com/kullaniciadi"
                    value={socials.github}
                    onChange={handleChange}
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
                type="url"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full border border-gray-300 rounded px-3 py-2"
            />
        </div>
    );
}
