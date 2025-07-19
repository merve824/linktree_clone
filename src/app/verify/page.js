'use client';

import { useEffect, useState } from 'react';
import { PRIMARY_COLOR } from '../../../lib/constants';
import { useDispatch, useSelector } from 'react-redux';
import { resendRegistrationOTP, verifyOTP } from '@/services/authServices';
import { setRegistrationEmail } from '../../../lib/slices/userSlice';
import { hideLoading, showLoading } from '../../../lib/slices/loadingSlice';

export default function OTPVerify() {
    const [otp, setOtp] = useState('');
    const [timeLeft, setTimeLeft] = useState(180);
    const [canResend, setCanResend] = useState(false);
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState('');

    const { registrationEmail } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (timeLeft <= 0) {
            setCanResend(true);
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60)
            .toString()
            .padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        if (value.length <= 6) {
            setOtp(value);
        }
    };

    const handleVerify = async (e) => {
        e.preventDefault();

        dispatch(showLoading());
        try {
            await verifyOTP({ otp, email: registrationEmail });
            setVerified(true);
            setTimeout(() => {
                window.location.href = '/choose-username';
            }, 2000);
        } catch (error) {
            setError(error);
        } finally {
            dispatch(hideLoading());
        }
    };

    const handleResend = async () => {
        setTimeLeft(180);
        setCanResend(false);
        setOtp('');
        try {
            await resendRegistrationOTP({ email: registrationEmail });
        } catch (error) {
            setError(error);
        }
    };

    return (
        <main className="max-w-sm mx-auto p-6 pt-16 text-center">
            <h1 className="text-2xl font-bold mb-4">OTP Doğrulama</h1>

            {verified ? (
                <div className="bg-green-100 text-green-700 p-4 rounded">
                    OTP başarıyla doğrulandı!
                </div>
            ) : (
                <>
                    <p className="mb-4 text-gray-600">
                        Lütfen size gönderilen 6 haneli kodu girin.
                    </p>

                    {error && (
                        <div className="mb-4 p-4 bg-red-100 text-red-800 rounded">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleVerify} className="space-y-4">
                        <input
                            type="text"
                            maxLength={6}
                            value={otp}
                            onChange={handleChange}
                            className="text-center shadow-md text-2xl tracking-widest w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="••••••"
                            style={{ borderColor: PRIMARY_COLOR }}
                        />

                        <button
                            type="submit"
                            className="w-full text-white py-2 rounded  transition"
                            style={{ backgroundColor: PRIMARY_COLOR }}
                            disabled={otp.length !== 6}
                        >
                            Doğrula
                        </button>
                    </form>

                    <p className="mt-4 text-gray-600">
                        Kod süresi: <strong>{formatTime(timeLeft)}</strong>
                    </p>

                    {canResend && (
                        <button
                            onClick={handleResend}
                            className="mt-4 text-sm underline hover:text-blue-800"
                            style={{ color: PRIMARY_COLOR }}
                        >
                            Kodu tekrar gönder
                        </button>
                    )}
                </>
            )}
        </main>
    );
}
