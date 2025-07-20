import { useState } from 'react';
import { PRIMARY_COLOR } from '../../../lib/constants';

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

export default function FontSelector({ initialFont = '', onFontChange }) {
    const [selectedFont, setSelectedFont] = useState(initialFont);

    const handleFontChange = (value) => {
        setSelectedFont(value);
    };

    return (
        <div className="w-full bg-white p-6 rounded-lg shadow-md space-y-4">
            <label className="text-xl font-semibold mb-2 block">
                Yazı Tipi Seçimi
            </label>

            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
                <select
                    className="w-full md:w-1/2 border border-gray-300 p-2 rounded-md"
                    value={selectedFont}
                    onChange={(e) => handleFontChange(e.target.value)}
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
                    className="w-full md:w-1/2 text-gray-700 p-2 border border-dashed border-gray-300 rounded-md bg-gray-50"
                    style={{ fontFamily: selectedFont }}
                >
                    Bu bir önizlemedir. Seçtiğiniz yazı tipi burada görünecek.
                </p>
            </div>
            <div className="flex justify-end">
                <button
                    onClick={() => onFontChange(selectedFont)}
                    className="text-white px-4 py-2 rounded-md transition w-48"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                >
                    Yazı Tipini Kaydet
                </button>
            </div>
        </div>
    );
}
