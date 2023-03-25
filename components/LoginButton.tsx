import * as React from 'react';
import { signInWithGoogle } from "../firebase/sign";

export function LoginButton() {
    return (
        <div>
            <button onClick={() => signInWithGoogle()}>
                LOGIN
            </button>
        </div>
    );
}
