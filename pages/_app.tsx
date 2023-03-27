import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthUserProvider } from '@/context/authContext';
import { Layout } from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthUserProvider >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthUserProvider>
  );
}
