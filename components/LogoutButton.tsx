import { auth } from '@/firebase/config';
import * as React from 'react';

export function LogoutButton() {
    return (
        <div>
            <button onClick={() => auth.signOut()}>
                LOGOUT
            </button>
        </div>
    );
}
