'use client';

import { Provider } from 'react-redux';
import { store } from '../../lib/store';
import AppInit from './appInıt';

export default function Providers({ children }) {
    return (
        <Provider store={store}>
            <AppInit />
            {children}
        </Provider>
    );
}
