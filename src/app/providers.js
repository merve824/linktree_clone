'use client';

import { Provider } from 'react-redux';
import { store } from '../../lib/store';
import AppInit from './appInıt';
import Loading from '../components/loading/Loading';

export default function Providers({ children }) {
    return (
        <Provider store={store}>
            <AppInit />
            <Loading />
            {children}
        </Provider>
    );
}
