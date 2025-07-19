'use client';

import {
    UserIcon,
    LinkIcon,
    Cog6ToothIcon,
    ShareIcon,
} from '@heroicons/react/24/outline';
import { PRIMARY_COLOR } from '../../../lib/constants';

const menuItems = [
    { name: 'Profil', icon: UserIcon },
    { name: 'Sosyal Medya', icon: ShareIcon },
    { name: 'Bağlantılar', icon: LinkIcon },
    { name: 'Ayarlar', icon: Cog6ToothIcon },
];

export default function Sidebar({ selected, onSelect }) {
    return (
        <div className="w-full md:w-64 border-r border-gray-300 px-4 py-6 space-y-2">
            {menuItems.map(({ name, icon: Icon }) => (
                <button
                    key={name}
                    onClick={() => onSelect(name)}
                    className="flex items-center w-full px-4 py-2 rounded-lg transition text-left space-x-3"
                    style={{
                        backgroundColor: name === selected ? PRIMARY_COLOR : '',
                        color: name === selected ? '#fff' : '#000',
                    }}
                >
                    <Icon className="h-5 w-5" />
                    <span>{name}</span>
                </button>
            ))}
        </div>
    );
}
