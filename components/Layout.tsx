import * as React from 'react';
import { Header } from './Header';

export interface ILayoutProps {
    children: any;
}

export function Layout(props: ILayoutProps) {
    const { children } = props;

    return (
        <div className='flex flex-col min-h-screen relative bg-slate-900'>
            <Header />
            <main className='flex-1 bg-yellow-400'>
                {children}
            </main>
        </div>
    );
}