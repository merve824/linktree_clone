import './globals.css';
import Header from './components/header/Header';
import { Inter } from 'next/font/google';

export const metadata = {
    title: 'MyLinkHub',
    description: 'Modern link paylaşım uygulaması',
};

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['400', '600', '700'],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.variable}>
            <body>
                <Header />
                <main className="min-h-screen">{children}</main>
            </body>
        </html>
    );
}
