'use client';

import { useRouter } from 'next/navigation';
import { PRIMARY_COLOR } from '../../../lib/constants';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRegistrationUsername } from '../../../lib/slices/userSlice';

export default function HeroForm() {
    const [username, setUsername] = useState('');

    const router = useRouter();
    const dispatch = useDispatch();

    async function handleSubmit(ev) {
        ev.preventDefault();

        setTimeout(() => {
            localStorage.setItem('registrationUsername', username);
            dispatch(setRegistrationUsername(username));
            router.push('/register');
        }, 1000);
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="inline-flex items-center shadow-lg bg-white shadow-gray-500/20"
        >
            <span className="bg-white py-4 pl-4">mylinkhub.to/</span>
            <input
                type="text"
                className="focus:outline-none focus:ring-0"
                style={{
                    backgroundColor: 'white',
                    marginBottom: 0,
                    paddingLeft: 0,
                }}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="kullanıcı adı"
            />
            <button
                type="submit"
                className=" text-white py-4 px-6 whitespace-nowrap rounded-r-xl"
                style={{ backgroundColor: PRIMARY_COLOR }}
                disabled={username.length < 3}
            >
                Ücretsiz Başla!
            </button>
        </form>
    );
}
