import HeroForm from '@/components/hero-form/HeroForm';

export default async function Home() {
    return (
        <main>
            <section className="max-w-4xl mx-auto p-6 pt-24">
                <div className="max-w-md mb-8">
                    <h1 className="text-6xl font-bold">
                        Her şey için
                        <br />
                        tek bağlantınız
                    </h1>
                    <h2 className="text-gray-500 text-xl mt-6">
                        Bağlantılarınız, sosyal profilleriniz, iletişim
                        bilgileriniz ve daha fazlasını tek sayfada gösterin.
                    </h2>
                </div>
                <HeroForm />
            </section>
        </main>
    );
}
