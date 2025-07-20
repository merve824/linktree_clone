'use client';

import { useEffect, useState } from 'react';

export default function ProfileSection({ user, handleSave }) {
    const [headerPreview, setHeaderPreview] = useState(user.headerUrl);
    const [avatarPreview, setAvatarPreview] = useState(
        user.avatarUrl ||
            'https://img.freepik.com/premium-vektor/account-icon-user-icon-vector-graphics_292645-552.jpg'
    );
    const [error, setError] = useState('');
    const [copied, setCopied] = useState(false);

    const [formData, setFormData] = useState({
        fullname: user.fullname || '',
        bio: user.bio || '',
        location: user.location || '',
        username: user.username || '',
    });

    const handleCopy = () => {
        if (user.username) {
            const link = `mylinkhub-fe.vercel.app/${user.username}`;
            navigator.clipboard.writeText(link);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        }
    };

    useEffect(() => {
        setHeaderPreview(user.headerUrl);
        setAvatarPreview(
            user.avatarUrl ||
                'https://img.freepik.com/premium-vektor/account-icon-user-icon-vector-graphics_292645-552.jpg'
        );
        setFormData({
            fullname: user.fullname || '',
            bio: user.bio || '',
            location: user.location || '',
            username: user.username || '',
        });
    }, [user]);

    const handleHeaderChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const allowedTypes = ['image/jpeg', 'image/jpg'];
        if (!allowedTypes.includes(file.type)) {
            alert('Lütfen sadece JPG/JPEG dosyası seçin.');
            return;
        }

        if (file) {
            setHeaderPreview(file);
        }
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const allowedTypes = ['image/jpeg', 'image/jpg'];
        if (!allowedTypes.includes(file.type)) {
            alert('Lütfen sadece JPG/JPEG dosyası seçin.');
            return;
        }

        if (file) {
            setAvatarPreview(file);
        }
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        setError('');
        e.preventDefault();

        const userData = {
            fullname: formData.fullname,
            bio: formData.bio,
            location: formData.location,
            username: formData.username,
            headerUrl: headerPreview,
            avatarUrl: avatarPreview,
        };

        handleSave(userData, setError);
    };

    return (
        <div className="w-full space-y-8">
            <div className="relative w-full h-48 md:h-64 bg-gray-200 rounded-xl overflow-hidden group">
                {headerPreview && (
                    <img
                        src={
                            typeof headerPreview === 'object'
                                ? URL.createObjectURL(headerPreview)
                                : headerPreview
                        }
                        alt="Header"
                        className="object-cover w-full h-full"
                    />
                )}
                <label className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    Görseli Değiştir
                    <input
                        type="file"
                        accept=".jpg,.jpeg"
                        className="hidden"
                        onChange={handleHeaderChange}
                    />
                </label>
            </div>

            {error && (
                <div className="mb-4 p-4 bg-red-100 text-red-800 rounded">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative w-48 h-48 rounded-full bg-gray-300 overflow-hidden border-[4px] border-white shadow-md group">
                        <img
                            src={
                                avatarPreview
                                    ? typeof avatarPreview === 'object'
                                        ? URL.createObjectURL(avatarPreview)
                                        : avatarPreview
                                    : 'https://img.freepik.com/premium-vektor/account-icon-user-icon-vector-graphics_292645-552.jpg'
                            }
                            alt="Avatar"
                            className="object-cover w-full h-full"
                        />
                        <label className="absolute inset-0 bg-black/40 text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                            Fotoğrafı Değiştir
                            <input
                                type="file"
                                accept=".jpg,.jpeg"
                                className="hidden"
                                onChange={handleAvatarChange}
                            />
                        </label>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">
                            {formData.fullname || 'Ad Soyad'}
                        </h2>
                        <div>
                            <p
                                className="text-gray-600 cursor-pointer hover:underline"
                                onClick={handleCopy}
                                title="Tıklayarak kopyala"
                            >
                                {user.username
                                    ? `mylinkhub-fe.vercel.app/${user.username}`
                                    : ''}
                            </p>
                            {copied && (
                                <span className="text-green-600 text-sm mt-1 inline-block">
                                    Kopyalandı!
                                </span>
                            )}
                        </div>
                        <p className="text-gray-600 text-sm mt-2">
                            {formData.bio || 'Biyografi henüz eklenmedi.'}
                        </p>
                    </div>
                </div>
                <div className="md:col-span-2 p-6 ">
                    <h3 className="text-lg font-semibold mb-4">
                        Profil Bilgilerini Güncelle
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="fullName"
                                className="block mb-1 font-medium"
                            >
                                Tam İsim
                            </label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                className="w-full border shadow-md border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E5F44]"
                                placeholder="Adınız Soyadınız"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="bio"
                                className="block mb-1 font-medium"
                            >
                                Biyografi
                            </label>
                            <textarea
                                id="bio"
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                rows={4}
                                className="w-full border shadow-md border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E5F44]"
                                placeholder="Kendinizden kısaca bahsedin"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="username"
                                className="block mb-1 font-medium"
                            >
                                Kullanıcı Adı
                            </label>
                            <div className="flex shadow-md items-center border border-gray-300 rounded overflow-hidden focus-within:ring-2 focus-within:ring-[#3E5F44]">
                                <span className="px-3 text-gray-600 text-sm">
                                    mylinkhub-fe.vercel.app/
                                </span>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="flex-1 px-3 py-2 outline-none"
                                    placeholder="kullaniciadi"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="location"
                                className="block mb-1 font-medium"
                            >
                                Konum
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="w-full border border-gray-300 shadow-md rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3E5F44]"
                                placeholder="Yaşadığınız şehir veya bölge"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-[#3E5F44] text-white py-2 px-4 rounded hover:bg-[#335133] transition-colors"
                        >
                            Güncelle
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
