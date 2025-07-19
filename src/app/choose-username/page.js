'use client';

import { useEffect, useState } from 'react';
import { PRIMARY_COLOR } from '../../../lib/constants';
import { useDispatch, useSelector } from 'react-redux';
import { preChooseUsername } from '@/services/userServices';
import {
    setRegistrationEmail,
    setRegistrationPhone,
} from '../../../lib/slices/userSlice';
import { hideLoading, showLoading } from '../../../lib/slices/loadingSlice';

export default function UsernameForm() {
    const dispatch = useDispatch();
    const {
        token,
        registrationUsername,
        registrationPhone,
        registrationEmail,
    } = useSelector((state) => state.user);

    const [username, setUsername] = useState(registrationUsername);
    const [taken, setTaken] = useState('');

    useEffect(() => {
        setUsername(registrationUsername);
    }, [registrationUsername]);

    async function handleSubmit() {
        let data;
        if (registrationPhone) {
            data = {
                username,
                phone: registrationPhone,
            };
        } else if (registrationEmail) {
            data = {
                username,
                email: registrationEmail,
            };
        } else {
            return;
        }

        dispatch(showLoading());
        try {
            await preChooseUsername(data, token);
            dispatch(setRegistrationEmail(''));
            dispatch(setRegistrationPhone(''));
            localStorage.removeItem('registrationEmail');
            localStorage.removeItem('registrationPhone');
            localStorage.removeItem('registrationUsername');
            window.location.href = '/';
        } catch (error) {
            setTaken(error);
        } finally {
            dispatch(hideLoading());
        }
    }

    return (
        <form action={handleSubmit} className="pt-16">
            <h1 className="text-3xl font-bold text-center mb-2">
                Kullanıcı adını belirle
            </h1>
            <p className="text-center mb-6 text-gray-500">
                Seni en iyi yansıtan bir kullanıcı adı seç.
            </p>

            <div className="max-w-xs mx-auto">
                <input
                    name="username"
                    className="block p-2 mx-auto border w-full mb-2 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                    value={username || ''}
                    type="text"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    placeholder="kullanıcı adı"
                />

                {taken && (
                    <div className="bg-red-100 border border-red-400 text-red-700 p-2 mb-2 text-center rounded-md">
                        {taken}
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full text-white py-3 rounded-md hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                >
                    Kaydı Tamamla
                </button>
            </div>
        </form>
    );
}
