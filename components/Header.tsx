import { useAuth } from '@/context/authContext';
import * as React from 'react';

export function Header() {
    const user = useAuth();
    console.log(user);
    return (
        <div className='sticky top-0 w-full left-0 flex items-center justify-between p-4 text-white'>
            <h1>Productor</h1>
            {user && user.authUser && <h1>{user.authUser.displayName}</h1>}
        </div>
    );
}
