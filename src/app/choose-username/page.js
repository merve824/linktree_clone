'use client';

import { use, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProfile, preChooseUsername } from '@/services/userServices';
import {
    setRegistrationEmail,
    setRegistrationPhone,
    setRegistrationUsername,
} from '../../../lib/slices/userSlice';
import { hideLoading, showLoading } from '../../../lib/slices/loadingSlice';
import RegistrationStepper from '@/components/registration/RegistrationStepper';
import { uploadImageToImgbb } from '@/services/imageService';

export default function UsernameForm() {
    const dispatch = useDispatch();
    const {
        token,
        registrationUsername,
        registrationPhone,
        registrationEmail,
    } = useSelector((state) => state.user);

    const [username, setUsername] = useState(registrationUsername);
    const [taken, setTaken] = useState('');

    useEffect(() => {
        setUsername(registrationUsername);
    }, [registrationUsername]);

    const checkUsername = async (username) => {
        setTaken('');
        let data;
        if (registrationPhone) {
            data = {
                username,
                phone: registrationPhone,
            };
        } else if (registrationEmail) {
            data = {
                username,
                email: registrationEmail,
            };
        } else {
            return false;
        }

        dispatch(showLoading());
        try {
            await preChooseUsername(data, token);
            return true;
        } catch (error) {
            setTaken(error);
            return false;
        } finally {
            dispatch(hideLoading());
        }
    };

    const register = async (user) => {
        let data;
        if (registrationPhone) {
            data = {
                phone: registrationPhone,
                ...user,
            };
        } else if (registrationEmail) {
            data = {
                email: registrationEmail,
                ...user,
            };
        } else {
            return;
        }

        dispatch(showLoading());

        console.log(data);

        try {
            let imageUrl = '';
            if (data.imageFile) {
                imageUrl = await uploadImageToImgbb(data.imageFile);
            }

            data.avatarUrl = imageUrl;

            await createProfile(data, token);

            dispatch(setRegistrationEmail(''));
            dispatch(setRegistrationPhone(''));
            dispatch(setRegistrationUsername(''));
            localStorage.removeItem('registrationEmail');
            localStorage.removeItem('registrationPhone');
            localStorage.removeItem('registrationUsername');
            window.location.href = '/';
        } catch (error) {
            setTaken(error);
        } finally {
            dispatch(hideLoading());
        }

        console.log(data);
    };

    return (
        <RegistrationStepper
            initialUsername={username}
            checkUsername={checkUsername}
            isUsernameTaken={taken}
            register={register}
        />
    );
}
