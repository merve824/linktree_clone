'use client';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PRIMARY_COLOR } from '../../../lib/constants';

export default function LogoutButton({
    className = 'flex items-center gap-2 border p-2 px-4 shadow rounded-l',
    iconLeft = false,
    iconClasses = 'text-white',
    signOut,
}) {
    return (
        <button
            className={className}
            style={{ backgroundColor: PRIMARY_COLOR }}
            onClick={() => signOut()}
        >
            {iconLeft && (
                <FontAwesomeIcon
                    icon={faRightFromBracket}
                    className={iconClasses}
                />
            )}
            <span className="text-white">Çıkış Yap</span>
            {!iconLeft && (
                <FontAwesomeIcon
                    icon={faRightFromBracket}
                    className={iconClasses}
                />
            )}
        </button>
    );
}
