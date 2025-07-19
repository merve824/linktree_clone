'use client';

import HeroForm from '@/components/hero-form/HeroForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    setRegistrationEmail,
    setRegistrationUsername,
    setToken,
} from '../../lib/slices/userSlice';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        const registrationEmail = localStorage.getItem('registrationEmail');
        const registrationUsername = localStorage.getItem(
            'registrationUsername'
        );
        const token = localStorage.getItem('token');

        dispatch(setRegistrationEmail(registrationEmail));
        dispatch(setRegistrationUsername(registrationUsername));
        dispatch(setToken(token));
    }, []);

    return (
        <main>
            <section className="max-w-4xl mx-auto p-6 pt-24">
                <div className="max-w-md mb-8">
                    <h1 className="text-6xl font-bold">
                        Her şey için
                        <br />
                        tek bağlantınız
                    </h1>
                    <h2 className="text-gray-500 text-xl mt-6">
                        Bağlantılarınız, sosyal profilleriniz, iletişim
                        bilgileriniz ve daha fazlasını tek sayfada gösterin.
                    </h2>
                </div>
                <HeroForm />
            </section>
        </main>
    );
}
