import { useState } from 'react';
import { PRIMARY_COLOR } from '../../../lib/constants';

export default function ProfileBackgroundPicker({
    initialColor = '#ffffff',
    onColorChange,
}) {
    const [color, setColor] = useState(initialColor);

    const handleChange = (e) => {
        const newColor = e.target.value;
        setColor(newColor);
    };

    return (
        <div className="w-full bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 mt-8">
            <label className="text-xl font-semibold">
                Profil Arka Plan Rengi
            </label>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <input type="color" value={color} onChange={handleChange} />
                    <span className="text-gray-700">{color}</span>
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={() => onColorChange(color)}
                        className="text-white px-4 py-2 rounded-md hover:bg-red-700 transition w-48"
                        style={{ backgroundColor: PRIMARY_COLOR }}
                    >
                        Rengi Kaydet
                    </button>
                </div>
            </div>
        </div>
    );
}
