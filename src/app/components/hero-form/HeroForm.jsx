'use client';

import { PRIMARY_COLOR } from '../../../../lib/constants';

export default function HeroForm() {
    async function handleSubmit(ev) {
        ev.preventDefault();
        const form = ev.target;
        const input = form.querySelector('input');
        const username = input.value;
        alert(username);
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="inline-flex items-center shadow-lg bg-white shadow-gray-500/20"
        >
            <span className="bg-white py-4 pl-4">mylinkhub.to/</span>
            <input
                type="text"
                className="focus:outline-none focus:ring-0"
                style={{
                    backgroundColor: 'white',
                    marginBottom: 0,
                    paddingLeft: 0,
                }}
                placeholder="kullanıcı adı"
            />
            <button
                type="submit"
                className=" text-white py-4 px-6 whitespace-nowrap rounded-r-xl"
                style={{ backgroundColor: PRIMARY_COLOR }}
            >
                Ücretsiz Başla!
            </button>
        </form>
    );
}
