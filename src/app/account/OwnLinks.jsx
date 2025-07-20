import React, { useEffect, useReducer, useState } from 'react';
import { PRIMARY_COLOR } from '../../../lib/constants';

export default function OwnLinks({ customLinks, onAdd, onUpdate, onDelete }) {
    const [links, setLinks] = useState(customLinks);
    const [form, setForm] = useState({
        imagePreview: '',
        title: '',
        description: '',
        url: '',
    });
    const [error, setError] = useState('');

    useEffect(() => {
        setLinks(customLinks);
    }, [customLinks]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setForm((prev) => ({
                ...prev,
                imagePreview: file,
            }));
        }
    };

    const handleUpdateImageChange = (e, id) => {
        const file = e.target.files[0];
        if (file) {
            const updatedLinks = links.map((item) => {
                const selectedItem = item._id === id;
                if (selectedItem) {
                    item.imagePreview = file;
                }
                return item;
            });
            setLinks(updatedLinks);
        }
    };

    const handleUpdateChange = (e, id, key) => {
        const value = e.target.value;

        const updatedLinks = links.map((item) => {
            const selectedItem = item._id?.toString() === id?.toString();
            if (selectedItem) {
                return { ...item, [key]: value };
            }
            return item;
        });
        setLinks(updatedLinks);
    };

    const handleAdd = () => {
        setError('');
        if (!form.title || !form.description || !form.url) {
            setError('Bütün alanları doldurunuz.');
            return;
        }

        onAdd(form);
        setForm({ imagePreview: '', title: '', description: '', url: '' });
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Yeni Bağlantı Ekle</h2>
            {error && (
                <div className="mb-4 p-4 m-4 bg-red-100 text-red-800 rounded">
                    {error}
                </div>
            )}
            <div className="bg-white shadow-md rounded-md p-4 flex space-x-6">
                <div className="relative w-32 h-32 rounded-full bg-gray-300 overflow-hidden border-[4px] border-white shadow-md group shrink-0">
                    {form.imagePreview ? (
                        <img
                            src={
                                typeof form.imagePreview === 'object'
                                    ? URL.createObjectURL(form.imagePreview)
                                    : form.imagePreview
                            }
                            alt="Avatar"
                            className="object-cover w-full h-full"
                        />
                    ) : (
                        <div className="object-cover w-full h-full" />
                    )}
                    <label className="absolute inset-0 bg-black/40 text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                        Bağlantı Fotoğrafı Seç
                        <input
                            type="file"
                            accept=".jpg,.jpeg"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </label>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                    <label htmlFor="fullName" className="block font-medium">
                        Başlık
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                    />
                    <label htmlFor="fullName" className="block font-medium">
                        Açıklama
                    </label>
                    <input
                        type="text"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                    />
                    <label htmlFor="fullName" className="block font-medium">
                        Bağlantı Adresi
                    </label>
                    <input
                        type="text"
                        name="url"
                        value={form.url}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                    />
                    <button
                        onClick={handleAdd}
                        className="w-full text-white py-2 rounded-md hover:bg-green-700 transition"
                        style={{ backgroundColor: PRIMARY_COLOR }}
                    >
                        Kaydet
                    </button>
                </div>
            </div>
            <h2 className="text-2xl font-semibold mt-16">Tüm Bağlantılar</h2>
            {links.map((item) => {
                return (
                    <div className="bg-white shadow-md rounded-md p-4 flex space-x-6 mt-8">
                        <div className="relative w-32 h-32 rounded-full bg-gray-300 overflow-hidden border-[4px] border-white shadow-md group shrink-0">
                            {item?.imageUrl || item?.imagePreview ? (
                                <img
                                    src={
                                        item?.imagePreview
                                            ? URL.createObjectURL(
                                                  item.imagePreview
                                              )
                                            : item?.imageUrl
                                    }
                                    alt="Avatar"
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <div className="object-cover w-full h-full" />
                            )}
                            <label className="absolute inset-0 text-center bg-black/40 text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                                Bağlantı Fotoğrafı Güncelle
                                <input
                                    type="file"
                                    accept=".jpg,.jpeg"
                                    className="hidden"
                                    onChange={(e) =>
                                        handleUpdateImageChange(e, item._id)
                                    }
                                />
                            </label>
                        </div>
                        <div className="flex flex-col gap-3 flex-1">
                            <label
                                htmlFor="fullName"
                                className="block font-medium"
                            >
                                Başlık
                            </label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Başlık"
                                value={item.title}
                                onChange={(e) =>
                                    handleUpdateChange(e, item._id, 'title')
                                }
                                className="w-full px-3 py-2 border rounded-md"
                            />
                            <label
                                htmlFor="fullName"
                                className="block font-medium"
                            >
                                Açıklama
                            </label>
                            <input
                                type="text"
                                name="description"
                                placeholder="Açıklama"
                                value={item.description}
                                onChange={(e) =>
                                    handleUpdateChange(
                                        e,
                                        item._id,
                                        'description'
                                    )
                                }
                                className="w-full px-3 py-2 border rounded-md"
                            />
                            <label
                                htmlFor="fullName"
                                className="block font-medium"
                            >
                                Bağlantı Adresi
                            </label>
                            <input
                                type="text"
                                name="url"
                                placeholder="https://ornek.com"
                                value={item.url}
                                onChange={(e) =>
                                    handleUpdateChange(e, item._id, 'url')
                                }
                                className="w-full px-3 py-2 border rounded-md"
                            />
                            <div className="flex gap-4">
                                <button
                                    onClick={() => onDelete(item._id)}
                                    className="w-full text-white bg-red-600 py-2 rounded-md hover:bg-red-700 transition"
                                >
                                    Sil
                                </button>
                                <button
                                    onClick={() => onUpdate(item)}
                                    className="w-full text-white py-2 rounded-md hover:bg-green-700 transition"
                                    style={{ backgroundColor: PRIMARY_COLOR }}
                                >
                                    Güncelle
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
