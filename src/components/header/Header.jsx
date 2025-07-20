'use client';

import LogoutButton from '../buttons/LogoutButton';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PRIMARY_COLOR } from '../../../lib/constants';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '@/services/userServices';
import { usePathname } from 'next/navigation';
import { hideLoading, showLoading } from '../../../lib/slices/loadingSlice';
import { clear } from '../../../lib/slices/userSlice';

const showHeaderPaths = [
    '/',
    '/about',
    '/pricing',
    '/contact',
    '/login',
    '/register',
    '/verify',
    '/choose-username',
];

export default function Header() {
    const pathname = usePathname();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const { token } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleUsername = async () => {
            try {
                const { username } = await getUsername(token);
                setUsername(username);
            } catch (error) {
                // errr
            }
        };

        if (token) {
            setIsLoggedIn(true);
            handleUsername();
        }
    }, [token]);

    const signOut = () => {
        const confirmed = confirm('Çıkış yapmak istediğinize emin misiniz?');

        if (!confirmed) {
            return;
        }

        dispatch(showLoading());
        dispatch(clear());
        localStorage.removeItem('token');
        localStorage.removeItem('registrationEmail');
        localStorage.removeItem('registrationPhone');
        localStorage.removeItem('registrationUsername');

        setTimeout(() => {
            dispatch(hideLoading());
            window.location.href = '/';
        }, 2000);
    };

    const hideHeader = showHeaderPaths.includes(pathname);

    if (!hideHeader) return null;

    return (
        <header className="bg-white border-b border-gray-300  py-4">
            <div className="max-w-4xl flex justify-between mx-auto px-6">
                <div className="flex items-center gap-6">
                    <Link
                        href={'/'}
                        className="flex items-center gap-2"
                        style={{ color: PRIMARY_COLOR }}
                    >
                        <FontAwesomeIcon
                            icon={faLink}
                            style={{ color: PRIMARY_COLOR }}
                        />
                        <span className="font-bold">MyLinkHub</span>
                    </Link>
                    <nav className="flex items-center gap-4 text-slate-500 text-sm">
                        <Link href={'/about'} className="font-semibold">
                            Hakkımızda
                        </Link>
                        <Link href={'/pricing'} className="font-semibold">
                            Fiyatlandırma
                        </Link>
                        <Link href={'/contact'} className="font-semibold">
                            İletişim
                        </Link>
                    </nav>
                </div>
                <nav className="flex items-center gap-4 text-sm text-slate-500">
                    {isLoggedIn ? (
                        <>
                            <Link href={'/account'} className="font-semibold">
                                Merhaba, {username}
                            </Link>
                            <LogoutButton signOut={signOut} />
                        </>
                    ) : (
                        <>
                            <Link href={'/login'} className="font-semibold">
                                Giriş Yap
                            </Link>
                            <Link href={'/register'} className="font-semibold">
                                Kayıt Ol
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}
