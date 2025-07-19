'use client';
import Sidebar from '../../components/sidebar/Sidebar';
import { useEffect, useState } from 'react';
import ProfileSection from './ProfileSection';
import { useDispatch, useSelector } from 'react-redux';
import {
    addCustomLink,
    deleteCustomLink,
    getAccountDetails,
    getCustomLinks,
    getSocialMediaLinks,
    updateCustomLink,
    updateProfile,
    updateSocialLinks,
} from '@/services/userServices';
import { uploadImageToImgbb } from '@/services/imageService';
import { hideLoading, showLoading } from '../../../lib/slices/loadingSlice';
import SocialLinksForm from './SocialLinks';
import OwnLinks from './OwnLinks';

export default function AccountPage() {
    const [user, setUser] = useState({});
    const [selectedSection, setSelectedSection] = useState('Profil');
    const [socialMediaLinks, setSocialMediaLinks] = useState({});
    const [customLinks, setCustomLinks] = useState([]);

    const dispatch = useDispatch();

    const { token } = useSelector((state) => state.user);
    useEffect(() => {
        const handleUser = async () => {
            try {
                const response = await getAccountDetails(token);
                setUser(response);

                const { socialLinks } = await getSocialMediaLinks(token);
                setSocialMediaLinks(socialLinks);

                const { customLinks } = await getCustomLinks(token);
                setCustomLinks(customLinks);
            } catch (error) {
                // err
            }
        };

        if (token) {
            handleUser();
        }
    }, [token]);

    const handleSave = async (data, setError) => {
        dispatch(showLoading());
        try {
            if (typeof data.headerUrl === 'object') {
                data.headerUrl = await uploadImageToImgbb(data.headerUrl);
            }

            if (typeof data.avatarUrl === 'object') {
                data.avatarUrl = await uploadImageToImgbb(data.avatarUrl);
            }

            const response = await updateProfile(data, token);
            setUser({ ...user, ...response.user });
        } catch (error) {
            setError(error);
        } finally {
            setTimeout(() => {
                dispatch(hideLoading());
            }, [2000]);
        }
    };

    const handleLink = async (data) => {
        dispatch(showLoading());
        try {
            const { socialLinks } = await updateSocialLinks(data, token);
            setSocialMediaLinks(socialLinks);
        } catch (error) {
            // errr
        } finally {
            setTimeout(() => {
                dispatch(hideLoading());
            }, 1000);
        }
    };

    const handleCustomLinkAdd = async (data) => {
        dispatch(showLoading());
        const { title, description, url, imagePreview } = data;
        try {
            let imageUrl = '';
            if (data.imagePreview) {
                imageUrl = await uploadImageToImgbb(data.imagePreview);
            }

            const { customLinks } = await addCustomLink(
                {
                    title,
                    description,
                    url,
                    imageUrl,
                },
                token
            );

            setCustomLinks(customLinks);
        } catch (error) {
            // err
        } finally {
            setTimeout(() => {
                dispatch(hideLoading());
            }, 1000);
        }
    };

    const handleCustomLinkUpdate = async (item) => {
        dispatch(showLoading());
        try {
            let imageUrl = item.imageUrl;
            if (item.imagePreview) {
                imageUrl = await uploadImageToImgbb(item.imagePreview);
            }

            const { customLinks } = await updateCustomLink(
                {
                    title: item.title,
                    description: item.description,
                    url: item.url,
                    imageUrl,
                    id: item._id,
                },
                token
            );

            setCustomLinks(customLinks);
        } catch (error) {
            // err
        } finally {
            setTimeout(() => {
                dispatch(hideLoading());
            }, 1000);
        }
    };

    const handleCustomLinkDelete = async (id) => {
        dispatch(showLoading());
        try {
            const { customLinks } = await deleteCustomLink(id, token);
            setCustomLinks(customLinks);
        } catch (error) {
            // err
        } finally {
            setTimeout(() => {
                dispatch(hideLoading());
            }, 1000);
        }
    };

    const renderContent = () => {
        switch (selectedSection) {
            case 'Profil':
                return <ProfileSection user={user} handleSave={handleSave} />;
            case 'Sosyal Medya':
                return (
                    <SocialLinksForm
                        initialLinks={socialMediaLinks}
                        onSave={handleLink}
                    />
                );
            case 'Bağlantılar':
                return (
                    <OwnLinks
                        customLinks={customLinks}
                        onAdd={handleCustomLinkAdd}
                        onUpdate={handleCustomLinkUpdate}
                        onDelete={handleCustomLinkDelete}
                    />
                );
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
