import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthUserProvider } from '@/context/authContext';
import { Layout } from '@/components/Layout';
// import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // const [currentUser, setCurrentUser] = useState(null);


  return (
    <AuthUserProvider >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthUserProvider>
  );
}
