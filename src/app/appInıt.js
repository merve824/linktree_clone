'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    setRegistrationEmail,
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
        const token = localStorage.getItem('token');

        if (registrationEmail)
            dispatch(setRegistrationEmail(registrationEmail));
        if (registrationUsername)
            dispatch(setRegistrationUsername(registrationUsername));
        if (token) dispatch(setToken(token));
    }, [dispatch]);

    return null;
}
