'use client';
import Sidebar from '../../components/sidebar/Sidebar';
import { useEffect, useState } from 'react';
import ProfileSection from './ProfileSection';
import { useSelector } from 'react-redux';
import { getAccountDetails, updateProfile } from '@/services/userServices';
import { uploadImageToImgbb } from '@/services/imageService';

export default function AccountPage() {
    const [user, setUser] = useState({});
    const [selectedSection, setSelectedSection] = useState('Profil');

    const { token } = useSelector((state) => state.user);
    useEffect(() => {
        const handleUser = async () => {
            try {
                const response = await getAccountDetails(token);
                setUser(response);
            } catch (error) {
                // err
            }
        };

        if (token) {
            handleUser();
        }
    }, [token]);

    const handleSave = async (data, setError) => {
        try {
            if (typeof data.headerUrl === 'object') {
                data.headerUrl = await uploadImageToImgbb(data.headerUrl);
            }

            if (typeof data.avatarUrl === 'object') {
                data.avatarUrl = await uploadImageToImgbb(data.avatarUrl);
            }

            const response = await updateProfile(data, token);
            setUser(response.user);
        } catch (error) {
            setError(error);
        }
    };

    const renderContent = () => {
        switch (selectedSection) {
            case 'Profil':
                return <ProfileSection user={user} handleSave={handleSave} />;
            case 'Sosyal Medya':
                return <div>Sosyal Medya Ayarları</div>;
            case 'Bağlantılar':
                return <div>Bağlantı Yönetimi</div>;
            case 'Ayarlar':
                return <div>Hesap Ayarları</div>;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <Sidebar selected={selectedSection} onSelect={setSelectedSection} />
            <div className="flex-1 p-6">{renderContent()}</div>
        </div>
    );
}
