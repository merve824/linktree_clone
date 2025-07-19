'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    setRegistrationEmail,
    setRegistrationPhone,
    setRegistrationUsername,
    setToken,
} from '../../lib/slices/userSlice';

export default function AppInit() {
    const dispatch = useDispatch();

    useEffect(() => {
        const registrationEmail = localStorage.getItem('registrationEmail');
        const registrationUsername = localStorage.getItem(
            'registrationUsername'
        );
        const registrationPhone = localStorage.getItem('registrationPhone');
        const token = localStorage.getItem('token');

        if (registrationEmail)
            dispatch(setRegistrationEmail(registrationEmail));
        if (registrationUsername)
            dispatch(setRegistrationUsername(registrationUsername));
        if (token) dispatch(setToken(token));
        if (registrationPhone)
            dispatch(setRegistrationPhone(registrationPhone));
    }, [dispatch]);

    return null;
}
