/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { getUserProfile } from '@/services/userServices';

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
                console.error('Kullanıcı profili alınamadı:', err);
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
        <div className="max-w-3xl mx-auto px-4 py-8">
            {JSON.stringify(user, null, 2)}
        </div>
    );
}
