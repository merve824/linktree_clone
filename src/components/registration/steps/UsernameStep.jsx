import { PRIMARY_COLOR } from '../../../../lib/constants';

export default function UsernameStep({
    username,
    onUsernameChange,
    isUsernameTaken,
    nextStep,
}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold text-center mb-2">
                Kullanıcı adını belirle
            </h1>
            <p className="text-center mb-6 text-gray-500">
                Seni en iyi yansıtan bir kullanıcı adı seç.
            </p>

            <div className="max-w-xs mx-auto">
                <input
                    name="username"
                    className="block shadow-md p-2 mx-auto border w-full mb-2 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                    value={username || ''}
                    type="text"
                    onChange={(e) => onUsernameChange(e.target.value)}
                    placeholder="kullanıcı adı"
                />

                {isUsernameTaken && (
                    <div className="bg-red-100 border border-red-400 text-red-700 p-2 mb-2 text-center rounded-md">
                        {isUsernameTaken}
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full text-white py-3 rounded-md hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                    disabled={!username || (username && username.length < 3)}
                >
                    Devam Et
                </button>
            </div>
        </form>
    );
}
