import Link from 'next/link';
import { PRIMARY_COLOR } from '../../../lib/constants';

export default function About() {
    return (
        <section className="max-w-4xl mx-auto px-6 py-16">
            <h1
                className="text-4xl font-bold mb-6 text"
                style={{ color: PRIMARY_COLOR }}
            >
                Hakkımızda
            </h1>

            <p className="mb-6 text-gray-700 leading-relaxed">
                MyLinkHub olarak, kullanıcıların tüm bağlantılarını tek bir
                sayfada kolayca paylaşabilmelerini sağlıyoruz. Misyonumuz,
                dijital varlıklarınızı sade ve etkili bir şekilde organize
                etmeniz için modern çözümler sunmaktır.
            </p>

            <p className="mb-6 text-gray-700 leading-relaxed">
                Takımımız teknoloji ve tasarım alanında deneyimli
                profesyonellerden oluşmaktadır. Yenilikçi ve kullanıcı odaklı
                yaklaşımımızla, her gün daha iyi hizmet vermek için çalışıyoruz.
            </p>

            <h2
                className="text-2xl font-semibold mb-4 text"
                style={{ color: PRIMARY_COLOR }}
            >
                Değerlerimiz
            </h2>
            <ul className="list-disc list-inside mb-6 text-gray-700 space-y-2">
                <li>Kullanıcı deneyimi odaklı tasarım</li>
                <li>Gizlilik ve güvenlik önceliğimizdir</li>
                <li>Kesintisiz destek ve sürekli gelişim</li>
            </ul>

            <h2
                className="text-2xl font-semibold mb-4 text"
                style={{ color: PRIMARY_COLOR }}
            >
                Bizimle İletişime Geçin
            </h2>
            <p className="text-gray-700 leading-relaxed">
                Sorularınız veya önerileriniz için{' '}
                <Link href="/contact">
                    <a className="underline" style={{ color: PRIMARY_COLOR }}>
                        iletişim sayfamızı
                    </a>
                </Link>
                ziyaret edebilirsiniz.
            </p>
        </section>
    );
}
