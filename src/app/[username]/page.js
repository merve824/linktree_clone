/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getUserProfile } from '@/services/userServices';
import {
    FaInstagram,
    FaTiktok,
    FaYoutube,
    FaGithub,
    FaLinkedin,
    FaSpotify,
    FaSnapchatGhost,
    FaPinterest,
    FaTwitch,
    FaFacebookF,
    FaPatreon,
    FaRedditAlien,
    FaGlobe,
    FaKickstarterK,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoMdMailOpen } from 'react-icons/io';

const icons = {
    personal: FaGlobe,
    instagram: FaInstagram,
    tiktok: FaTiktok,
    youtube: FaYoutube,
    github: FaGithub,
    linkedin: FaLinkedin,
    spotify: FaSpotify,
    x: FaXTwitter,
    snapchat: FaSnapchatGhost,
    pinterest: FaPinterest,
    twitch: FaTwitch,
    kick: FaKickstarterK,
    facebook: FaFacebookF,
    patreon: FaPatreon,
    reddit: FaRedditAlien,
};

export default function UserProfilePage() {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const res = await getUserProfile(username);
                setUser(res);
            } catch (err) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        if (username) {
            fetchUserProfile();
        }
    }, [username]);

    if (loading) return <p>Yükleniyor...</p>;
    if (!user) return <p>Kullanıcı bulunamadı.</p>;

    return (
        <div
            className="min-h-screen w-full px-64 pt-8 pb-8"
            style={{
                backgroundColor: user.backgroundColor,
                fontFamily: user.font,
            }}
        >
            <div className="h-56 w-full rounded-xl overflow-hidden bg-gray-200 mb-[-60px]">
                {user.headerUrl && (
                    <img
                        src={user.headerUrl}
                        alt="Header"
                        className="w-full h-full object-cover"
                    />
                )}
            </div>

            <div className="flex flex-col items-center mt-[-40px]">
                <img
                    src={
                        user.avatarUrl ||
                        'https://img.freepik.com/premium-vektor/account-icon-user-icon-vector-graphics_292645-552.jpg'
                    }
                    alt="Avatar"
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <h1 className="text-xl font-bold mt-2">{user.fullname}</h1>
                <p className="text-gray-500">@{user.username}</p>

                {user.bio && (
                    <p className="text-center text-gray-700 mt-3 max-w-xl">
                        {user.bio}
                    </p>
                )}
                {user.location && (
                    <p className="text-sm text-gray-500 mt-1">
                        {user.location}
                    </p>
                )}

                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    <a
                        key={'mail'}
                        href={`mailto:${user.email}`}
                        className="text-gray-600 hover:text-black transition"
                        title="E-posta Gönder"
                    >
                        <IoMdMailOpen size={24} />
                    </a>
                    {Object.entries(user.socialLinks).map(([platform, url]) => {
                        if (!url) return null;
                        const Icon = icons[platform];
                        return (
                            <a
                                key={platform}
                                href={
                                    url.startsWith('http')
                                        ? url
                                        : `https://${url}`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-black transition"
                                title={platform}
                            >
                                <Icon size={24} />
                            </a>
                        );
                    })}
                </div>
            </div>

            {user.customLinks?.length > 0 && (
                <div className="mt-10 space-y-4">
                    {user.customLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 bg-white border rounded-lg p-4 shadow hover:shadow-md transition"
                        >
                            {link.imageUrl && (
                                <img
                                    src={link.imageUrl}
                                    alt={link.title}
                                    className="w-16 h-16 object-cover rounded-md"
                                />
                            )}
                            <div>
                                <h2 className="text-lg font-semibold">
                                    {link.title}
                                </h2>
                                <p className="text-sm text-gray-600">
                                    {link.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
