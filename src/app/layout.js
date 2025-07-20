import './globals.css';
import Header from '../components/header/Header';
import Providers from './providers';
import { Poppins, Roboto, Lato, Inter } from 'next/font/google';

export const metadata = {
    title: 'MyLinkHub',
    description: 'Modern link paylaşım uygulaması',
};

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['400', '600', '700'],
});

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-poppins',
});
export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-roboto',
});
export const lato = Lato({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-lato',
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.variable}>
            <body>
                <Providers>
                    <Header />
                    <main className="min-h-screen">{children}</main>
                </Providers>
            </body>
        </html>
    );
}
