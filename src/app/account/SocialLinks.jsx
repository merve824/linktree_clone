import React, { useState } from 'react';
import { PRIMARY_COLOR } from '../../../lib/constants';

const SOCIAL_FIELDS = [
    { key: 'personal', label: 'Kişisel Websitesi' },
    { key: 'instagram', label: 'Instagram' },
    { key: 'tiktok', label: 'TikTok' },
    { key: 'youtube', label: 'YouTube' },
    { key: 'github', label: 'GitHub' },
    { key: 'linkedin', label: 'LinkedIn' },
    { key: 'spotify', label: 'Spotify' },
    { key: 'x', label: 'X (Twitter)' },
    { key: 'snapchat', label: 'Snapchat' },
    { key: 'pinterest', label: 'Pinterest' },
    { key: 'twitch', label: 'Twitch' },
    { key: 'kick', label: 'Kick' },
    { key: 'facebook', label: 'Facebook' },
    { key: 'patreon', label: 'Patreon' },
    { key: 'reddit', label: 'Reddit' },
];

export default function SocialLinksForm({ initialLinks = {}, onSave }) {
    const [links, setLinks] = useState(initialLinks);

    const handleChange = (key, value) => {
        const updated = { ...links, [key]: value };
        setLinks(updated);
    };

    return (
        <div className="grid gap-4 max-w-2xl mx-auto p-4">
            {SOCIAL_FIELDS.map(({ key, label }) => (
                <div>
                    <label htmlFor={key} className="block mb-1 font-medium">
                        {label}
                    </label>
                    <div
                        key={key}
                        className="flex items-center border shadow-md border-gray-300 rounded overflow-hidden focus-within:ring-2 focus-within:ring-[#3E5F44]"
                    >
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={links[key] || ''}
                            onChange={(e) => handleChange(key, e.target.value)}
                            className="flex-1 px-3 py-2 outline-none"
                            placeholder="Hesap bağlantısı"
                        />
                    </div>
                </div>
            ))}
            <button
                type="submit"
                className="mt-6 text-white py-2 px-4 rounded hover:bg-[#2f4e35] transition-colors w-full sm:w-40"
                style={{ backgroundColor: PRIMARY_COLOR }}
                onClick={() => onSave(links)}
            >
                Kaydet
            </button>
        </div>
    );
}
