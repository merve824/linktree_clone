'use client';

import {
    UserIcon,
    LinkIcon,
    Cog6ToothIcon,
    ShareIcon,
} from '@heroicons/react/24/outline';
import { PRIMARY_COLOR } from '../../../lib/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const menuItems = [
    { name: 'Profil', icon: UserIcon },
    { name: 'Sosyal Medya', icon: ShareIcon },
    { name: 'Bağlantılar', icon: LinkIcon },
    { name: 'Ayarlar', icon: Cog6ToothIcon },
];

export default function Sidebar({ selected, onSelect, signOut }) {
    const handleSignOut = () => {
        const confirmed = confirm('Çıkış yapmak istediğinize emin misiniz?');
        if (!confirmed) return;
        signOut();
    };

    return (
        <div className="w-full md:w-64 border-r border-gray-300 px-4 py-6 space-y-2">
            <Link
                href={'/'}
                className="flex items-center gap-2 mb-8 px-4"
                style={{ color: PRIMARY_COLOR }}
            >
                <FontAwesomeIcon
                    icon={faLink}
                    style={{ color: PRIMARY_COLOR }}
                />
                <span className="font-bold">MyLinkHub</span>
            </Link>
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
            <button
                onClick={() => handleSignOut()}
                className="flex items-center w-full px-4 py-2 rounded-lg transition text-left space-x-3 bg-red-500 text-white mt-4"
            >
                <FontAwesomeIcon icon={faSignOut} className="h-5 w-5" />
                <span>Çıkış Yap</span>
            </button>
        </div>
    );
}
