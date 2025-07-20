'use client';

import { PRIMARY_COLOR } from '../../../../lib/constants';

const fonts = [
    { label: 'Poppins' },
    { label: 'Roboto' },
    { label: 'Lato' },
    { label: 'Merriweather' },
    { label: 'Inter' },
    { label: 'Playfair Display' },
    { label: 'DM Sans' },
    { label: 'Open Sans' },
    { label: 'Raleway' },
    { label: 'Ubuntu' },
    { label: 'Manrope' },
    { label: 'Quicksand' },
    { label: 'Rubik' },
    { label: 'Work Sans' },
    { label: 'Nunito' },
    { label: 'PT Sans' },
    { label: 'Fira Sans' },
    { label: 'Cabin' },
    { label: 'Bebas Neue' },
    { label: 'Space Grotesk' },
];

export default function ThemeStep({
    nextStep,
    prevStep,
    fontAndTheme,
    setFontAndTheme,
}) {
    const handleNext = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <form onSubmit={handleNext}>
            <h1 className="text-3xl font-bold text-center mb-2">
                Renk ve yazı tipi seç
            </h1>
            <p className="text-center mb-6 text-gray-500">
                Senin en iyi ifade eden rengi ve yazı tipini belirle.
            </p>

            <label className="block mb-2 font-medium">Arka Plan Rengi</label>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-8">
                    <input
                        type="color"
                        value={fontAndTheme.theme}
                        onChange={(e) =>
                            setFontAndTheme({
                                ...fontAndTheme,
                                theme: e.target.value,
                            })
                        }
                    />
                    <span className="text-gray-700">{fontAndTheme.theme}</span>
                </div>
            </div>

            <label className="block mb-2 font-medium">Yazı Tipi</label>
            <div className="flex flex-col space-y-4">
                <select
                    className="w-full border border-gray-300 p-2 rounded-md"
                    value={fontAndTheme.font}
                    onChange={(e) =>
                        setFontAndTheme({
                            ...fontAndTheme,
                            font: e.target.value,
                        })
                    }
                >
                    <option value="" disabled>
                        Yazı tipi seçin
                    </option>
                    {fonts.map(({ label }, index) => (
                        <option key={index} value={label}>
                            {label}
                        </option>
                    ))}
                </select>

                <p
                    className="w-full text-gray-700 p-2 "
                    style={{ fontFamily: fontAndTheme.font }}
                >
                    Bu bir önizlemedir. Seçtiğiniz yazı tipi burada görünecek.
                </p>
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
