import ProfileBackgroundPicker from '@/components/profile-background-picker/ProfileBackgroundPicler';
import { PRIMARY_COLOR } from '../../../lib/constants';
import FontSelector from '@/components/font-selector/FontSelector';

export default function Settings({
    handleFreezeAccount,
    handleDeleteAccount,
    initialColor,
    onColorChange,
    initialFont,
    onFontChange,
}) {
    const actions = [
        {
            label: 'Hesap Dondurma',
            description:
                'Hesabınızı geçici olarak dondurabilirsiniz. Bu süre zarfında profiliniz ve bağlantılarınız kimse tarafından görüntülenemez. Daha sonra tekrar giriş yaparak hesabınızı yeniden aktif hale getirebilirsiniz.',
            onClick: handleFreezeAccount,
            buttonText: 'Hesabı Dondur',
        },
        {
            label: 'Hesap Silme',
            description:
                'Hesabınızı kalıcı olarak silmek üzeresiniz. Bu işlem geri alınamaz. Tüm verileriniz, profiliniz ve bağlantılarınız kalıcı olarak silinecektir. Lütfen emin olun.',
            onClick: handleDeleteAccount,
            buttonText: 'Hesabı Sil',
        },
    ];

    return (
        <div>
            {actions.map(({ label, description, onClick, buttonText }) => (
                <div className="w-full bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 mt-8">
                    <label className="text-xl font-semibold">{label}</label>

                    <p className="text-gray-600">{description}</p>

                    <div className="flex justify-end">
                        <button
                            onClick={onClick}
                            className=" text-white px-4 py-2 rounded-md hover:bg-red-700 transition w-48"
                            style={{ backgroundColor: PRIMARY_COLOR }}
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            ))}
            <ProfileBackgroundPicker
                initialColor={initialColor}
                onColorChange={onColorChange}
            />
            <FontSelector
                initialFont={initialFont}
                onFontChange={onFontChange}
            />
        </div>
    );
}
