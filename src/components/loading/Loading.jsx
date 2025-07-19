'use client';
import { useSelector } from 'react-redux';

export default function Loading() {
    const isLoading = useSelector((state) => state.loading.isLoading);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 bg-white bg-opacity-60 flex items-center justify-center z-[9999]">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-[#3E5F44] rounded-full animate-spin"></div>
        </div>
    );
}
