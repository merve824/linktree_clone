'use client';

import { PRIMARY_COLOR } from '../../../../lib/constants';

export default function PreviewStep({
    prevStep,
    imageFile,
    username,
    about,
    socials,
    fontAndTheme,
    submit,
}) {
    const handleSubmit = async (e) => {
        e.preventDefault();

        submit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold text-center mb-2">
                Profilini incele
            </h1>
            <p className="text-center mb-6 text-gray-500">
                Hesabını oluşturmadan önce seçimlerini kontrol et. Bu bilgileri
                daha sonra değiştirebilirsin.
            </p>

            <div className="space-y-4">
                <div className="flex justify-center">
                    <div className=" relative w-48 h-48 rounded-full bg-gray-300 overflow-hidden border-[4px] border-white shadow-md group">
                        <img
                            src={
                                imageFile
                                    ? typeof imageFile === 'object'
                                        ? URL.createObjectURL(imageFile)
                                        : imageFile
                                    : 'https://img.freepik.com/premium-vektor/account-icon-user-icon-vector-graphics_292645-552.jpg'
                            }
                            alt="Avatar"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                <PreviewItem
                    label={'Kullanıcı Adı'}
                    value={`mylinkhub.to/${username}`}
                />
                <PreviewItem label={'Tam Ad'} value={about.fullname} />
                {about.bio && (
                    <PreviewItem label={'Hakkında'} value={about.bio} />
                )}
                {socials.instagram && (
                    <PreviewItem
                        label={'Instagram'}
                        value={socials.instagram}
                    />
                )}
                {socials.x && <PreviewItem label={'X'} value={socials.x} />}
                {socials.tiktok && (
                    <PreviewItem label={'TikTok'} value={socials.tiktok} />
                )}
                {socials.github && (
                    <PreviewItem label={'GitHub'} value={socials.github} />
                )}
                {fontAndTheme.theme && (
                    <PreviewItem
                        label={'Arka Plan Rengi'}
                        value={fontAndTheme.theme}
                        color={fontAndTheme.theme}
                    />
                )}
                {fontAndTheme.font && (
                    <PreviewItem
                        label={'Yazı Tipi'}
                        value={fontAndTheme.font}
                        font={fontAndTheme.font}
                    />
                )}
            </div>

            <div className="flex justify-between mt-6">
                <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 border w-48 border-gray-300 rounded hover:bg-gray-100"
                >
                    Geri
                </button>

                <button
                    type="submit"
                    className="px-6 py-2 w-48 text-white rounded"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                >
                    Hesabını Oluştur
                </button>
            </div>
        </form>
    );
}

function PreviewItem({ label, value, font, color }) {
    return (
        <div>
            <label className="block text-sm text-gray-500">{label}</label>
            <p
                className="text-lg font-medium"
                style={{ fontFamily: font, color: color }}
            >
                {value || '-'}
            </p>
        </div>
    );
}
