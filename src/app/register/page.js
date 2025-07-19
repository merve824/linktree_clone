'use client';

import { useState } from 'react';
import { PRIMARY_COLOR } from '../../../lib/constants';
import { register } from '@/services/authServices';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import {
    setRegistrationEmail,
    setRegistrationPhone,
} from '../../../lib/slices/userSlice';
import { hideLoading, showLoading } from '../../../lib/slices/loadingSlice';

export default function Register() {
    const [activeTab, setActiveTab] = useState('email');
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const router = useRouter();
    const dispatch = useDispatch();

    function handleInputChange(e) {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError('Şifreler eşleşmiyor.');
            return;
        }

        const { email, phone, password } = formData;

        let data;

        if (activeTab === 'email') {
            data = {
                email,
                password,
            };
        } else {
            data = {
                phone,
                password,
            };
        }

        setError('');
        dispatch(showLoading());

        try {
            await register(data);
            setSubmitted(true);

            if (activeTab === 'email') {
                dispatch(setRegistrationEmail(email));
                setTimeout(() => {
                    localStorage.setItem('registrationEmail', email);
                    router.push('/verify');
                }, 2000);
            } else {
                dispatch(setRegistrationPhone(phone));
                setTimeout(() => {
                    localStorage.setItem('registrationPhone', phone);
                    router.push('/choose-username');
                }, 2000);
            }
        } catch (error) {
            setError(error);
            setSubmitted(false);
        } finally {
            dispatch(hideLoading());
        }
    }

    return (
        <main className="max-w-md mx-auto p-6 pt-16">
            <h1
                className="text-3xl font-bold mb-6"
                style={{ color: PRIMARY_COLOR }}
            >
                Kayıt Ol
            </h1>

            <div className="mb-6 border-b border-gray-300 flex">
                <button
                    onClick={() => setActiveTab('email')}
                    className={`flex-1 py-2 text-center font-semibold ${
                        activeTab === 'email'
                            ? 'border-b-4 border-[#3E5F44] text-[#3E5F44]'
                            : 'text-gray-500 hover:text-gray-700'
                    }`}
                    type="button"
                >
                    E-posta ile
                </button>
                <button
                    onClick={() => setActiveTab('phone')}
                    className={`flex-1 py-2 text-center font-semibold ${
                        activeTab === 'phone'
                            ? 'border-b-4 border-[#3E5F44] text-[#3E5F44]'
                            : 'text-gray-500 hover:text-gray-700'
                    }`}
                    type="button"
                >
                    Telefon ile
                </button>
            </div>

            {submitted && (
                <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
                    Kaydınız başarıyla alındı!
                </div>
            )}

            {error && (
                <div className="mb-4 p-4 bg-red-100 text-red-800 rounded">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {activeTab === 'email' && (
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 font-semibold"
                        >
                            E-posta
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="ornek@mail.com"
                            className="w-full border shadow-md border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E5F44]"
                        />
                    </div>
                )}

                {activeTab === 'phone' && (
                    <div>
                        <label
                            htmlFor="phone"
                            className="block mb-2 font-semibold"
                        >
                            Telefon Numarası
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+90 5xx xxx xx xx"
                            className="w-full border shadow-md border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E5F44]"
                        />
                    </div>
                )}

                <div>
                    <label
                        htmlFor="password"
                        className="block mb-2 font-semibold"
                    >
                        Şifre
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        minLength={6}
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="En az 8 karakter"
                        className="w-full border shadow-md border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E5F44]"
                    />
                </div>

                <div>
                    <label
                        htmlFor="confirmPassword"
                        className="block mb-2 font-semibold"
                    >
                        Şifre Tekrar
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                        minLength={6}
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Şifrenizi tekrar girin"
                        className="w-full border shadow-md border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E5F44]"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full text-white py-3 rounded hover:bg-[#335133] transition-colors"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                >
                    Kayıt Ol
                </button>
            </form>
        </main>
    );
}
