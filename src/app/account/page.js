'use client';
import Sidebar from '../../components/sidebar/Sidebar';
import { useEffect, useState } from 'react';
import ProfileSection from './ProfileSection';
import { useDispatch, useSelector } from 'react-redux';
import {
    addCustomLink,
    changeBackgroundColor,
    changeFont,
    deleteAccount,
    deleteCustomLink,
    freezeAccount,
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
import { clear } from '../../../lib/slices/userSlice';
import Settings from './Settings';

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
            if (imagePreview) {
                imageUrl = await uploadImageToImgbb(imagePreview);
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

    const handleFreezeAccount = async () => {
        const confirmed = confirm(
            'Hesabınızı dondurmak istediğinize emin misiniz?'
        );

        if (!confirmed) return;

        dispatch(showLoading());
        try {
            await freezeAccount(token);

            signOut();
        } catch (error) {
            // err
        } finally {
            setTimeout(() => {
                dispatch(hideLoading());
            }, 1000);
        }
    };

    const handleDeleteAccount = async () => {
        const confirmed = confirm(
            'Hesabınızı silmek istediğinize emin misiniz? Bu işlem geri alınamaz.'
        );

        if (!confirmed) return;

        dispatch(showLoading());
        try {
            await deleteAccount(token);
            signOut();
        } catch (error) {
            //
        } finally {
            setTimeout(() => {
                dispatch(hideLoading());
            }, 1000);
        }
    };

    const onColorChange = async (color) => {
        dispatch(showLoading());
        try {
            const { backgroundColor } = await changeBackgroundColor(
                token,
                color
            );
            setUser({ ...user, backgroundColor });
        } catch (error) {
            // err
        } finally {
            setTimeout(() => {
                dispatch(hideLoading());
            }, 1000);
        }
    };

    const onFontChange = async (font) => {
        dispatch(showLoading());
        try {
            const response = await changeFont(token, font);
            setUser({ ...user, font: response.font });
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
                return (
                    <Settings
                        handleFreezeAccount={handleFreezeAccount}
                        handleDeleteAccount={handleDeleteAccount}
                        initialColor={user.backgroundColor}
                        onColorChange={onColorChange}
                        initialFont={user.font}
                        onFontChange={onFontChange}
                    />
                );
            default:
                return null;
        }
    };

    const signOut = () => {
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

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <Sidebar
                selected={selectedSection}
                onSelect={setSelectedSection}
                signOut={signOut}
            />
            <div className="flex-1 p-6">{renderContent()}</div>
        </div>
    );
}
