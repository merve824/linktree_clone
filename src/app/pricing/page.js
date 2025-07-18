import { PRIMARY_COLOR } from '../../../lib/constants';

export default function Pricing() {
    return (
        <main className="max-w-5xl mx-auto p-6">
            <h1
                className="text-4xl font-bold mb-8 text"
                style={{ color: PRIMARY_COLOR }}
            >
                Fiyatlandırma
            </h1>

            <div className="grid gap-8 md:grid-cols-3">
                <div className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
                    <h2 className="text-2xl font-semibold mb-4">Ücretsiz</h2>
                    <p className="text-3xl font-bold mb-6">
                        ₺0 <span className="text-base font-normal">/ ay</span>
                    </p>
                    <ul className="mb-6 space-y-2 text-gray-700">
                        <li>Temel link paylaşımı</li>
                        <li>1 adet link listesi</li>
                        <li>Basit analizler</li>
                        <li>Topluluk desteği</li>
                    </ul>
                    <button
                        className="w-full bg text-white py-2 rounded hover:bg-[#335133] transition-colors"
                        style={{ backgroundColor: PRIMARY_COLOR }}
                    >
                        Ücretsiz Başla
                    </button>
                </div>

                <div
                    className="border rounded-lg p-6 shadow-lg  text-white"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                >
                    <h2 className="text-2xl font-semibold mb-4">Profesyonel</h2>
                    <p className="text-3xl font-bold mb-6">
                        ₺49 <span className="text-base font-normal">/ ay</span>
                    </p>
                    <ul className="mb-6 space-y-2">
                        <li>Limitsiz link listesi</li>
                        <li>Detaylı analizler</li>
                        <li>Özel tema desteği</li>
                        <li>Öncelikli destek</li>
                    </ul>
                    <button
                        className="w-full bg-white py-2 rounded hover:bg-gray-100 transition-colors"
                        style={{ color: PRIMARY_COLOR }}
                    >
                        Hemen Katıl
                    </button>
                </div>

                <div className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
                    <h2 className="text-2xl font-semibold mb-4">Kurumsal</h2>
                    <p className="text-3xl font-bold mb-6">Özel Fiyat</p>
                    <ul className="mb-6 space-y-2 text-gray-700">
                        <li>Özel entegrasyonlar</li>
                        <li>Kurumsal destek</li>
                        <li>Özel raporlama</li>
                        <li>Özel eğitimler</li>
                    </ul>
                    <button
                        className="w-full  text-white py-2 rounded hover:bg-[#335133] transition-colors"
                        style={{ backgroundColor: PRIMARY_COLOR }}
                    >
                        Teklif Al
                    </button>
                </div>
            </div>
        </main>
    );
}
